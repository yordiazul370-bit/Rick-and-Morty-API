import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';

// Componentes rápidos para completar las 5 pestañas
const Locations = () => <div style={{ padding: '20px' }}><h1>Ubicaciones</h1><p>Próximamente...</p></div>;
const Episodes = () => <div style={{ padding: '20px' }}><h1>Episodios</h1><p>Próximamente...</p></div>;
const Favorites = () => <div style={{ padding: '20px' }}><h1>Mis Favoritos</h1><p>Lee desde localStorage...</p></div>;
const Minigame = () => <div style={{ padding: '20px' }}><h1>Portal Multiversal</h1><p>Pestaña original...</p></div>;
const About = () => <div style={{ padding: '20px' }}><h1>Acerca de</h1><p>Desarrollado por: Tu Nombre</p></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/minigame" element={<Minigame />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
