// src/components/Home.js
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home" id="home">
      <div className="overlay">
        <h1>Hi, I'm <span>Sundaram Tarone</span></h1>
        <h2>Video Editor & Content Creator</h2>
        <p>
         A Passionate Filmmaker driven by the art of storytelling and the magic of visual expression. With 2 years+ of hands-on experience, I had worked with numerous clients as a freelancer, honing my craft and building a diverse portfolio.
        </p>
        <div className="btn-group">
           <button className="work-btn" onClick={() => navigate('/work')}>
            <i></i> 🎬 Watch Content
          </button>
          <a href="/resume.pdf" className="btn secondary">📄 View Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
