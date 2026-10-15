import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((char) => char.id !== id);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mis Personajes Favoritos ⭐</h1>

      {favorites.length === 0 ? (
        <p>No tienes personajes guardados en favoritos aún. Ve a la sección de personajes y agrega algunos.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {favorites.map((char) => (
            <div key={char.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
              <img src={char.image} alt={char.name} style={{ width: '100%', borderRadius: '4px' }} />
              <h3>{char.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Link to={`/character/${char.id}`} style={{ color: '#00b0c8' }}>Detalles</Link>
                <button
                  onClick={() => removeFavorite(char.id)}
                  style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}