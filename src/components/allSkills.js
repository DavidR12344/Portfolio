import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./card";

function AllSkills({ skills }) {
    return (
        <Container>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {skills.map((skill, index) => (
                    <Col key={index}>
                        <Card
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
