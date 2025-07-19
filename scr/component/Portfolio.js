import React from 'react';
import './Portfolio.css';
import { useNavigate } from 'react-router-dom';
import proj1 from '../assets/proje1.png'; // Replace with real thumbnails
import proj2 from '../assets/proje2.png';
import proj3 from '../assets/proje3.png';

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title">My <span>Portfolio</span></h2>
      <p className="section-subtitle">Here's a showcase of my best work and projects I've contributed to.</p>

      <div className="portfolio-grid">
        <div className="portfolio-card">
          <img src={proj1} alt="Short and long Videos" />
          <h3>500+ Short and long videos</h3>
          <p>Edited versatile videos for brands, influencers, companies, and my own social media, blending creativity with strategy.</p>
          <div className="tags">
            <span className="tag purple">DaVinci Resolve</span>
            <span className="tag pink">CapCut</span>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={proj2} alt="Youtube Content" />
          <h3>1000+ Subscribers YouTube</h3>
          <p>I create engaging films and vlogs that build a strong connection between me and my audience.</p>
          <div className="tags">
            <span className="tag yellow">YouTube</span>
            <span className="tag orange">YT Studio</span>
          </div>
        </div>

        <div className="portfolio-card">
          <img src={proj3} alt="Naqaab" />
          <h3>Short Film </h3>
          <p>Having strong experience in zero-budget short films, believing that a powerful story matters more than the budget.</p>
          <div className="tags">
            <span className="tag red"> Director</span>
            <span className="tag pink">Editor</span>
          </div>
        </div>
      </div>

      <div className="view-btn-wrapper"> <button className="btn view-projects" onClick={() => navigate('/work')}>
            <i></i> 🔍 View All Projects
          </button>
        
      </div>
    </section>
  );
};

export default Portfolio;
