import './Header.css';
import logo from '../assets/tattoologo1.png';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        {/* Left: Brand / Logo */}
        <div className="header-brand">
          <img src={logo} alt="Archangel Tattoo & Piercing" />
        </div>

        {/* Right: Nav + CTA */}
        <nav className="header-nav" aria-label="Primary">
          <a href="#home" className="header-link">Home</a>
          <span> | </span>
          <a href="#artists" className="header-link">Artists</a>
          <span> | </span>
          <a href="#portfolio" className="header-link">Portfolio</a>
          <span> | </span>
          <a href="#about" className="header-link">About</a>
          <a href="#booking" className="header-link header-cta">Book Now</a>
        </nav>
      </div>
    </header>
  );
}