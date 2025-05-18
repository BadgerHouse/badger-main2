// src/components/homePageComponents/About.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './About.css'; // Varsayılan stiller için

const About = () => {
  const { language } = useLanguage();

  return (
    <>
      <section className="about">
        <div className="about-content">
          <p>
            {language === 'tr'
              ? "Üç Uzman Ekip. Tek Stüdyo"
              : "Three Expert Team - One Studio."}
          </p>
        </div>
      </section>

      <section className="slogan">
        <div className="slogan-content">
          <h2>{language === 'tr' ? "Yarına Hoş Geldin" : "Welcome to Tomorrow"}</h2>
        </div>
      </section>
    </>
  );
};

export default About;
