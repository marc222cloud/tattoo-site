import { Link } from 'react-router-dom';
import './Aboutus.css';
import archangelLogo from '../assets/tattoologo2.png';
import studioInterior from '../assets/tattoobg2.webp';

const studioValues = [
  {
    icon: '✎',
    title: 'Custom Designs',
    description:
      'Every tattoo is custom designed to match your vision and express your individuality.',
  },
  {
    icon: '◆',
    title: 'Clean & Professional',
    description:
      'We maintain a clean, welcoming, and safe environment for every client, every time.',
  },
  {
    icon: '★',
    title: 'Experienced Artists',
    description:
      'Our artists specialize in anime, blackwork, realism, and more with years of professional experience.',
  },
];

const reasonsToChoose = [
  'Custom artwork tailored to every client',
  'Experienced artists with unique specialties',
  'Professional and welcoming atmosphere',
  'High-quality equipment and techniques',
  'Commitment to clean, safe tattooing',
];

export default function Aboutus() {
  return (
    <div className="about-page">
      <section className="about-page-hero" aria-labelledby="about-page-title">
        <div className="about-page-hero__overlay">
          <div className="about-page-hero__content">
            <img
              className="about-page-hero__logo"
              src={archangelLogo}
              alt=""
              aria-hidden="true"
            />
            <h1 id="about-page-title">About Archangel</h1>
            <p>
              Passionate artists dedicated to creating high-quality custom tattoos
              in a welcoming, professional environment.
            </p>
          </div>
        </div>
      </section>

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story__container">
          <div className="about-story__image-wrap">
            <img
              src={studioInterior}
              alt="Interior of Archangel Tattoo and Piercing Studio"
            />
          </div>

          <div className="about-story__content">
            <h2 id="about-story-title">Our Story</h2>
            <span className="about-page-accent" aria-hidden="true" />
            <p>
              Located in Utica, Archangel Tattoo &amp; Piercing Studio is built
              around creativity, craftsmanship, and individuality.
            </p>
            <p>
              Our team works closely with every client to create custom tattoos
              that reflect their vision while maintaining the highest standards
              of quality, cleanliness, and professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-values__container">
          <h2 id="about-values-title">What We Stand For</h2>
          <div className="about-values__grid">
            {studioValues.map((value) => (
              <article className="about-value-card" key={value.title}>
                <span className="about-value-card__icon" aria-hidden="true">
                  {value.icon}
                </span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-reasons" aria-labelledby="about-reasons-title">
        <div className="about-reasons__container">
          <h2 id="about-reasons-title">Why Choose Archangel?</h2>
          <ul>
            {reasonsToChoose.map((reason) => (
              <li key={reason}>
                <span aria-hidden="true">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta__overlay">
          <div className="about-cta__content">
            <h2 id="about-cta-title">Ready to Bring Your Idea to Life?</h2>
            <p>
              Whether it’s your first tattoo or your next masterpiece, our artists
              are ready to make it happen.
            </p>
            <Link className="about-cta__button" to="/booking">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
