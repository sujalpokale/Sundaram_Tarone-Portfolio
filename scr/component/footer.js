import React from 'react';
import './Footer.css';
import { FaInstagram, FaYoutube, FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-logo">
            <span className="gradient-text">Sundaram</span> Tarone
          </h3>
          <p>Video Editor & Content Creator</p>
        </div>

        <div className="footer-right">
          <a href="https://www.instagram.com/iamthelocalfilmmaker/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@sundaram_tarone" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
          <a href="mailto:workwithsundaram@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025–26 Sujal Pokale. All rights reserved.</p>
        <p>Website By @sujalpokale <FaGithub /> <FaPhone /></p>
        <a href="#home" className="back-to-home">↑ Back to Home</a>
      </div>
    </footer>
  );
};

export default Footer;
