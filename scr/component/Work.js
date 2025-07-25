import React from 'react';
import './Work.css';
import video1 from '../assets/video/reels1.mp4';
import video2 from '../assets/video/reels2.mp4';
import video3 from '../assets/video/reels3.mp4';
import video4 from '../assets/video/reels4.mp4';
import video5 from '../assets/video/reels5.mp4';
import video6 from '../assets/video/reels6.mp4';
import VideoCard from './VideoCard';
import Footer from './footer';

const Work = () => {
  return (
    <section className='comman-section'>
    
    <section className="work-section" id="work">
      <h2 className="section-title">My <span>Work</span></h2>
      <p className="section-subtitle">A collection of my best video editing and content creation projects.</p>


      <div className="reels-container">
        <h2 className="youtube-title">Reels <span>Uploads</span></h2>
        <div className='reels-section'>
      <VideoCard
        src={video1}
      />
      <VideoCard
        src={video2}
      />
      <VideoCard
      src={video3}
      />
      <VideoCard
        src={video4}/>
      <VideoCard
        src={video5}/>
      <VideoCard
        src={video6}/>
        </div>
    </div>
    <div className="youtube-button-wrapper">
    <a href="https://www.instagram.com/iamthelocalfilmmaker/" className="youtube-button" target="_blank" rel="noreferrer">
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184C18.255 3 12 3 12 3s-6.255 0-7.615.184C3.14 3.383 2.383 4.14 2.184 5.385 2 6.745 2 9 2 9s0 2.255.184 3.615c.199 1.245.956 2.002 2.201 2.201C5.745 15 12 15 12 15s6.255 0 7.615-.184c1.245-.199 2.002-.956 2.201-2.201C22 11.255 22 9 22 9s0-2.255-.184-3.615c-.199-1.245-.956-2.002-2.201-2.201ZM10 12V6l5 3-5 3Z"></path></svg>
      View More on reels
    </a>
  </div>
     <section className="featured-film-section">
  <h2 className="featured-title">Featured <span>Film</span></h2>
  <div className="film-container">
    <div className="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/TbQMvC1-KtY"
        title="NAQAB 2 – Short Film"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <div className="film-info">
      <h3>NAQAB 2 – <span>Short Film</span></h3>
      <span className="badge">Director & Producer</span>
      <p>
       .🎬 Naqab 2 — Shot with heavy camera gimbals, powered by a long gripping script and an ultimate dream team behind the lens. 🔥
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
        src="https://www.youtube.com/embed/n7_kW0pKsSM" 
        title="Rajasthan" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>Ek Tohfa 2 - The Revenge</h3>
      <p> "Ek Tohfa 2" is a low-budget short film brought to life by a skilled and passionate team. With strong storytelling and creative execution, it’s proof that great cinema comes from great hands—not big budgets.</p>
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
        src="https://www.youtube.com/embed/hM-J667sp6g" 
        title="Ek Tohfa - Short Film (Part-1)" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>Ek Tohfa - Short Film (Part-1)</h3>
      <p>A gripping short film where trust is tested and a shocking scam changes everything.</p>
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
