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
          <h2>{language === 'tr' ? "Hakkımızda" : "About Us"}</h2>
          <p>
            {language === 'tr'
              ? "Biz, dijital dünyada yenilikçi çözümler sunan bir ekibiz. Müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi hizmeti sunmak için buradayız. Deneyimli ekibimizle, projelerinizi hayata geçiriyoruz."
              : "We are a team that offers innovative solutions in the digital world. We are here to understand our clients' needs and provide them with the best service. With our experienced team, we bring your projects to life."}
          </p>
        </div>
      </section>

      <section className="slogan">
        <div className="slogan-content">
          <h2>{language === 'tr' ? "Badger Dünyasına hoş geldiniz" : "Welcome to the World of Badger"}</h2>
          <p>{language === 'tr' ? "Sizi yeriz" : "We'll eat you alive (in a creative way)"}</p>
        </div>
      </section>
    </>
  );
};

export default About;
