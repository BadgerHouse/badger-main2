import React, { useState, useEffect } from 'react';
import './PortfolioPage.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Website Redesign',
    category: 'Design',
    description: 'A complete redesign of a corporate website.',
    images: ['/projects/brio-portfolio.png', '/projects/haufen-portfolio.png']
  },
  {
    id: 2,
    title: 'E-commerce App',
    category: 'Development',
    description: 'Full-stack e-commerce application.',
    images: ['/projects/brio-portfolio.png', '/projects/haufen-portfolio.png']
  },
  {
    id: 3,
    title: 'Brand Video Campaign',
    category: 'PR',
    description: 'Promotional video for product launch.',
    images: ['/projects/brio-portfolio.png', '/projects/haufen-portfolio.png'],
    video: '/images/moon.mp4'
  },
];

const categories = ['All', 'Design', 'Development', 'PR'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [modalData, setModalData] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const grid = document.querySelector('.portfolio-grid');
    if (grid) {
      if (filteredItems.length === 1) {
        grid.classList.add('single-item');
      } else {
        grid.classList.remove('single-item');
      }
    }
  }, [filteredItems]);

  const openModal = (item) => {
    setModalData(item);
    setSlideIndex(0);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const nextSlide = () => {
    if (!modalData) return;
    const total = modalData.video ? modalData.images.length + 1 : modalData.images.length;
    setSlideIndex((slideIndex + 1) % total);
  };

  const prevSlide = () => {
    if (!modalData) return;
    const total = modalData.video ? modalData.images.length + 1 : modalData.images.length;
    setSlideIndex((slideIndex - 1 + total) % total);
  };

  const renderSlide = () => {
    if (!modalData) return null;
    if (modalData.video && slideIndex === 0) {
      return (
        <div className="modal-video-wrapper">
          <video controls className="modal-video">
            <source src={modalData.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      const imageIndex = modalData.video ? slideIndex - 1 : slideIndex;
      return (
        <img
          src={modalData.images[imageIndex]}
          alt={`Project Slide ${imageIndex + 1}`}
          className="modal-image"
        />
      );
    }
  };

  const renderThumbnails = () => {
    if (!modalData) return null;
    const thumbs = [];

    if (modalData.video) {
      thumbs.push(
        <div
          key="video"
          className={`thumbnail-item ${slideIndex === 0 ? 'active' : ''}`}
          onClick={() => setSlideIndex(0)}
        >
          <video className="thumbnail-video" src={modalData.video} muted />
        </div>
      );
    }

    modalData.images.forEach((img, i) => {
      const trueIndex = modalData.video ? i + 1 : i;
      thumbs.push(
        <div
          key={i}
          className={`thumbnail-item ${slideIndex === trueIndex ? 'active' : ''}`}
          onClick={() => setSlideIndex(trueIndex)}
        >
          <img src={img} alt={`thumb-${i}`} />
        </div>
      );
    });

    return <div className="thumbnail-gallery">{thumbs}</div>;
  };

  return (
    <div className="portfolio-grid-section">
      <h2>Our Work</h2>

      <div className="filter-buttons">
        {categories.map(cat => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="portfolio-item" onClick={() => openModal(item)}>
            <img src={item.images[0]} alt={item.title} />
            <div className="item-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content fade-in-scale" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-main-with-thumbs">
              {renderSlide()}
              {renderThumbnails()}
            </div>

            <h3>{modalData.title}</h3>
            <p>{modalData.description}</p>

            {(modalData.images.length > 1 || modalData.video) && (
              <div className="modal-controls">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
