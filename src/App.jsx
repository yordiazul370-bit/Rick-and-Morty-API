
import Navbar from './components/Navbar';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import Favorites from './pages/Favorites';
import Minigame from './pages/Minigame';
import About from './pages/About';

// Componentes estáticos adicionales para completar las 5 pestañas
const Locations = () => <div style={{ padding: '20px' }}><h1>Ubicaciones</h1><p>Próximamente...</p></div>;
const Episodes = () => <div style={{ padding: '20px' }}><h1>Episodios</h1><p>Próximamente...</p></div>;

// Cambia esto:
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Por esto otro:
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}