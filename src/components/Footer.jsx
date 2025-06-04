import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const texts = {
  tr: {
    description: "Badger House, lokal ve global projelerde müşterilerine eşlik ederek markaların potansiyellerine ulaşma yolunda destek olmak adına 2024 yılında İstanbul’da kurulmuş bir reklam teknolojileri ajansıdır.",
    services: "Departmanlar",
    portfolio: "Portfolio",
    dep1: "Software",
    dep2: "Visual",
    dep3: "Marketing",
    link1: "3D Billboard",
    link2: "Markalar"
  },
  en: {
    description: "Badger House is an advertising technology agency founded in Istanbul in 2024, dedicated to supporting brands in reaching their full potential by accompanying its clients in both local and global projects.",
    services: "Departments",
    portfolio: "Portfolio",
    dep1: "Software",
    dep2: "Visual",
    dep3: "Marketing",
    link1: "3D Billboard",
    link2: "Brands"
  }
};

const Footer = () => {
  const { language = 'tr' } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
  <div className="footer-column description-col">
    <p className="footer-description">{texts[language].description}</p>
  </div>

  <div className="footer-column">
    <h3>{texts[language].services}</h3>
    <ul>
      <li><a href="/departments/software">{texts[language].dep1}</a></li>
      <li><a href="/departments/visual">{texts[language].dep2}</a></li>
      <li><a href="/departments/marketing">{texts[language].dep3}</a></li>
    </ul>
  </div>

  <div className="footer-column">
    <h3>{texts[language].portfolio}</h3>
    <ul>
      <li><a href="/portfolio/3d">{texts[language].link1}</a></li>
      <li><a href="/portfolio/branding">{texts[language].link2}</a></li>
    </ul>
  </div>
</div>

      {/* Sosyal İkonlar */}
      <div className="footer-social">
        <a href="https://www.instagram.com/thebadger.house/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com/company/badger-house" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
