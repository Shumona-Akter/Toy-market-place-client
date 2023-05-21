import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const LovesProduct = ({love}) => {
    return (
        <Col data-aos="fade-up-right">
                    <Card >
                    <Card.Img variant="top" style={{height: "200px"}} src={love.url
                    } />
                    <Card.Body>
                  <Card.Title>{love.age}</Card.Title>
                </Card.Body>
                <p className='ms-3'>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={5}
                  readOnly
                />

                  </p>
                  <Button>See More</Button>
                    </Card>
                  </Col>
    );
};

export default LovesProduct;