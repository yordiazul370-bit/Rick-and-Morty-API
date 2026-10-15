import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { path: '/', label: 'Personajes', icon: '👤' },
    { path: '/locations', label: 'Lugares', icon: '🌍' },
    { path: '/favorites', label: 'Favoritos', icon: '⭐' },
    { path: '/minigame', label: 'Portal', icon: '🌀' },
    { path: '/about', label: 'Info', icon: 'ℹ️' },
  ];

  return (
    <nav style={styles.navBar}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => ({
            ...styles.navItem,
            color: isActive ? '#00ff97' : '#94a3b8',
            borderTop: isActive ? '3px solid #00ff97' : '3px solid transparent',
          })}
        >
          <span style={{ fontSize: '20px' }}>{item.icon}</span>
          <span style={{ fontSize: '11px', fontWeight: '600' }}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

const styles = {
  navBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '65px',
    backgroundColor: '#161f30',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTop: '1px solid #2a384f',
    zIndex: 1000,
    boxShadow: '0 -5px 20px rgba(0,0,0,0.5)',
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    width: '20%',
    height: '100%',
    transition: 'all 0.2s ease',
  },
};