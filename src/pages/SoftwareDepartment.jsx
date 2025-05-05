import React, { useEffect } from 'react';
import './DepartmantPages.css';

export default function SoftwareDepartment() {
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', '#533292'); // dikkat: bu geçerli bir renk değil
    document.documentElement.style.setProperty('--secondary-color', '#ff7700');
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-content">

        {/* ÜST BLOK: Başlık + Açıklama */}
        <div className="page-top">

          {/* SOL: Başlık + Hizmet Kartı */}
          <div className="page-title-block">
            <h1>Badger Software Development</h1>

            <div className="page-services-block" style={{ marginTop: '10px' }}>
              <ul className="page-list">
                <li>Kurumsal & E-ticaret siteleri</li>
                <li>Gamification Uygulamaları</li>
                <li>Mobil uygulama geliştirme</li>
                <li>UI/UX tasarımı</li>
              </ul>
            </div>
          </div>

          {/* SAĞ: Açıklama */}
          <div className="page-description-block">
            <p>
              Badger Software Development ekibi olarak, kurumların dijitalleşme süreçlerinde ihtiyaç duyduğu modern ve ölçeklenebilir çözümleri geliştiriyoruz.
              Web tabanlı sistemlerden mobil uygulamalara, oyunlaştırma içeren projelerden performans odaklı yazılım mimarilerine kadar geniş bir alanı kapsıyoruz.

              {"\n\n"}Her projede kullanıcı deneyimi, güvenlik ve sürdürülebilirlik ön planda tutulur. Projelerinizi uçtan uca ele alır, hem teknik hem tasarım anlamında maksimum verimi hedefleriz.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
