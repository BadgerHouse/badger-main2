import React from "react";
import { usePortfolio } from "../contexts/PortfolioContext";
import "./PortfolioPage.css";

const ThreeDBillboardPage = () => {
  const { portfolioItems, openModal } = usePortfolio();
  const items3D = portfolioItems.filter((item) => item.type === "3d");

  const isVideoThumbnail = (thumbnailUrl) => {
    return thumbnailUrl && thumbnailUrl.endsWith(".webm");
  };

  return (
    <section className="portfolio-grid-section">
      <h2>3D Billboard</h2>
      <div className={`portfolio-grid ${items3D.length === 1 ? "single-item" : ""}`}>
        {items3D.map((item) => (
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

export default ThreeDBillboardPage;
