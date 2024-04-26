import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AllProjects from '../components/allProjects';

function Project() {
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

    return <div className="page-content">
        <Header title="Project" />
        <div className="container">
            <main>
            <AllProjects projects={projects} />
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Project;