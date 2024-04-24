import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/home';
import About from './screens/about';
import Contact from './screens/contact';
import Project from './screens/project';
import Resume from './screens/resume';
import Skills from './screens/skills';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element = {<Contact/>}/>
            <Route path="/project" element = {<Project/>}/>
            <Route path="/resume" element = {<Resume/>}/>
            <Route path="/skills" element = {<Skills/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


