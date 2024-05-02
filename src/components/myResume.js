import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

function MyResume({ profile, link }) {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card className="custom-card">
                <Row>
                    <Col xs={12} md={6} className="text-center">
                        <Card.Img variant="top" src={profile} className="custom-image" />
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title>David Ruland</Card.Title>
                    <Card.Text>
                        App developer/System developer.
                        Press the link below to see my LinkedIn.
                    </Card.Text>
                    <Card.Link href={link}>My LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MyResume;


