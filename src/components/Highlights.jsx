
import './Highlights.css';
import tattoo1 from '../assets/tattoo1.jpg';
import tattoo2 from '../assets/tattoo2.jpg';
import tattoo3 from '../assets/tattoo3.webp';

export default function Highlights({
  title = 'Portfolio',
  images = [], // [{src: string, alt?: string, href?: string}]
  galleryHref = '/gallery',
  onGalleryClick,
}) {
  // Take the first three images if provided, otherwise use defaults
  const defaultImages = [
    { src: tattoo1, alt: 'Anime tattoo artwork' },
    { src: tattoo2, alt: 'Realism portrait tattoo artwork' },
    { src: tattoo3, alt: 'Eagle tattoo artwork' },
  ];

  const thumbs = (images.length ? images : defaultImages).slice(0, 3);

  return (
    <section className="highlights" aria-labelledby="hl-title">
      <div className="hl-header">
        <h2 id="hl-title" className="hl-title">{title}</h2>
        {onGalleryClick ? (
          <button type="button" className="hl-gallery-btn" onClick={onGalleryClick}>
            Gallery
          </button>
        ) : (
          <a href={galleryHref} className="hl-gallery-btn">Gallery</a>
        )}
      </div>

      <div className="hl-grid" role="list">
        {(thumbs.length ? thumbs : [0,1,2]).map((item, idx) => {
          const key = typeof item === 'number' ? `ph-${idx}` : item.src || idx;
          const src = typeof item === 'number' ? null : item.src;
          const alt = typeof item === 'number' ? '' : (item.alt || `Portfolio image ${idx+1}`);
          const href = typeof item === 'number' ? null : item.href;

          const imageEl = src ? (
            <img className="hl-img" src={src} alt={alt} loading="lazy" />
          ) : (
            <div className="hl-img placeholder" aria-hidden="true" />
          );

          const card = (
            <article className="hl-card" role="listitem" key={key}>
              {imageEl}
            </article>
          );

          return href ? (
            <a className="hl-card-link" href={href} key={`link-${key}`} aria-label={alt || `Open image ${idx+1}`}>
              {card}
            </a>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
};