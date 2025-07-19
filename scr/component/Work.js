import React from 'react';
import './Work.css';
import Footer from './footer';

const Work = () => {
  return (
    <section className='comman-section'>
    <section className="work-section" id="work">
      <h2 className="section-title">My <span>Work</span></h2>
      <p className="section-subtitle">Here’s a glimpse of projects I’ve contributed to.</p>

      <div className="work-cards">
        <div className="work-card">
          <img src="/assets/work1.jpg" alt="Work 1" />
          <h3>Client Project - Promo Video</h3>
          <p>Directed and edited a cinematic promo for a major client brand.</p>
        </div>

        <div className="work-card">
          <img src="/assets/work2.jpg" alt="Work 2" />
          <h3>Travel Vlog Series</h3>
          <p>Shot, edited, and voiced a travel documentary across 4 states.</p>
        </div>

        <div className="work-card">
          <img src="/assets/work3.jpg" alt="Work 3" />
          <h3>Short Film - Echo</h3>
          <p>Acted and edited for a dramatic short on youth issues.</p>
        </div>
      </div>
     <section className="featured-film-section">
  <h2 className="featured-title">Featured <span>Film</span></h2>
  <div className="film-container">
    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/n7_kW0pKsSM"
        title="Ek Tohfa 2 – Short Film"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="film-info">
      <h3>Ek Tohfa 2 – <span>Short Film</span></h3>
      <span className="badge">Director & Producer</span>
      <p>
       “Ek2 Tohfa” is a low-budget short film brought to life by a skilled and passionate team. With strong storytelling and creative execution, it’s proof that great cinema comes from great hands—not big budgets.
      </p>

      <div className="tags">
        <span>Cinematic</span>
        <span>Storytelling</span>
        <span>Directing</span>
      </div>

      <div className="tech-info">
        <p><strong>Edited in:</strong> DaVinci Resolve</p>
        <p><strong>Camera:</strong> iPhone 14 Pro</p>
        <p><strong>Graded with:</strong> DaVinci Resolve</p>
        <p><strong>Sound Design:</strong> Audition</p>
      </div>
    </div>
  </div>
</section>
    <section className="youtube-section">
  <h2 className="youtube-title">Youtube <span>Uploads</span></h2>

  <div className="youtube-videos">
    <div className="youtube-card">
      <iframe 
        src="https://www.youtube.com/embed/hM-J667sp6g" 
        title="Ek Tohfa - Short Film (Part-1)" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>Ek Tohfa - Short Film (Part-1)</h3>
      <p>A gripping short film where trust is tested and a shocking scam changes everything.</p>
    </div>

    <div className="youtube-card">
      <iframe 
        src="https://www.youtube.com/embed/5eRPbwUYTK0" 
        title="NAQAB (Mask hides the face)" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>NAQAB (Mask hides the face)</h3>
      <p>Naqab, a short film where a masked revenge settles an old insult.</p>
    </div>

    <div className="youtube-card">
      <iframe 
        src="https://www.youtube.com/embed/C6CKt32Ib5s" 
        title="Rajasthan" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>Rajasthan</h3>
      <p>A cinematic journey through Rajasthan, captured entirely on a single mobile phone.</p>
    </div>
  </div>

  <div className="youtube-button-wrapper">
    <a href="https://www.youtube.com/@sundaram_tarone" className="youtube-button" target="_blank" rel="noreferrer">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184C18.255 3 12 3 12 3s-6.255 0-7.615.184C3.14 3.383 2.383 4.14 2.184 5.385 2 6.745 2 9 2 9s0 2.255.184 3.615c.199 1.245.956 2.002 2.201 2.201C5.745 15 12 15 12 15s6.255 0 7.615-.184c1.245-.199 2.002-.956 2.201-2.201C22 11.255 22 9 22 9s0-2.255-.184-3.615c-.199-1.245-.956-2.002-2.201-2.201ZM10 12V6l5 3-5 3Z"></path></svg>
      View More on YouTube
    </a>
  </div>
</section>


      <div className="work-cta">
        <Footer />
      </div>
      
    </section>
    </section>
  );
};

export default Work;
