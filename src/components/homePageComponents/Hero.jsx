// Hero.jsx
import React from 'react';
import './Hero.css'; // Stil dosyasını eklemeniz durumunda
import "../../App.css";

const Hero = ({ language, texts, textIndex, handleAnimationIteration }) => {
  return (
    <section className="hero">
      <div className="video-background">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="hero-video"
        >
          <source src="images/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-title-container">
          <h1 className="hero-heading responsive-heading">
            {language === 'tr'
              ? "Badger'a Hoş Geldiniz "
              : "Welcome to Badger "}
            <span
              className="animated-text"
              onAnimationIteration={handleAnimationIteration}
            >
              {texts[language][textIndex]}
            </span>
          </h1>
        </div>
        <p className="hero-subtitle responsive-subtitle">
          {language === 'tr'
            ? "Creative Tech Studio & Digital Partner"
            : "Creative Tech Studio & Digital Partner"}
        </p>
      </div>
    </section>
  );
};

export default Hero;
