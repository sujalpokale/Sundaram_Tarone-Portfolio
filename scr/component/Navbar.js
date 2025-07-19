import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavigateToSection = (sectionId) => {
    closeMenu(); // close mobile menu
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToTop = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" style={{ cursor: 'pointer' }} onClick={goToTop}>
        <span className="highlight">Sundaram</span>{' '}
        <span className="highlight">Tarone</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><button onClick={() => handleNavigateToSection('about')} className="nav-btn">About</button></li>
        <li><button onClick={() => handleNavigateToSection('portfolio')} className="nav-btn">Portfolio</button></li>
        <li><button onClick={() => handleNavigateToSection('skills')} className="nav-btn">Skills</button></li>
        <li><button onClick={() => handleNavigateToSection('contact')} className="nav-btn">Contact</button></li>
        <li>
          <button className="work-btn" onClick={() => { navigate('/work'); closeMenu(); }}>
            <i className="fas fa-briefcase"></i> Work
          </button>
        </li>
      </ul>
      
      <div className="hamburger" onClick={toggleMenu}>
      
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
