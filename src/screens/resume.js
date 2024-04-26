import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import profileImg from '../images/profil.jpg';
import MyResume from '../components/myResume';

function Resume() {
    return <div className="page-content">
        <Header title="Resume" />
        <div className="container">
            <main>
            <MyResume profile={profileImg} link="www.linkedin.com/in/david-ruland-4931b9189"/>
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Resume;