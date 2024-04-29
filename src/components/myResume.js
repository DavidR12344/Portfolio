import React from 'react';
import Card from 'react-bootstrap/Card';

function MyResume({ profile, link }) {
    return (
        <Card className="custom-card">
            <Card.Img variant="top" src={profile} className="custom-image" />
            <Card.Body>
                <Card.Title>David Ruland</Card.Title>
                <Card.Text>
                    App developer/System developer. 
                    Press link below to see my LinkedIn.
                </Card.Text>
                <Card.Link href={link}>My resume</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default MyResume;

