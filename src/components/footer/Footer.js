import React from 'react';
import './Footer.css';

export const Footer = () => (
  <footer className="footer">
    <div className="footer-info">
      <h1>David López Charte</h1>
      <p>Madrid, Spain.</p>
    </div>
    <div className="footer-contact">
      <h3>Contáctame</h3>
      <p>Y trabajemos juntos.</p>
      <br />
      <a href="mailto: abc@example.com">davidlopezcharte@gmail.com</a>
    </div>
    <div className="footer-sns">
      <div className="sns-links">
        <a href="https://linkedin.com/in/david-lopez-charte" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
        <a href="https://github.com/davidlopezcharte" target="_blank" rel="noreferrer">
          <i className="fab fa-github github"></i>
        </a>
      </div>
    </div>
  </footer>
);
