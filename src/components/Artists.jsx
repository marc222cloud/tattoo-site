import './Artists.css';
import artist1 from '../assets/artist1.jpg';
import artist2 from '../assets/artist2.jpg';
import artist3 from '../assets/artist3.jpg';

const artists = [
  {
    id: 1,
    name: 'Fred',
    specialty: 'Anime Tattooist',
    image: artist1,
    alt: 'Fred, anime tattoo artist at Archangel Tattoo & Piercing Studio',
  },
  {
    id: 2,
    name: 'Hannah',
    specialty: 'Blackwork Tattooist',
    image: artist2,
    alt: 'Hannah, blackwork tattoo artist at Archangel Tattoo & Piercing Studio',
  },
  {
    id: 3,
    name: 'Jake',
    specialty: 'Realism Tattooist',
    image: artist3,
    alt: 'Jake, realism tattoo artist at Archangel Tattoo & Piercing Studio',
  },
];

export default function Artists() {
  return (
    <section id="artists" className="artists" aria-labelledby="artists-title">
      <div className="artists-container">
        <div className="artists-header">
          <h2 id="artists-title">Our Artists</h2>
          <p>
            Our team of experienced artists specializes in a wide range of tattoo
            styles, from bold blackwork and anime-inspired pieces to detailed
            realism and custom designs. Every artist at Archangel Tattoo &
            Piercing Studio is committed to creating clean, high-quality work
            tailored to each client’s vision.
          </p>
        </div>

        <div className="artists-grid">
          {artists.map((artist) => (
            <article className="artist-card" key={artist.id}>
              <img src={artist.image} alt={artist.alt} className="artist-image" />
              <h3>{artist.name}</h3>
              <p>{artist.specialty}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
