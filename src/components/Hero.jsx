import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        {/* Left column: text block */}
        <div className="hero-copy">
          <h1 className="hero-title">Archangel Tattoo & Piercing Studio</h1>

          <p className="hero-location">Utica</p>

          <p className="hero-desc">
            Based in Utica. Custom, clean line work and thoughtful design.
            Booking open—tap below. 
          </p>

          <a href="#booking" className="hero-cta">Book Now</a>
        </div>

        {/* Right column: image placeholder */}
        <div className="hero-media" aria-hidden="true">
          {/* Replace `/hero.jpg` with your real image later */}
          <img src="/hero.jpg" alt="Tattoo example" />
        </div>
      </div>
    </section>
  );
}