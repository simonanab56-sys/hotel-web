import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id='Contact' >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          We're here to help and answer any questions you might have
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p> RF9X+8M8, Goaso<br />Ahafo Region, Ghana</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+233 24 325 9182</p>
                <p>+233 24 325 9182</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@bigastomhotel.com</p>
                <p>bookings@bigastomhotel.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <h3>Reception Hours</h3>
                <p>24/7 - We're always here for you</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <div className="contact-map">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6640959663346!2d-2.5043786999999997!3d6.810650099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc4cb4cceafab47%3A0x462626ce54277946!2sBIG%20ASTOM%20HOTEL!5e0!3m2!1sen!2sgh!4v1775656986827!5m2!1sen!2sgh"
    width="100%" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
