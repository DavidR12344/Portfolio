import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';


function About() {
    return (
        <div className="page-content">
            <Header title="About Me" />
            <div className="container">
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
            </div>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}
export default About;
