import { memo } from 'react';
import './GalleryGrid.css';

function GalleryGrid({ images, onImageSelect }) {
  return (
    <div className="gallery-grid" aria-live="polite">
      {images.map((image, index) => (
        <button
          className="gallery-grid__item"
          type="button"
          onClick={() => onImageSelect(index)}
          aria-label={`Open ${image.alt}`}
          key={image.id}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
          />
          <span className="gallery-grid__label">{image.category}</span>
        </button>
      ))}
    </div>
  );
}

export default memo(GalleryGrid);
