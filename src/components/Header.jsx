import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import LanguageSwitcher from './LanguageSwitcher';
import useIsMobile from '../hooks/useIsMobile';
import { useLanguage } from '../contexts/LanguageContext';

const texts = {
  tr: {
    home: "Anasayfa",
    services: "Hizmetler",
    digitalMarketing: "Dijital Pazarlama",
    softwareDev: "Yazılım Geliştirme",
    visualProd: "Görsel Prodüksiyon",
    portfolio: "Portfolyo",
    threeD: "3D Billboard",
    branding: "Markalar",
    contact: "İletişim"
  },
  en: {
    home: "Home",
    services: "Services",
    digitalMarketing: "Digital Marketing",
    softwareDev: "Software Development",
    visualProd: "Visual Production",
    portfolio: "Portfolio",
    threeD: "3D Billboard",
    branding: "Brands",
    contact: "Contact Us!"
  }
};



const Header = () => {
  const { language = 'tr' } = useLanguage();
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHideHeader(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const [closing, setClosing] = useState(false); // eksikse bu da lazım

const handleNavigate = (path) => {
  setClosing(true);
  setTimeout(() => {
    setMenuOpen(false);
    setClosing(false);
    navigate(path);
  }, 300); // animasyon süresi kadar
};


  const renderAnimatedText = (text) => {
    const used = new Set();
    return text.split('').map((char, i) => {
      const key = `${char}-${used.has(char) ? i : 'first'}`;
      used.add(char);
      return <span key={key}>{char}</span>;
    });
  };

  return (
    <header className={`header ${hideHeader ? 'scroll-hide' : ''}`}>
      <div className="header-container">
        <div className="logo-wrapper" onClick={() => navigate('/')}>
  <div className="logo-glow"></div>
  <div className="logo">
    <img src={logo} alt="Logo" />
  </div>
</div>



        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className="nav-menu desktop-menu">
          <ul>
            <li><Link to="/">{texts[language]?.home || 'Home'}</Link></li>
            <li className="dropdown-container">
              <span className="dropdown-toggle">
                {renderAnimatedText(texts[language]?.services || 'Services')}
              </span>
              <ul className="dropdown-menu">
                <li><button onClick={() => navigate('/departments/marketing')}>{texts[language]?.digitalMarketing}</button></li>
                <li><button onClick={() => navigate('/departments/software')}>{texts[language]?.softwareDev}</button></li>
                <li><button onClick={() => navigate('/departments/visual')}>{texts[language]?.visualProd}</button></li>
              </ul>
            </li>
            <li className="dropdown-container">
              <span className="dropdown-toggle">
                {renderAnimatedText(texts[language]?.portfolio || 'Portfolio')}
              </span>
              <ul className="dropdown-menu" style={{ minHeight: 'unset' }}>
                <li><button onClick={() => navigate('/portfolio/3d-billboards')}>{texts[language]?.threeD}</button></li>
                <li><button onClick={() => navigate('/portfolio/marka-isleri')}>{texts[language]?.branding}</button></li>
              </ul>
            </li>
            <li><LanguageSwitcher /></li>
          </ul>
        </nav>

        {menuOpen && (
          <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><button onClick={() => handleNavigate('/')}>{texts[language]?.home}</button></li>
              <li><button onClick={() => handleNavigate('/departments/marketing')}>{texts[language]?.digitalMarketing}</button></li>
              <li><button onClick={() => handleNavigate('/departments/software')}>{texts[language]?.softwareDev}</button></li>
              <li><button onClick={() => handleNavigate('/departments/visual')}>{texts[language]?.visualProd}</button></li>
              <li><button onClick={() => handleNavigate('/portfolio/3d-billboards')}>{texts[language]?.threeD}</button></li>
              <li><button onClick={() => handleNavigate('/portfolio/marka-isleri')}>{texts[language]?.branding}</button></li>
              <li>
                <button className="get-offer-btn" onClick={() => handleNavigate('/contact')}>
                  {texts[language]?.contact || 'Contact'}
                </button>
              </li>
              <li className="lang-toggle">
  <LanguageSwitcher />
</li>
            </ul>
          </nav>
        )}

        <div className="desktop-cta">
          <button className="get-offer-btn scroll-sticky" onClick={() => navigate('/contact')}>
            {texts[language]?.contact}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
