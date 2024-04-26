import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AllProjects from '../components/allProjects';

function Project() {
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