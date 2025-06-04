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
          <h2>
            {language === 'tr'
              ? "Üç Uzman Ekip. Tek Stüdyo"
              : "Three Expert Team - One Studio."}
          </h2>
        </div>
      </section>

     
    </>
  );
};

export default About;
