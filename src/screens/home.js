import React from 'react';
import '../styles/styles.css';
import Profile from '../components/profile';
import AllProjects from '../components/allProjects';

function Home() {
    const projects = [
        {
            title: "Project 1",
            language: "JavaScript",
            githubLink: "https://github.com/example/project1"
        },
        {
            title: "Project 2",
            language: "Python",
            githubLink: "https://github.com/example/project2"
        },
    ];

    return (
        <div className="page-content">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <div className="container">
            <main>
                <section>
                    <h2>About Me</h2>
                    <Profile
                    title="Personal Information"
                    name="David Ruland"
                    email="david.ruland1@gmail.com"
                    from="Sweden"
                    subtitle="Education & Languages"
                    education="App developer/System developer"
                    language="Swedish, English"
                    optional="Experience"
                    doing="Develop and construct apps and websites for customer requirements"
                />
                </section>
                <section>
                    <h2>My Projects</h2>
                    <AllProjects projects={projects} />
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
