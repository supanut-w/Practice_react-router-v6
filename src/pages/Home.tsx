import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const profilepic = 'https://images.unsplash.com/photo-1658237783206-e1ae5b72eeb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'

export const Home = () => {
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
                                <Card.Subtitle className='mb-2 text-muted'>
                                    <h2>Full-Stack Developer</h2>
                                </Card.Subtitle>
                                <Card.Text>
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit incidunt, consequatur veniam, ipsum aperiam necessitatibus similique, beatae fugit nisi provident obcaecati velit temporibus accusantium? Vero accusamus tenetur numquam consequuntur reprehenderit, ea molestiae aperiam, earum, harum deleniti odit quas iusto quam dignissimos quisquam libero omnis commodi nisi quasi autem minus asperiores?
                                    </p>
                                </Card.Text>
                                <Card.Link as={Link} to='/about'>
                                    <Button variant='primary'>About</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}