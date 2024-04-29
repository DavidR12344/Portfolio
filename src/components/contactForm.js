import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm({ firstName, lastName, email, message }) {
    return (
            <Form>
                <Form.Group controlId="firstName">
                    <Form.Label>{firstName}</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>{lastName}</Form.Label>
                    <Form.Control type="text" placeholder="Your last name.." />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>{email}</Form.Label>
                    <Form.Control type="text" placeholder="Email.." />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>{message}</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write something.." />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
    );
}

export default ContactForm;
