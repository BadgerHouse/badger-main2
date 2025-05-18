// src/pages/3DBillboardPage.jsx
import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/PortfolioPage.css";

const ThreeDBillboardPage = () => {
  const { portfolioItems, openModal } = usePortfolio();
  const filteredItems = portfolioItems.filter(item => item.type === "3d");

  return (
    <div className="portfolio-grid-section">
      <h2>3D Billboard Projeleri</h2>
      <div className="portfolio-grid">
        {filteredItems.map(item => {
          const media = item.media?.[0]; // Her 3d item tek video içerir
          if (!media) return null;

          return (
            <div key={item.id} className="portfolio-item" onClick={() => openModal(item)}>
              {media.type === 'video' ? (
                <video
  className="video-thumb no-click"
  src={media.url}
  muted
  playsInline
  preload="none"
  poster={media.url.replace('.mp4', '.jpg')}
/>

              ) : null}
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeDBillboardPage;
