import React from "react";
import Card from 'react-bootstrap/Card';

function ProjectCard({ title, language, githubLink }) {
    return (
        <Card className="project-card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Language: {language}</Card.Text>
                <Card.Link href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;

