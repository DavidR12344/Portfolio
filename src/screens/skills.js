import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AllSkills from '../components/allSkills';
import { skills } from '../data/data';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <div className="page-content">
            <Header title="Skills" />
            <Container>
                <Row>
                    <Col>
                        <AllSkills skills={skills} />
                    </Col>
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default Skills;
