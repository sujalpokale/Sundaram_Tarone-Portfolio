import React from 'react';
import './About.css';
import aboutImg from '../assets/about1.jpg'; // Replace with your own image

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <div className="about-container">
        <img src={aboutImg} alt="Sundaram Tarone" className="about-img" />
        <div className="about-content">
          <h3>Who I Am</h3>
          <p>
           A Passionate Filmmaker driven by the art of Storytelling and the magic of visual expression. With 3 years+ of hands-on experience. I had worked with numerous clients as a Freelancer. Honing My craft and building a diverse portfolio.
          </p>
          <h4>Education</h4>
          <p>🎓 G. H. Raisoni College of Engineering and Management, Nagpur. BTech Data Science(2022-2026)</p>

          <h4>Certifications</h4>
          <p>📘 Da Vinci Resolve 2024</p>

          <h4>Experience</h4>
          <p>💼 Video Editor & Filmmaker
With 3+ years on YouTube, I’ve created and edited short films, vlogs, Meta ads, promotional reels, review videos, and podcasts, combining creative storytelling with sharp post-production skills to deliver impactful content.</p>

          <a href="#contact" className="btn get-touch">📬 Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default About;
