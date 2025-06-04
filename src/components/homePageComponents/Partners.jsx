// src/components/homePageComponents/Partners.jsx
import React from 'react';
import './Partners.css';

const Partners = () => {
  return (
    <section className="minimal-card-section">
      <div className="minimal-card">
        {/* Sol: Glow + Logo */}
        <div className="card-left">
          <div className="logo-container">
            <div className="orange-glow"></div>
            <img
              src="/logos/logo2.png"
              alt="Badger House Logo"
              className="card-logo"
            />
          </div>
        </div>

        {/* Sağ: Infinite Scroll */}
        <div className="card-right">
          <div className="infinite-scroll-container">
            <div className="scroll-content">
              <div className="brand-row">
                <img src="/logos/beyazdoorlife.png" alt="Brand" className="brand-logo" />
                <img src="/logos/haufen-yesil.png" alt="Brand" className="brand-logo" />
                <img src="/logos/lg.png" alt="Brand" className="brand-logo" />
                <img src="/logos/fullderm.png" alt="Brand" className="brand-logo" />
                <img src="/logos/tpc logo_1.png" alt="Brand" className="brand-logo" />
                <img src="/logos/wr.png" alt="Brand" className="brand-logo" />
              </div>
              <div className="brand-row">
                <img src="/logos/beyazdoorlife.png" alt="Brand" className="brand-logo" />
                <img src="/logos/haufen-yesil.png" alt="Brand" className="brand-logo" />
                <img src="/logos/lg.png" alt="Brand" className="brand-logo" />
                <img src="/logos/fullderm.png" alt="Brand" className="brand-logo" />
                <img src="/logos/tpc logo_1.png" alt="Brand" className="brand-logo" />
                <img src="/logos/wr.png" alt="Brand" className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
