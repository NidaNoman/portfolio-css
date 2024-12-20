import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/skills" className="footer-link">Skills</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Nida Noman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
