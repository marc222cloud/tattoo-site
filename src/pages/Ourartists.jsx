import './Ourartists.css';
import artist1 from '../assets/artist1.jpg';
import artist2 from '../assets/artist2.jpg';
import artist3 from '../assets/artist3.jpg';
import studioBackground from '../assets/tattoobg2.webp';

const artists = [
  {
    name: 'Fred',
    specialty: 'Anime Tattooist',
    image: artist1,
    description:
      'Fred specializes in bold, expressive anime tattoos that bring favorite characters and stories to life. His work combines crisp linework, vivid color, and carefully composed details for one-of-a-kind pieces.',
  },
  {
    name: 'Hannah',
    specialty: 'Blackwork Tattooist',
    image: artist2,
    description:
      'Hannah creates striking blackwork tattoos with a focus on contrast, texture, and clean composition. From ornamental concepts to custom illustrative pieces, every design is shaped around the client.',
    reverse: true,
  },
  {
    name: 'Jake',
    specialty: 'Realism Tattooist',
    image: artist3,
    description:
      'Jake is known for detailed realism that captures depth, character, and emotion. He works closely with each client to turn meaningful references into polished, lasting artwork.',
  },
];

function ArtistProfile({ artist }) {
  return (
    <article className={`artist-profile${artist.reverse ? ' artist-profile--reverse' : ''}`}>
      <div className="artist-profile__image-wrap">
        <img
          className="artist-profile__image"
          src={artist.image}
          alt={`${artist.name}, ${artist.specialty} at Archangel Tattoo & Piercing Studio`}
        />
      </div>

      <div className="artist-profile__content">
        <p className="artist-profile__specialty">{artist.specialty}</p>
        <h2>{artist.name}</h2>
        <span className="artist-profile__accent" aria-hidden="true" />
        <p className="artist-profile__description">{artist.description}</p>

        <div className="artist-profile__actions">
          <a className="artist-profile__button artist-profile__button--outline" href="/gallery">
            View Portfolio
          </a>
          <a className="artist-profile__button artist-profile__button--primary" href="/booking">
            Book with {artist.name}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Ourartists() {
  return (
    <div className="our-artists-page">
      <section
        className="our-artists-hero"
        style={{ backgroundImage: `url(${studioBackground})` }}
        aria-labelledby="our-artists-title"
      >
        <div className="our-artists-hero__overlay">
          <div className="our-artists-hero__content">
            <h1 id="our-artists-title">Our Artists</h1>
            <p>
              Meet the artists behind Archangel. Each member of our team brings a
              distinct style, thoughtful approach, and commitment to exceptional
              custom tattooing.
            </p>
          </div>
        </div>
      </section>

      <section className="our-artists-list" aria-label="Archangel tattoo artists">
        <div className="our-artists-list__container">
          {artists.map((artist) => (
            <ArtistProfile artist={artist} key={artist.name} />
          ))}
        </div>
      </section>
    </div>
  );
}
