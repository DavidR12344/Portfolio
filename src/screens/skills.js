import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AllSkills from '../components/allSkills';

function Skills() {
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


    return <div className="page-content">
        <Header title="Skills" />
        <div className="container">
            <main>
            <AllSkills skills={skills} /> 
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Skills;