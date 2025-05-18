import React, { useState, useEffect } from 'react';
import './PortfolioPage.css';
import portfolioItems from '../data/portfolioItems';


// 1. Medya dosyalarını thumbnail hariç çek
const allMedia = import.meta.glob('../assets/projects/*/*.{jpg,jpeg,png,mp4}', { eager: true });

// 2. Thumbnail'i çek (her klasörde sabit dosya: thumbnail.jpeg)
const getThumbnail = (folderName) => {
  try {
    return new URL(`../assets/projects/${folderName}/thumbnail.jpeg`, import.meta.url).href;
  } catch {
    return null;
  }
};

// 3. Thumbnail harici medya dosyalarını çek
const getMediaByFolder = (folderName) => {
  const mediaList = Object.keys(allMedia)
    .filter(
      path =>
        path.includes(`/projects/${folderName}/`) &&
        !path.toLowerCase().endsWith('thumbnail.jpeg')
    )
    .map(path => {
      const url = allMedia[path].default;
      const type = url.endsWith('.mp4') ? 'video' : 'image';
      return { url, type };
    });

  mediaList.sort((a, b) => a.type === 'video' ? -1 : 1);
  return mediaList;
};


const PortfolioPage = () => {
  const [modalData, setModalData] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const grid = document.querySelector('.portfolio-grid');
    if (grid) {
      if (portfolioItems.length === 1) {
        grid.classList.add('single-item');
      } else {
        grid.classList.remove('single-item');
      }
    }
  }, []);

  const openModal = (item) => {
    const media = getMediaByFolder(item.folder);
    if (!media || media.length === 0) return;
    setModalData({ ...item, media });
    setSlideIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    setSlideIndex(prev => {
      const total = modalData?.media?.length || 0;
      return (prev + 1) % total;
    });
  };
  
  const prevSlide = () => {
    setSlideIndex(prev => {
      const total = modalData?.media?.length || 0;
      return (prev - 1 + total) % total;
    });
  };
  

  const renderSlide = () => {
    if (!modalData || !modalData.media?.length) return null;
  
    const current = modalData.media[slideIndex];
    if (!current) return null;
  
    if (current.type === 'video') {
      return (
        <div className="modal-video-wrapper">
          <video key={slideIndex} controls className="modal-video">
            <source src={current.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  
    return (
      <img
        key={slideIndex}
        src={current.url}
        alt={`slide-${slideIndex}`}
        className="modal-image"
      />
    );
  };
  

  const renderThumbnails = () => {
    if (!modalData || !modalData.media?.length) return null;
    return (
      <div className="thumbnail-gallery">
        {modalData.media.map((item, i) => (
          <div
            key={i}
            className={`thumbnail-item ${slideIndex === i ? 'active' : ''}`}
            onClick={() => setSlideIndex(i)}
          >
            {item.type === 'video' ? (
              <video className="thumbnail-video" src={item.url} muted />
            ) : (
              <img src={item.url} alt={`thumb-${i}`} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="portfolio-grid-section">
      <h2>Our Work</h2>
      <div className="portfolio-grid">
        {portfolioItems.map(item => {
          const thumbnail = getThumbnail(item.folder);
          if (!thumbnail) return null;

          return (
            <div key={item.id} className="portfolio-item" onClick={() => openModal(item)}>
              <img src={thumbnail} alt={item.title} className="item-thumbnail" />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
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
            {modalData?.media?.length > 1 && (
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
