import React from 'react';
import '../styles/styles.css';

function About() {
  return (
    <div className="about-content">
      <header>
        <h1>About Me</h1>
      </header>
      <div className="container">
        <main className="about-grid">
          <section>
            <h1>Name:</h1>
            <span>David Ruland</span>
          </section>
          <section>
            <h1>Email:</h1>
            <span>david.ruland1@gmail.com</span>
          </section>
          <section>
            <h1>Education:</h1>
            <span>App developer/System developer</span>
          </section>
          <section>
            <h1>From:</h1>
            <span>Sweden</span>
          </section>
          <section>
            <h1>Languages:</h1>
            <span>Swedish - English</span>
          </section>
          <section>
            <h1>What I do:</h1>
            <span>Develop and construct apps and website for customers requirements</span>
          </section>
        </main>
      </div>
      <footer>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default About;
