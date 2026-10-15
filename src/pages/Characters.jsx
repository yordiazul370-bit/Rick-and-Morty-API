import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}&status=${status}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch(() => {
        setCharacters([]);
        setLoading(false);
      });
  }, [search, status]);

  return (
    <div className="fade-in" style={{ padding: '16px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Encabezado */}
      <header style={{ textCenter: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#00ff97', fontSize: '26px', fontWeight: '700', textShadow: '0 0 10px rgba(0,255,151,0.3)' }}>
          Explorador Multiversal
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Rick and Morty Database</p>
      </header>

      {/* Buscador y Filtros */}
      <div style={styles.filterContainer}>
        <input
          type="text"
          placeholder="🔍 Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
          <option value="">Todos</option>
          <option value="alive">🟢 Vivo</option>
          <option value="dead">🔴 Muerto</option>
          <option value="unknown">⚪ Desconocido</option>
        </select>
      </div>

      {/* Indicador de Carga */}
      {loading && <p style={{ textAlign: 'center', color: '#00ff97', marginTop: '40px' }}>Cargando portal...</p>}

      {/* Grid de Tarjetas */}
      {!loading && (
        <div style={styles.grid}>
          {characters.map((char) => (
            <div key={char.id} style={styles.card}>
              <div style={{ position: 'relative' }}>
                <img src={char.image} alt={char.name} style={styles.cardImage} />
                <span
                  style={{
                    ...styles.badge,
                    backgroundColor: char.status === 'Alive' ? '#10b981' : char.status === 'Dead' ? '#ef4444' : '#6b7280',
                  }}
                >
                  {char.status}
                </span>
              </div>

              <div style={{ padding: '12px' }}>
                <h3 style={{ fontSize: '16px', color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {char.name}
                </h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>
                  {char.species} • {char.gender}
                </p>

                <Link to={`/character/${char.id}`} style={{ textDecoration: 'none' }}>
                  <button className="btn-neon" style={{ width: '100%', marginTop: '12px', padding: '8px', fontSize: '13px' }}>
                    Ver Detalle
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  filterContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 2,
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid #2a384f',
    backgroundColor: '#161f30',
    color: '#fff',
    outline: 'none',
    fontSize: '14px',
  },
  select: {
    flex: 1,
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid #2a384f',
    backgroundColor: '#161f30',
    color: '#fff',
    outline: 'none',
    fontSize: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '16px',
  },
  card: {
    backgroundColor: '#161f30',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid #2a384f',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.2s',
  },
  cardImage: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
};
