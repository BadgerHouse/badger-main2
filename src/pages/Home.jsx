import React, { useState, useEffect } from 'react';
import './Home.css';
import InfiniteBands from '../components/homePageComponents/InfiniteBands';
import Services from '../components/homePageComponents/Services';
import { useLanguage } from '../contexts/LanguageContext';
import Hero from '../components/homePageComponents/Hero';
import About from '../components/homePageComponents/About';
import Partners from '../components/homePageComponents/Partners';

const Home = () => {
  const { language } = useLanguage();

  const [textIndex, setTextIndex] = useState(0);

  const texts = {
    tr: ["Yazılım.", "Görsel.", "Reklam.", "Sosyal."],
    en: ["Software.", "Visuals.", "Advertising.", "Social."]
  };

  const handleAnimationIteration = () => {
    setTextIndex(prevIndex => (prevIndex + 1) % texts[language].length);
  };

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
      <Hero 
        language={language}
        textIndex={textIndex}
        texts={texts}
        handleAnimationIteration={handleAnimationIteration}
      />
      </section>
      {/* Services Section */}
      <section className="features">
        <Services />
      </section>

      {/* Infinite Bands Section */}
      <section className="infinite-bands-wrapper">
        <InfiniteBands />
      </section>

      {/* Hakkımızda Bölümü */}
      <section className="about">
        <About />
      </section>

      {/* Partners Section */}
      <section className="minimal-card-section">
        <Partners />
      </section>
    </div>
  );
};

export default Home;
