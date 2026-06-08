import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/messages', label: 'Messages' },
  { path: '/gallery', label: 'Gallery' }
];

function Navbar() {
  return (
    <header className="site-nav">
      <div className="site-brand">May the force be with you</div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
