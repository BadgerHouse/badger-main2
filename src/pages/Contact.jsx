// Contact.jsx
import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formRef.current["name"].value;
    const email = formRef.current["email"].value;
    const message = formRef.current["message"].value;

    const telegramMessage = `
📩 Yeni Form Mesajı

👤 İsim: ${name}
📧 E-mail: ${email}
📝 Mesaj: ${message}
`;

    fetch(`https://api.telegram.org/bot7891413381:AAFdFq1Vxnu9jELL0-hPXZc_yUhUV7dKChI/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "-4681784118",
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Mesaj başarıyla gönderildi!");
          formRef.current.reset();
        } else {
          alert("Mesaj gönderilemedi.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Mesaj gönderilirken hata oluştu.");
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-content">
      <div className="contact-left">
      <h1>Badger House</h1>
      <h3>Creative Digital Solutions Agency</h3>
      <p><b>Adres:</b> Merkez Mah. Seçkin sk. Z Ofis no:2-4A, iç kapı no: 108, Kağıthane/İstanbul, Türkiye</p>
      <p><b>E-Mail:</b> hello@badgerhouse.co</p>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6265209860044!2d28.96930177604401!3d41.07715597134103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7b725e56a55%3A0xff0ec0f30d714af4!2sBadger%20House!5e0!3m2!1str!2str!4v1745855739467!5m2!1str!2str"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Badger House Map"
      ></iframe>
    </div>
  </div>

        <div className="contact-form-container">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label>Name</label>
            <input type="text" name="name" placeholder="İsim" required />

            <label>E-Mail</label>
            <input type="email" name="email" placeholder="Email" required />

            <label>Message</label>
            <textarea name="message" placeholder="Bize mesajınız" rows={5} required></textarea>

            <button type="submit">Contact Us</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
