import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const profilepic = 'https://images.unsplash.com/photo-1658237783206-e1ae5b72eeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
const js = 'https://img.icons8.com/color/48/000000/javascript--v1.png'
const react = 'https://img.icons8.com/color/48/000000/react-native.png'

export const About = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='home-body mt-5'>
            <Container>
                <Row className='home-main-row'>
                    <Col>
                        <Card className='p-5'>
                            <Card.Body>
                                <Image src={profilepic} height={300} roundedCircle />
                                <Card.Title>
                                    <h1>John Doe</h1>
                                </Card.Title>
                                <Card.Text>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo tempore a totam et, dolore cupiditate rerum, adipisci, laboriosam molestias nobis unde accusantium asperiores at praesentium. Maxime ea ratione dolorem et ducimus voluptatem porro officia ex officiis laboriosam? Necessitatibus distinctio deleniti quasi placeat harum cupiditate ut velit at aliquid nemo fugiat possimus eos tempore totam quas, ea quaerat deserunt eum! Eveniet minus ad nulla repellendus nobis voluptates, veritatis magnam! Earum sint quas amet vel aperiam optio blanditiis id voluptatibus ducimus dolor, et nulla quam sed. Odit repellat quia corporis omnis aspernatur, eius facere, veritatis, laboriosam tenetur quis eligendi fugit! Pariatur.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ut hic, voluptates sint doloremque illo asperiores recusandae quaerat neque vitae delectus ad vero id repellat voluptate sapiente velit expedita unde sequi exercitationem eveniet magni, cumque sit odio. Quis necessitatibus soluta animi culpa, eius repellendus, omnis praesentium minus, exercitationem iure suscipit.
                                    </p>
                                    <h3>My Skills</h3>
                                    <ul className='myskills'>
                                        <li><Image src={js}></Image></li>
                                        <li><Image src={react}></Image></li>
                                    </ul>
                                    <div className='back-next-button'>
                                        <Button onClick={handleBack} variant='dark'>
                                            Back
                                        </Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}