import React from 'react';
import { Card, Col } from 'react-bootstrap';

const LovesProduct = ({love}) => {
    return (
        <Col>
                    <Card style={{height: "200px"}}>
                    <Card.Img variant="top" style={{height: "200px"}} src={love.url
                    } />
                    <Card.Body>
        <Card.Title>{love.age}</Card.Title>
      </Card.Body>
                      
                    </Card>
                  </Col>
    );
};

export default LovesProduct;