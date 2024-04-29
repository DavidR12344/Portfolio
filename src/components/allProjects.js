import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";

function AllProjects({ projects }) {
    return (
        <Container>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projects.map((project, index) => (
                    <Col key={index}>
                        <ProjectCard
                            title={project.title}
                            language={project.language}
                            githubLink={project.githubLink}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllProjects;
