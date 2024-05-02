import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Profile({ title, name, email, from, subtitle, education, language, optional, doing }) {
    return (
        <Container>
            <Row className="about-grid">
                <Col xs={12} md={4} className="col-grid">
                    <h2 className="profile-title">{title}</h2>
                    <p>Name: <span>{name}</span></p>
                    <p>Email: <span>{email}</span></p>
                    <p>From: <span>{from}</span></p>
                </Col>
                <Col xs={12} md={4} className="col-grid">
                    <h2 className="profile-title">{subtitle}</h2>
                    <p>Education: <span>{education}</span></p>
                    <p>Languages: <span>{language}</span></p>
                </Col>
                <Col xs={12} md={4} className="col-grid">
                    <h2 className="profile-title">{optional}</h2>
                    <p>What I do: <span>{doing}</span></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;

