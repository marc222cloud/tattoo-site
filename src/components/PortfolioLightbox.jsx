import { useEffect, useRef } from 'react';
import './PortfolioLightbox.css';

export default function PortfolioLightbox({
  image,
  currentIndex,
  imageCount,
  onClose,
  onPrevious,
  onNext,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      } else if (event.key === 'ArrowRight') {
        onNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="portfolio-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio image viewer"
      onMouseDown={handleBackdropClick}
    >
      <div className="portfolio-lightbox__dialog">
        <button
          className="portfolio-lightbox__close"
          type="button"
          aria-label="Close image viewer"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>

        <div className="portfolio-lightbox__image-wrap">
          <img src={image.src} alt={image.alt} />
        </div>

        <div className="portfolio-lightbox__controls">
          <button type="button" onClick={onPrevious} aria-label="Previous image">
            <span aria-hidden="true">←</span> Previous
          </button>
          <p>{currentIndex + 1} / {imageCount}</p>
          <button type="button" onClick={onNext} aria-label="Next image">
            Next <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
