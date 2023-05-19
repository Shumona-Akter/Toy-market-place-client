import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <Container className='py-5'>
            <h1 className='text-center fs-3 text-dark fw-bold'>Recent Photoshoots</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Check Gallery</h2>
            <div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img variant="top" src="holder.js/100px160" />
                      <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
        </Row>
            </div>
        </Container>
    );
};

export default Gallery;