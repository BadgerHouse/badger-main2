import React from "react";
import "./InfiniteBands.css";
import { usePortfolio } from "../../contexts/PortfolioContext";
import { useLanguage } from "../../contexts/LanguageContext";

const texts = {
  tr: {
    band3d: "3D Billboards",
    bandOther: "Markalar"
  },
  en: {
    band3d: "3D Billboard",
    bandOther: "Brands"
  }
};

const InfinityBands = () => {
  const { portfolioItems, openModal } = usePortfolio();
  const { language = "tr" } = useLanguage();

  const items3D = portfolioItems.filter((item) => item.type === "3d");
  const itemsOther = portfolioItems.filter((item) => item.type === "other");

  // Thumbnail'ın video mu görsel mi olduğunu kontrol et (.webm mi diye bakıyoruz)
  const isVideoThumbnail = (thumbnailUrl) => {
    return thumbnailUrl && thumbnailUrl.endsWith(".webm");
  };

  const renderBand = (title, items, direction = "left") => (
    <div className="band-wrapper">
      <h3 className="band-title">{title}</h3>
      <div className={`band scroll-${direction}`}>
        {[...items, ...items].map((item, index) => (
          <div
            className="band-item"
            key={`${item.id}-${index}`}
            onClick={() => openModal(item)}
            style={{ cursor: "pointer" }}
          >
            {item.thumbnail ? (
              isVideoThumbnail(item.thumbnail) ? (
                <video
                  src={item.thumbnail}
                  alt={item.title}
                  className="band-thumb"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={(e) => {
                    console.log("Video yüklenemedi:", item.thumbnail);
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="band-thumb"
                  onError={(e) => {
                    console.log("Görsel yüklenemedi:", item.thumbnail);
                    e.target.style.display = "none";
                  }}
                />
              )
            ) : (
              <div className="band-placeholder">No Preview</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bands-container">
      <div className="bands-background">
        <img src="/images/badger-portf-2.svg" alt="Background" />
      </div>
      {renderBand(texts[language].band3d, items3D, "left")}
      {renderBand(texts[language].bandOther, itemsOther, "right")}
    </div>
  );
};

export default InfinityBands;
