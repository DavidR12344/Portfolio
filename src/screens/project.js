import React from 'react';
import '../styles/styles.css';
import Header from '../components/header';
import Footer from '../components/footer';
import AllProjects from '../components/allProjects';
import { projects } from '../data/data';
import { Container, Row, Col } from 'react-bootstrap';

function Project() {
    return (
        <div className="page-content">
            <Header title="Project" />
            <Container>
                <Row>
                    <Col>
                        <AllProjects projects={projects} />
                    </Col>
                </Row>
            </Container>
            <Footer description="© 2024 My Portfolio" />
        </div>
    );
}

export default Project;
