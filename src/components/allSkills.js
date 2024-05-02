import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardLayout from "./card";

function AllSkills({ skills }) {
    return (
        <Container>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {skills.map((skill, index) => (
                    <Col key={index} xs={6} sm={6} md={4} lg={3}>
                        <CardLayout
                            icon={skill.icon}
                            language={skill.language}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllSkills;

