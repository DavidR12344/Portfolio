import React from "react";
import { Card } from "react-bootstrap";

function CardLayout({ icon, language }) {
    return (
        <Card className="project-card">
            <Card.Body>
                <div className="icon">{icon}</div>
                <Card.Text className="language">{language}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardLayout;

