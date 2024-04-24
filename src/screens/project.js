import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Project() {
    return <div className="project-content">
        <Header title="Project" />
        <div className="container">
            <main className="">
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Project;