import React, { useState } from 'react'
import { Container, Card, Row, Col, Image, Button, Form, Alert } from 'react-bootstrap'

export const Contact = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    }

    return (
        <Container>
            <Card className='my-5 p-4'>
                <Form.Floating>
                    <h1>Contact Me</h1>
                    <Form.Group>
                        <Form.Label className='mt-3'>Name</Form.Label>
                        <Form.Control
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            value={name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'>Email</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            placeholder='Enter your email'
                            value={email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='mt-3'>Message</Form.Label>
                        <Form.Control
                            as='textarea'
                            name='message'
                            placeholder='Enter your message'
                            value={name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant='primary' className='mt-3' type='submit' onClick={() => setShow(true)}>
                        Submit
                    </Button>
                </Form.Floating>

                <Alert show={show} className='mt-3' variant='success'>
                    Your message has been sent!
                </Alert>

            </Card>
        </Container>
    )
}