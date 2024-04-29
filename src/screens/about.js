import React from 'react';
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
                    <Col>
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
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}
export default About;
