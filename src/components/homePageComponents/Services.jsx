// Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="features">
      <h2>Hizmetlerimiz</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="feature-icon">
                <img src="/icons/shield.svg" alt="Güvenli" />
              </div>
              <h3>Güvenli</h3>
              <p>En son güvenlik teknolojileri ile verileriniz güvende</p>
            </div>
            <div className="card-back">
              <h3>Güvenlik Hizmetleri</h3>
              <ul>
                <li>Veri Şifreleme</li>
                <li>Güvenlik Duvarı</li>
                <li>DDoS Koruması</li>
                <li>SSL Sertifikası</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="feature-icon">
                <img src="/icons/speed.svg" alt="Hızlı" />
              </div>
              <h3>Hızlı</h3>
              <p>Yüksek performanslı altyapımız ile hızlı çözümler</p>
            </div>
            <div className="card-back">
              <h3>Performans Hizmetleri</h3>
              <ul>
                <li>CDN Desteği</li>
                <li>Önbellek Optimizasyonu</li>
                <li>Yük Dengeleme</li>
                <li>Hız Optimizasyonu</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="feature-card">
          <div className="card-inner">
            <div className="card-front">
              <div className="feature-icon">
                <img src="/icons/user-friendly.svg" alt="Kullanıcı Dostu" />
              </div>
              <h3>Kullanıcı Dostu</h3>
              <p>Kolay kullanılabilir arayüz ile maksimum verimlilik</p>
            </div>
            <div className="card-back">
              <h3>UX Hizmetleri</h3>
              <ul>
                <li>UI/UX Tasarım</li>
                <li>Mobil Uyumluluk</li>
                <li>Erişilebilirlik</li>
                <li>Kullanıcı Testleri</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
