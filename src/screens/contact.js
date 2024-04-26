import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';

function Contact() {
    return <div className="page-content">
        <Header title="Contact me" />
        <div className="container">
            <main>
            <ContactForm firstName="First name" lastName="Last name" email="Email" message="Subject" />
            </main>
        </div>
        <Footer description="© 2024 My Portfolio" />
    </div>
}

export default Contact;