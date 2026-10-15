import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Characters() {
  // Estados: Guardan los datos que cambian en pantalla
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  // Petición a la API cuando cambia 'search' o 'status'
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}&status=${status}`)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results || []))
      .catch((err) => console.error(err));
  }, [search, status]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Personajes</h1>

      {/* --- BUSCADOR Y FILTROS --- */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ padding: '8px' }}>
          <option value="">Todos los estados</option>
          <option value="alive">Vivo (Alive)</option>
          <option value="dead">Muerto (Dead)</option>
          <option value="unknown">Desconocido</option>
        </select>
      </div>

      {/* --- LISTA DE ELEMENTOS (CARDS) --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {characters.map((char) => (
          <div key={char.id} style={{ border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', padding: '10px' }}>
            <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{char.name}</h3>
            <p>Estado: {char.status}</p>
            <Link to={`/character/${char.id}`} style={{ color: '#00b0c8', fontWeight: 'bold' }}>
              Ver detalles →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}