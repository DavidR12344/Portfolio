import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../images/profil.jpg';

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="profile-image" src={profileImg} alt="Profile" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/skills">Skills</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
