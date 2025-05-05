import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sol Bölüm - Açıklama */}
        <div className="footer-left">
          <p className="footer-description">
            CoinFlip, the world's leading bitcoin ATM operator, makes it so flippin' easy to buy and sell bitcoin via cash, card or bank transfer.
          </p>
          <p className="footer-signup">
            Sign up to get the latest CoinFlip news, discounts and more.
          </p>
          <p className="footer-copyright">
            © 2023 GPT Holdings, LLC d/b/b/a ME
          </p>
        </div>

        {/* Orta Bölüm - Şirket Linkleri (sadece desktop) */}
        <div className="footer-center hide-on-mobile">
          <div className="footer-links-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#merch">Merch</a></li>
            </ul>
          </div>
        </div>

        {/* Sağ Bölüm - Gizlilik Politikaları (sadece desktop) */}
        <div className="footer-right hide-on-mobile">
          <div className="footer-links-column">
            <h3>Privacy Policy and Terms of Service</h3>
            <ul>
              <li><a href="#privacy">CoinFlip Privacy Policy</a></li>
              <li><a href="#biometrics">CoinFlip Biometrics Privacy Policy</a></li>
              <li><a href="#financial">CoinFlip Financial Privacy Notice</a></li>
              <li><a href="#terms">CoinFlip Terms of Service</a></li>
              <li><a href="#trade">CoinFlip Trade Desk Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sosyal Medya İkonları */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
