// Hero.jsx
import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ language }) => {
  const texts = {
    tr: ["Dijital", "Tasarım", "CGI", "Yazılım", "Strateji", "3D İçerik", "Pazarlama", "AR/VR", "Kreatif"],
    en: ["Digital", "Design", "CGI", "Software", "Strategy", "3D Content", "Marketing", "AR/VR", "Creative"]
  };

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
  const currentText = texts[language][textIndex];
  let timeout;

  if (!isDeleting && charIndex < currentText.length) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 100);
  } 
  else if (isDeleting && charIndex > 0) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    }, 40);
  } 
  else if (!isDeleting && charIndex === currentText.length) {
    timeout = setTimeout(() => setIsDeleting(true), 300); // Yazdı -> bekle -> sil
  } 
  else if (isDeleting && charIndex === 0) {
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % texts[language].length);
  }

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, textIndex, language]);


  return (
    <section className="hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="images/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="animated-text-wrapper">
            <span className="animated-text">
              {displayText}
              <span className="cursor"></span>
            </span>
          </span>
        </h1>
        <p className="hero-subtitle">
          {language === 'tr'
            ? "Creative Tech Studio & Digital Partner"
            : "Creative Tech Studio & Digital Partner"}
        </p>
      </div>
    </section>
  );
};

export default Hero;
