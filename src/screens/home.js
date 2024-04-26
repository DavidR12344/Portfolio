import React from 'react';
import '../styles/styles.css';
import Profile from '../components/profile';
import AllProjects from '../components/allProjects';
import AllSkills from '../components/allSkills';
import profileImg from '../images/profil.jpg';
import MyResume from '../components/myResume';
import ContactForm from '../components/contactForm';

function Home() {
    const projects = [
        {
            title: "TodoList",
            language: "C# console application",
            githubLink: "https://github.com/DavidR12344/ToDoList.git"
        },
        {
            title: "Checkpoint2",
            language: "C# console application",
            githubLink: "https://github.com/DavidR12344/Checkpoint2.git"
        },
        {
            title: "AssetTracking",
            language: "C# console application",
            githubLink: "https://github.com/DavidR12344/AssetTracking.git"
        },
        {
            title: "CV",
            language: "HTML",
            githubLink: "https://github.com/DavidR12344/CV_project.git"
        },
        {
            title: "Munamii Cakery",
            language: "HTML & Javascript",
            githubLink: "https://github.com/DavidR12344/Munamii-cakery.git"
        },
        {
            title: "CV",
            language: "React",
            githubLink: "https://github.com/DavidR12344/Cv_React.git"
        },
        {
            title: "Portfolio",
            language: "React",
            githubLink: "https://github.com/DavidR12344/Portfolio.git"
        },

    ];

    const skills = [
        {
            icon: "",
            language: "Swift",
        },
        {
            icon: "",
            language: "SwiftUI",
        },
        {
            icon: "",
            language: "Java/Kotlin",
        },
        {
            icon: "",
            language: "C#",
        },
        {
            icon: "",
            language: "React",
        },
        {
            icon: "",
            language: "HTML",
        },
        {
            icon: "",
            language: "Javascriot",
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
                        <AllSkills skills={skills} />
                    </section>
                    <section>
                        <h2>My Resume</h2>
                        <MyResume profile={profileImg} link="www.linkedin.com/in/david-ruland-4931b9189" />
                    </section>
                    <section>
                        <h2>Contact Me</h2>
                        <ContactForm firstName="First name" lastName="Last name" email="Email" message="Subject" />
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
