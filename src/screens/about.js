import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Profile from '../components/profile';
import { Container, Row, Col } from 'react-bootstrap';


function About() {
    return (
        <div className="page-content">
            <Header title="About Me" />
            <Container>
                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6} className="d-none d-md-block">
                        {/* Empty on large screen */}
                    </Col>
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}
export default About;
