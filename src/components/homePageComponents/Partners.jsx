// src/components/homePageComponents/Partners.jsx
import React from 'react';
import './Partners.css'; // Stil dosyanızı import edebilirsiniz

const Partners = () => {
  return (
    <section className="minimal-card-section">
      <div className="minimal-card">
        <div className="card-left">
          <div className="logo-container">
            <div className="orange-glow"></div>
            <img src="/logos/logo2.png" alt="Badger House Logo" className="card-logo" />
          </div>
        </div>
        <div className="card-right">
          <div className="infinite-scroll-container">
            <div className="scroll-content">
              <div className="brand-row">
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
                <img src="/logos/safepal.png" alt="Brand" className="brand-logo" />
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
                <img src="/logos/safepal.png" alt="Brand" className="brand-logo" />
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
              </div>
              <div className="brand-row">
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
                <img src="/logos/safepal.png" alt="Brand" className="brand-logo" />
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
                <img src="/logos/safepal.png" alt="Brand" className="brand-logo" />
                <img src="/logos/exodus.png" alt="Brand" className="brand-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
