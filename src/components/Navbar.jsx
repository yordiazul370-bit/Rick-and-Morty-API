import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Rick & Morty App</h2>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>Personajes</Link></li>
        <li><Link to="/locations" style={styles.link}>Ubicaciones</Link></li>
        <li><Link to="/episodes" style={styles.link}>Episodios</Link></li>
        <li><Link to="/favorites" style={styles.link}>Favoritos</Link></li>
        <li><Link to="/minigame" style={styles.link}>Portal Random</Link></li>
        <li><Link to="/about" style={styles.link}>Acerca de</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyBy: 'space-between',
    alignItems: 'center',
    backgroundColor: '#272b33',
    padding: '10px 20px',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: { color: '#00ff97', margin: 0 },
  menu: { display: 'flex', listStyle: 'none', gap: '15px', margin: 0, padding: 0 },
  link: { color: '#fff', textDecoration: 'none', fontWeight: 'bold' }
};