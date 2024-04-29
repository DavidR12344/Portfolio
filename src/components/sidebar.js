import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import profileImg from '../images/profil.jpg';

function Sidebar() {
  return (
    <Container className="sidebar">
      <img className="profile-image img-fluid rounded-circle mb-4" src={profileImg} alt="Profile" />
      <ul className="list-unstyled">
        <li><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
        <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
        <li><Link to="/contact" className="text-decoration-none text-dark">Contact</Link></li>
        <li><Link to="/project" className="text-decoration-none text-dark">Project</Link></li>
        <li><Link to="/resume" className="text-decoration-none text-dark">Resume</Link></li>
        <li><Link to="/skills" className="text-decoration-none text-dark">Skills</Link></li>
      </ul>
    </Container>
  );
}

export default Sidebar;

