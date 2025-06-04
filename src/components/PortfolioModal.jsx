import React, { useEffect } from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import { useLanguage } from "../contexts/LanguageContext";
import "./PortfolioModal.css";

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
  const {
    modalData,
    slideIndex,
    setSlideIndex,
    closeModal
  } = usePortfolio();

  const { language = "tr" } = useLanguage();

  if (!modalData || !modalData.media?.length) return null;

  const currentMedia = modalData.media[slideIndex];

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % modalData.media.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + modalData.media.length) % modalData.media.length);
  };

  const renderSlide = () => {
    if (!currentMedia) return null;

    if (currentMedia.type === "video") {
      return (
        <video
          key={currentMedia.url}
          controls
          className="modal-media"
          preload="metadata"
        >
          <source src={currentMedia.url} type="video/webm" />
        </video>
      );
    }

    return (
      <img
        key={currentMedia.url}
        src={currentMedia.url}
        alt={`slide-${slideIndex}`}
        className="modal-media"
      />
    );
  };

  const renderThumbnails = () => (
    <div className="modal-thumbnails-vertical">
      {modalData.media.map((item, i) => (
        <div
          key={i}
          className={`thumb ${slideIndex === i ? "active" : ""}`}
          onClick={() => setSlideIndex(i)}
        >
          {item.type === "video" ? (
            <video src={item.url} muted />
          ) : (
            <img src={item.url} alt={`thumb-${i}`} />
          )}
        </div>
      ))}
    </div>
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalData) return;
      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData]);

  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>

        <div className="modal-main-horizontal">
          <div className="modal-media-area">
            {renderSlide()}
            <div className="media-with-thumbnails">
              {renderThumbnails()}
            </div>
          </div>
        </div>

        <div className="modal-info">
          <h3>{modalData.title}</h3>
          <p>{modalData.description}</p>
        </div>

        <div className="modal-nav">
          <button onClick={prevSlide}>{texts[language].prev}</button>
          <button onClick={nextSlide}>{texts[language].next}</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
