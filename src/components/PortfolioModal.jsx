// src/components/PortfolioModal.jsx
import React from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import { useLanguage } from "../contexts/LanguageContext";
import "../pages/PortfolioPage.css";

const texts = {
  tr: {
    prev: "Geri",
    next: "İleri"
  },
  en: {
    prev: "Previous",
    next: "Next"
  }
};

const PortfolioModal = () => {
  const { modalData, slideIndex, setSlideIndex, closeModal } = usePortfolio();
  const { language = 'tr' } = useLanguage();

  if (!modalData || !modalData.media?.length) return null;

  const nextSlide = () => {
    const total = modalData.media.length;
    setSlideIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    const total = modalData.media.length;
    setSlideIndex((prev) => (prev - 1 + total) % total);
  };

  const renderSlide = () => {
    const current = modalData.media[slideIndex];
    if (!current) return null;

    if (current.type === "video") {
      return (
        <div className="modal-video-wrapper">
          <video key={slideIndex} controls className="modal-video">
            <source src={current.url} type="video/mp4" />
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

  const renderThumbnails = () => (
    <div className="thumbnail-gallery">
      {modalData.media.map((item, i) => (
        <div
          key={i}
          className={`thumbnail-item ${slideIndex === i ? "active" : ""}`}
          onClick={() => setSlideIndex(i)}
        >
          {item.type === "video" ? (
            <video className="thumbnail-video" src={item.url} muted />
          ) : (
            <img src={item.url} alt={`thumb-${i}`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content fade-in-scale" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>
          ×
        </button>
        <div className="modal-main-with-thumbs">
          {renderSlide()}
          {renderThumbnails()}
        </div>
        <h3>{modalData.title}</h3>
        <p>{modalData.description}</p>
        {modalData.media.length > 1 && (
          <div className="modal-controls">
            <button onClick={prevSlide}>{texts[language].prev}</button>
            <button onClick={nextSlide}>{texts[language].next}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;
