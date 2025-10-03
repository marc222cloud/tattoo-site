import './Header.css';

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        {/* Left: Brand / Logo */}
        <h1 className="header-brand">Marcy Ink</h1>

        {/* Right: Nav + CTA */}
        <nav className="header-nav" aria-label="Primary">
          <a href="#home" className="header-link">Home</a>
          <a href="#about" className="header-link">About</a>
          <a href="#portfolio" className="header-link">Portfolio</a>
          <a href="#booking" className="header-link header-cta">Book Now</a>
        </nav>
      </div>
    </header>
  );
}