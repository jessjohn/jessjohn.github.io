import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={() => navigate('/')}>
        <span className="navbar-logo-text">jessjohnson.dev</span>
      </button>
      <div className="navbar-links">
        {navLinks.map(({ label, path }) => (
          <button
            key={path}
            className={`navbar-link${location.pathname === path ? ' active' : ''}`}
            onClick={() => navigate(path)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
