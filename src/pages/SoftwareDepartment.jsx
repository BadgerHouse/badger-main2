import React, { useEffect } from 'react';
import './DepartmantPages.css';
import { useLanguage } from '../contexts/LanguageContext';

const texts = {
  tr: {
    title: "Badger Yazılım Geliştirme",
    services: [
      "Kurumsal & E-ticaret siteleri",
      "Gamification Uygulamaları",
      "Mobil uygulama geliştirme",
      "UI/UX tasarımı"
    ],
    description: `Badger Software Development ekibi olarak, kurumların dijitalleşme süreçlerinde ihtiyaç duyduğu modern ve ölçeklenebilir çözümleri geliştiriyoruz. Web tabanlı sistemlerden mobil uygulamalara, oyunlaştırma içeren projelerden performans odaklı yazılım mimarilerine kadar geniş bir alanı kapsıyoruz.\n\nHer projede kullanıcı deneyimi, güvenlik ve sürdürülebilirlik ön planda tutulur. Projelerinizi uçtan uca ele alır, hem teknik hem tasarım anlamında maksimum verimi hedefleriz.`
  },
  en: {
    title: "Badger Software Development",
    services: [
      "Corporate & E-commerce websites",
      "Gamification Applications",
      "Mobile App Development",
      "UI/UX Design"
    ],
    description: `As the Badger Software Development team, we develop modern and scalable solutions needed in the digital transformation processes of organizations. From web-based systems to mobile applications, from gamified projects to performance-oriented software architectures, we cover a wide range.\n\nIn every project, user experience, security, and sustainability are prioritized. We manage your projects end-to-end with maximum efficiency in both technical and design aspects.`
  }
};

export default function SoftwareDepartment() {
  const { language = 'tr' } = useLanguage();

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', '#533292');
    document.documentElement.style.setProperty('--secondary-color', '#ff7700');
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="page-top">
          <div className="page-title-block">
            <h1>{texts[language].title}</h1>

            <div className="page-services-block" style={{ marginTop: '10px' }}>
              <ul className="page-list">
                {texts[language].services.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="page-description-block">
            <p>{texts[language].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
