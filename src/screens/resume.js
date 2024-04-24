import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Resume() {
    return <div className="page-content">
        <Header title="Resume" />
        <div className="container">
            <main className="">
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Resume;