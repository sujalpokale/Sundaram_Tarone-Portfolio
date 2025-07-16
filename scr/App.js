// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/skills';
import Contact from './components/Contact';
import Work from './components/Work'; // <-- Import the Work page
import Footer from './components/footer'; 

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page with all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Skills />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
