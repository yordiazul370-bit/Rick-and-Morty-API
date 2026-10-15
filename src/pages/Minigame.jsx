import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Minigame() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomCharacter = async () => {
    setLoading(true);
    // Hay 826 personajes en la API de Rick & Morty
    const randomId = Math.floor(Math.random() * 826) + 1;
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${randomId}`);
      const data = await res.json();
      setCharacter(data);
    } catch (error) {
      console.error('Error al obtener personaje:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🌀 Portal del Multiverso</h1>
      <p>Haz clic en el botón para viajar a otra dimensión y descubrir un personaje aleatorio.</p>

      <button
        onClick={getRandomCharacter}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#00ff97',
          color: '#1a1a1a',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        {loading ? 'Viajando por el portal...' : 'Teletransportar'}
      </button>

      {character && !loading && (
        <div style={{ border: '2px solid #00ff97', borderRadius: '12px', padding: '20px', backgroundColor: '#1e2229', color: '#fff' }}>
          <img src={character.image} alt={character.name} style={{ width: '200px', borderRadius: '50%', border: '4px solid #00ff97' }} />
          <h2>{character.name}</h2>
          <p><strong>Especie:</strong> {character.species}</p>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Origen:</strong> {character.origin?.name}</p>
          <Link to={`/character/${character.id}`} style={{ color: '#00ff97', fontWeight: 'bold' }}>
            Ver perfil completo →
          </Link>
        </div>
      )}
    </div>
  );
}