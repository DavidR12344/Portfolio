import React from 'react';
import '../styles/styles.css';

function Home() {
    return (
        <div className="page-content">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <div className="container">
            <main>
                <section>
                    <h2>About Me</h2>
                    <p>This is where you can introduce yourself.</p>
                </section>
                <section>
                    <h2>My Projects</h2>
                    <p>Here you can showcase your projects.</p>
                </section>
                <section>
                    <h2>My Skills</h2>
                    <p>List your skills here.</p>
                </section>
                <section>
                    <h2>My Resume</h2>
                    <p>Add a link to your resume or display it here.</p>
                </section>
                <section>
                    <h2>Contact Me</h2>
                    <p>Include your contact information or a contact form.</p>
                </section>
            </main>
            </div>
            <footer>
                <p>© 2024 My Portfolio</p>
            </footer>
        </div>
    );
}

export default Home;
