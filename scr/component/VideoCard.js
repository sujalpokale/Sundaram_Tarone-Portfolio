import React, { useRef, useEffect, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ src, title, subtitle }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (window.innerWidth <= 768) {
      // Mobile: play when in view
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!video) return;

          if (entry.isIntersecting && entry.intersectionRatio >= 0.8) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
            setIsPlaying(false);
          }
        },
        {
          threshold: [0.8],
        }
      );

      const currentRef = containerRef.current;
      if (currentRef) observer.observe(currentRef);

      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }
  }, []);

  // Desktop mouse hover handlers
  const handleMouseEnter = () => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768 && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="video-card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="glow-border"></div>

      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-element"
          src={src}
          loop
          playsInline
          preload="metadata"
        />
        <div className="video-gradient-overlay"></div>

        {!isPlaying && (
          <div className="video-play-button">
            <div className="play-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="play-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
          </div>
        )}

        <div className="video-caption">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
