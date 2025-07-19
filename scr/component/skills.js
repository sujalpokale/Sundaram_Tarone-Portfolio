import React from 'react';
import './Skills.css';
import { FaVideo, FaCut, FaFilm, FaBookOpen, FaYoutube, FaBullhorn, FaPalette, FaPencilRuler, FaMobileAlt } from 'react-icons/fa';

const skills = [
  { icon: <FaVideo />, name: 'DaVinci Resolve', color: 'purple', level: 90 },
  { icon: <FaCut />, name: 'CapCut', color: 'orange', level: 85 },
  { icon: <FaFilm />, name: 'Filmmaking', color: 'pink', level: 88 },
  { icon: <FaYoutube />, name: 'YouTube', color: 'red', level: 92 },
  { icon: <FaBookOpen />, name: 'Storytelling', color: 'green', level: 80 },
  { icon: <FaBullhorn />, name: 'Meta Ads', color: 'blue', level: 75 },
  { icon: <FaPalette />, name: 'Color Grading', color: 'cyan', level: 87 },
  { icon: <FaPencilRuler />, name: 'Graphic Design', color: 'orange', level: 78 },
  { icon: <FaMobileAlt />, name: 'Social Media Content', color: 'green', level: 90 },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My <span>Skills</span> & Expertise</h2>
      <p className="section-subtitle">
        The technical skills and expertise I bring to every project I work on.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h4>{skill.name}</h4>
            <div className="progress-bar">
              <div
                className={`progress ${skill.color}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
