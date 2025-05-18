// src/pages/MarkaIsleriPage.jsx
import React from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/PortfolioPage.css";

const MarkaIsleriPage = () => {
  const { portfolioItems, getThumbnail, openModal } = usePortfolio();
  const filteredItems = portfolioItems.filter(item => item.type === "other");

  return (
    <div className="portfolio-grid-section">
      <h2>Marka İşleri</h2>
      <div className="portfolio-grid">
        {filteredItems.map(item => {
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
    </div>
  );
};

export default MarkaIsleriPage;
