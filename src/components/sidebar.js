import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../images/profil.jpg';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
      <Container className="sidebar-content">
        <img className="profile-image img-fluid rounded-circle mb-4" src={profileImg} alt="Profile" />
        <ul>
          <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
          <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
          <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
          <li><Link to="/project" className="text-decoration-none text-dark">Project</Link></li>
          <li><Link to="/resume" className="text-decoration-none text-dark">Resume</Link></li>
          <li><Link to="/skills" className="text-decoration-none text-dark">Skills</Link></li>
        </ul>
      </Container>
    </div>
  );
}

export default Sidebar;


