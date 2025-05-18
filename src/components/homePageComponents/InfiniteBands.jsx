import React from "react";
import "./InfiniteBands.css";
import { usePortfolio } from "../../contexts/PortfolioContext";
import { useLanguage } from "../../contexts/LanguageContext";

const texts = {
  tr: {
    header: "Projelerimiz",
    band3d: "3D Billboard İşleri",
    bandOther: "Marka İşleri"
  },
  en: {
    header: "Our Works",
    band3d: "3D Billboard Projects",
    bandOther: "Branding Works"
  }
};

const InfiniteBands = () => {
  const { portfolioItems, getThumbnail, openModal } = usePortfolio();
  const { language = 'tr' } = useLanguage();

  const items3D = portfolioItems.filter((item) => item.type === "3d");
  const itemsOther = portfolioItems.filter((item) => item.type === "other");

  const renderBand = (title, items, direction = "left") => (
    <div className="band-wrapper">
      <h3 className="band-title">{title}</h3>
      <div className={`band scroll-${direction}`}>
        {[...items, ...items].map((item, index) => {
          const media = item.media?.[0];
          const thumbnail = getThumbnail(item.folder);

          return (
            <div
              className="band-item"
              key={`${item.id}-${index}`}
              onClick={() => openModal(item)}
              style={{ cursor: "pointer" }}
            >
              {item.type === "3d" && media?.type === "video" ? (
                <video
                  className="video-thumb no-click"
                  src={media.url}
                  muted
                  playsInline
                  preload="none"
                  poster={media.url.replace('.mp4', '.jpg')}
                />
              ) : (
                thumbnail && <img src={thumbnail} alt={item.title} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="bands-container">
      <div className="bands-background">
        <img src="/images/badger-portf-2.svg" alt="Background" />
      </div>
      <h1>{texts[language].header}</h1>
      {renderBand(texts[language].band3d, items3D, "left")}
      {renderBand(texts[language].bandOther, itemsOther, "right")}
    </div>
  );
};

export default InfiniteBands;
