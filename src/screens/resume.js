import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MyResume from '../components/myResume';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../images/profil.jpg';

function Resume() {
    return (
        <div className="page-content">
            <Header title="Resume" />
            <Container>
                <Row>
                    <Col>
                        <MyResume profile={profileImg} link="https://www.linkedin.com/in/david-ruland-4931b9189" />
                    </Col>
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default Resume;
