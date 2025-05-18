import React from 'react';
import './Services.css';
import { useLanguage } from '../../contexts/LanguageContext';

const texts = {
  tr: {
    title: "İhtiyacın Olan Her Şey Bu Evde",
    secure: "Dijital Pazarlama",
    fast: "3D Dijital İçerik",
    friendly: "Yazılım Geliştirme",
    desc1: "",
    desc2: "",
    desc3: "",
    back1: "Dijital Pazarlama",
    back2: "3D Dijital İçerik",
    back3: "Yazılım Geliştirme",
    list1: ["Sosyal medya yönetimi", "Meta ve Google reklamları", "Bölgesel & Global hedefleme", "Marka kimliği tasarımı"],
    list2: ["Etkileşimli enstalasyonlar & Projection mapping", "CGI/3D Billboard içerikleri", "AR/VR Projeleri", "Etkinlik görselleri & LED ekran içerikleri"],
    list3: ["Kurumsal & E-ticaret siteleri", "Gamification Uygulamaları", "UI/UX Tasarımı", "Mobil uygulama geliştirme"]
  },
  en: {
    title: "Everything You Need Is in This House",
    secure: "Digital Marketing",
    fast: "3D Digital Content",
    friendly: "Software Development",
    desc1: "",
    desc2: "",
    desc3: "",
    back1: "Digital Marketing",
    back2: "3D Digital Content",
    back3: "Software Development",
    list1: ["Social Media Management", "Meta and Google Ads", "DDRegional & Global Targeting", "Brand Identity Design"],
    list2: ["Interactive Installations & Projection Mapping", "CGI/3D Billboard Content", "AR/VR Projects", "SpeEvent Visuals & LED Screen Contented"],
    list3: ["Corporate & E-commerce websites", "Gamification Applications", "UI/UX Design", "Mobile App Development"]
  }
};

const Services = () => {
  const { language = 'tr' } = useLanguage();

  return (
    <section className="features">
      <h2>{texts[language].title}</h2>
      <div className="features-grid">
        {[0, 1, 2].map((index) => (
          <div className="feature-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <div className="feature-icon">
                  <img
                    src={
                      index === 0
                        ? "/icons/shield.svg"
                        : index === 1
                        ? "/icons/speed.svg"
                        : "/icons/user-friendly.svg"
                    }
                    alt={
                      index === 0
                        ? texts[language].secure
                        : index === 1
                        ? texts[language].fast
                        : texts[language].friendly
                    }
                  />
                </div>
                <h3>
                  {index === 0
                    ? texts[language].secure
                    : index === 1
                    ? texts[language].fast
                    : texts[language].friendly}
                </h3>
                <p>
                  {index === 0
                    ? texts[language].desc1
                    : index === 1
                    ? texts[language].desc2
                    : texts[language].desc3}
                </p>
              </div>
              <div className="card-back">
                <h3>
                  {index === 0
                    ? texts[language].back1
                    : index === 1
                    ? texts[language].back2
                    : texts[language].back3}
                </h3>
                <ul>
                  {texts[language][`list${index + 1}`].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
