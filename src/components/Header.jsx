import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/tattoologo1.png';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        {/* Left: Brand / Logo */}
        <Link to="/" className="header-brand" aria-label="Archangel home">
          <img src={logo} alt="Archangel Tattoo & Piercing" />
        </Link>

        {/* Right: Nav + CTA */}
        <nav className="header-nav" aria-label="Primary">
          <Link to="/" className="header-link">Home</Link>
          <span> | </span>
          <Link to="/artists" className="header-link">Artists</Link>
          <span> | </span>
          <Link to="/gallery" className="header-link">Portfolio</Link>
          <span> | </span>
          <Link to="/about" className="header-link">About</Link>
          <Link to="/booking" className="header-link header-cta">Book Now</Link>
        </nav>
      </div>
    </header>
  );
}
