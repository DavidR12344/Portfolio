import React from "react";
import { Container } from "react-bootstrap";

function Header({ title }) {
    return (
        <header className="bg-dark text-white py-4">
            <Container>
                <h1>{title}</h1>
            </Container>
        </header>
    );
}

export default Header;
