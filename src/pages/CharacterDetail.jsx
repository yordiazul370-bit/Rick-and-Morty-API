import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p style={{ textAlign: 'center', color: '#00ff97', marginTop: '40px' }}>Cargando expediente...</p>;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: character.name,
        text: `¡Mira este personaje de Rick & Morty: ${character.name}!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('¡Enlace copiado al portapapeles!');
    }
  };

  const handleSaveFavorite = () => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    const exists = saved.some((item) => item.id === character.id);

    if (!exists) {
      saved.push(character);
      localStorage.setItem('favorites', JSON.stringify(saved));
      alert('⭐ Agregado a favoritos');
    } else {
      alert('Este personaje ya está en tus favoritos.');
    }
  };

  return (
    <div className="fade-in" style={{ padding: '16px', maxWidth: '500px', margin: '0 auto' }}>
      <button onClick={() => navigate(-1)} style={styles.backBtn}>
        ← Volver
      </button>

      <div style={styles.detailCard}>
        <img src={character.image} alt={character.name} style={styles.avatar} />
        <h2 style={{ fontSize: '24px', color: '#fff', textAlign: 'center', marginTop: '12px' }}>{character.name}</h2>
        
        <div style={styles.infoGroup}>
          <div style={styles.infoRow}><span>Especie:</span> <strong>{character.species}</strong></div>
          <div style={styles.infoRow}><span>Género:</span> <strong>{character.gender}</strong></div>
          <div style={styles.infoRow}><span>Origen:</span> <strong>{character.origin?.name}</strong></div>
          <div style={styles.infoRow}><span>Ubicación:</span> <strong>{character.location?.name}</strong></div>
          <div style={styles.infoRow}><span>Apariciones:</span> <strong>{character.episode?.length} episodios</strong></div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button onClick={handleSaveFavorite} className="btn-neon" style={{ flex: 1 }}>
            ⭐ Favorito
          </button>
          <button onClick={handleShare} className="btn-neon" style={{ flex: 1, background: '#1e293b', color: '#00ff97', border: '1px solid #00ff97' }}>
            🔗 Compartir
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#00ff97',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '16px',
    fontWeight: 'bold',
  },
  detailCard: {
    backgroundColor: '#161f30',
    borderRadius: '20px',
    padding: '20px',
    border: '1px solid #2a384f',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  },
  avatar: {
    width: '100%',
    maxHeight: '280px',
    objectFit: 'cover',
    borderRadius: '16px',
    border: '2px solid #00ff97',
  },
  infoGroup: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#0b0f19',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#94a3b8',
  },
};