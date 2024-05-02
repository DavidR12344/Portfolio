import React from "react";
import { Container } from "react-bootstrap";

function Footer({ description }) {
    return (
        <footer className="bg-dark text-white py-4">
            <Container className="d-flex justify-content-center">
                <p>{description}</p>
            </Container>
        </footer>
    );
}

export default Footer;
