import './Hero.css';
import heroBg from '../assets/tattoobg3.jpg';
import logo from '../assets/tattoologo2.png';

export default function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <img
            src={logo}
            alt="Archangel Tattoo & Piercing"
            className="hero-logo"
          />

          <h1 className="hero-title">
            ARCHANGEL TATTOO & PIERCING STUDIO
          </h1>

          <a href="#booking" className="hero-cta">
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}