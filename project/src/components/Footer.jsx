import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Big Astom Hotel</h3>
            <p className="footer-description">
              Experience luxury and comfort in the heart of Goaso. Your home away from home.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('rooms')}>Rooms & Suites</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</button></li>
              <li><button onClick={() => scrollToSection('rooms')}>Reservations</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Special Offers</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Restaurant</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Spa & Wellness</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Conference Rooms</button></li>
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Events</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul className="footer-contact">
              <li>📍  Near Old Barrier BR-1542-4202, Atta Mills Road, Goaso</li>
              <li>📞 +233 24 325 9182</li>
              <li>✉️ info@gbigastomhotel.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Big Astom Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
