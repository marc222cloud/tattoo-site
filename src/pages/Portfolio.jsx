import { useCallback, useMemo, useState } from 'react';
import './Portfolio.css';
import GalleryGrid from '../components/GalleryGrid';
import PortfolioLightbox from '../components/PortfolioLightbox';

const imageModules = import.meta.glob(
  '../assets/{anime,blackwork,realism}/*.{avif,jpeg,jpg,png,webp}',
  { eager: true, import: 'default' },
);

const categoryLabels = {
  anime: 'Anime',
  blackwork: 'Blackwork',
  realism: 'Realism',
};

const categories = ['all', 'anime', 'blackwork', 'realism'];

const portfolioImages = Object.entries(imageModules)
  .map(([path, src]) => {
    const pathParts = path.split('/');
    const category = pathParts.at(-2);
    const filename = pathParts.at(-1).replace(/\.[^.]+$/, '');
    const imageNumber = filename.match(/\d+/)?.[0];

    return {
      id: path,
      src,
      category,
      alt: `${categoryLabels[category]} tattoo${imageNumber ? ` ${imageNumber}` : ''} by Archangel Tattoo & Piercing Studio`,
      sortNumber: Number(imageNumber) || 0,
    };
  })
  .sort((first, second) => first.sortNumber - second.sortNumber);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredImages = useMemo(
    () => activeCategory === 'all'
      ? portfolioImages
      : portfolioImages.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
    setActiveImageIndex(null);
  }, []);

  const handleImageSelect = useCallback((index) => {
    setActiveImageIndex(index);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handlePrevious = useCallback(() => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    ));
  }, [filteredImages.length]);

  const handleNext = useCallback(() => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    ));
  }, [filteredImages.length]);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="portfolio-hero__overlay">
          <div className="portfolio-hero__content">
            <h1 id="portfolio-title">Our Portfolio</h1>
            <p>
              Explore custom work from the artists at Archangel Tattoo &amp;
              Piercing Studio, from vibrant anime pieces to bold blackwork and
              detailed realism.
            </p>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery" aria-labelledby="portfolio-gallery-title">
        <div className="portfolio-gallery__container">
          <div className="portfolio-gallery__heading">
            <p>Selected Work</p>
            <h2 id="portfolio-gallery-title">Tattoo Gallery</h2>
          </div>

          <div className="portfolio-filters" aria-label="Filter portfolio by style">
            {categories.map((category) => (
              <button
                className={`portfolio-filter${activeCategory === category ? ' portfolio-filter--active' : ''}`}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => handleCategoryChange(category)}
                key={category}
              >
                {category === 'all' ? 'All' : categoryLabels[category]}
              </button>
            ))}
          </div>

          <GalleryGrid images={filteredImages} onImageSelect={handleImageSelect} />
        </div>
      </section>

      {activeImageIndex !== null && (
        <PortfolioLightbox
          image={filteredImages[activeImageIndex]}
          currentIndex={activeImageIndex}
          imageCount={filteredImages.length}
          onClose={handleLightboxClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
