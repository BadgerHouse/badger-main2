import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const [animating, setAnimating] = useState(false);

  const current = language === 'tr' ? 'tr' : 'us';
  const next = language === 'tr' ? 'us' : 'tr';

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => {
      toggleLanguage();
      setAnimating(false);
    }, 300); // animasyon süresi kadar
  };

  return (
    <div className="lang-container" onClick={handleClick}>
      {/* Alttaki bayrak (sabit) */}
      <img
        src={`/flags/${next}.png`}
        className={`lang-flag flag-under ${animating ? 'fade-in' : ''}`}
        alt="alt flag"
      />

      {/* Üstteki bayrak (animasyonlu çıkış) */}
      <img
        src={`/flags/${current}.png`}
        className={`lang-flag flag-over ${animating ? 'slide-out' : ''}`}
        alt="üst flag"
      />
    </div>
  );
};

export default LanguageSwitcher;
