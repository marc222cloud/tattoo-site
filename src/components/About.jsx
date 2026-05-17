

import './About.css';
import tattooBg from '../assets/tattoobg2.webp';

export default function About() {
  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${tattooBg})`,
      }}
    >
      <div className="about-overlay">
        <h2 className="about-title">About Archangel</h2>

        <p className="about-text">
          Located in Utica, Archangel Tattoo & Piercing Studio is
          built around creativity, precision, and individuality.
          We provide a professional and welcoming environment where
          clients can collaborate with talented artists to bring
          meaningful ideas to life through custom tattoos and body art.
        </p>
      </div>
    </section>
  );
}