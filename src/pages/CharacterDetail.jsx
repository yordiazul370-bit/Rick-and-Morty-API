import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <h2>Cargando personaje...</h2>;

  // --- FUNCIÓN DE COMPARTIR (OBJETO COMPARTIDO) ---
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: character.name,
        text: `¡Mira a ${character.name} de Rick y Morty!`,
        url: window.location.href,
      });
    } else {
      alert(`Enlace copiado: ${window.location.href}`);
    }
  };

  // --- FUNCIÓN DE FAVORITOS (LOCALSTORAGE) ---
  const handleSaveFavorite = () => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    const exists = saved.some((item) => item.id === character.id);

    if (!exists) {
      saved.push(character);
      localStorage.setItem('favorites', JSON.stringify(saved));
      alert(`${character.name} guardado en Favoritos!`);
    } else {
      alert('Ya está en tus favoritos.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <img src={character.image} alt={character.name} style={{ width: '100%', borderRadius: '10px' }} />
      <h2>{character.name}</h2>
      <p><strong>Especie:</strong> {character.species}</p>
      <p><strong>Género:</strong> {character.gender}</p>
      <p><strong>Origen:</strong> {character.origin?.name}</p>
      <p><strong>Ubicación actual:</strong> {character.location?.name}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <button onClick={handleSaveFavorite} style={{ padding: '10px', cursor: 'pointer' }}>
          ⭐ Agregar a Favoritos
        </button>
        <button onClick={handleShare} style={{ padding: '10px', cursor: 'pointer' }}>
          🔗 Compartir
        </button>
      </div>
    </div>
  );
}