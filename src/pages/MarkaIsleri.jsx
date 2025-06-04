import React from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import "./PortfolioPage.css";

const MarkaIsleriPage = () => {
  const { portfolioItems, openModal } = usePortfolio();
  const markaItems = portfolioItems.filter((item) => item.type === "other");

  const isVideoThumbnail = (thumbnailUrl) => {
    return thumbnailUrl && thumbnailUrl.endsWith(".webm");
  };

  return (
    <section className="portfolio-grid-section">
      <h2>Markalar</h2>
      <div className={`portfolio-grid ${markaItems.length === 1 ? "single-item" : ""}`}>
        {markaItems.map((item) => (
          <div key={item.id} className="portfolio-item" onClick={() => openModal(item)}>
            {item.thumbnail ? (
              isVideoThumbnail(item.thumbnail) ? (
                <video
                  src={item.thumbnail}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="portfolio-thumb-video"
                />
              ) : (
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="portfolio-thumb-image"
                />
              )
            ) : (
              <div className="no-thumbnail">No Thumbnail</div>
            )}
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarkaIsleriPage;
