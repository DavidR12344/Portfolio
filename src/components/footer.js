import React from "react";
import { Container } from "react-bootstrap";

function Footer({ description }) {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <p>{description}</p>
            </Container>
        </footer>
    );
}

export default Footer;
