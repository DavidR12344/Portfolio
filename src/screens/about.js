import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {
    return (
        <div className="about-content">
            <Header title="About Me" />
            <div className="container">
                <main className="about-grid">
                    <section>
                        <p>Name: <span>David Ruland</span></p>
                    </section>
                    <section>
                        <p>Email: <span>david.ruland1@gmail.com</span></p>
                    </section>
                    <section>
                        <p>Education: <span>App developer/System developer</span></p>
                    </section>
                    <section>
                        <p>From: <span>Sweden</span></p>
                    </section>
                    <section>
                        <p>Languages: <span>david.ruland1@gmail.com</span></p>
                    </section>
                    <section>
                        <p>What I do: <span>Develop and construct apps and website for customers requirements</span></p>
                    </section>
                </main>
            </div>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default About;
