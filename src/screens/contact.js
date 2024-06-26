import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ContactForm from '../components/contactForm';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <div className="page-content">
            <Header title="Contact me" />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <ContactForm firstName="First name" lastName="Last name" email="Email" message="Subject" />
                    </Col>
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default Contact;

