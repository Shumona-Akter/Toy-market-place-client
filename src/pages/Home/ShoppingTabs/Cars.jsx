import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import LovesProduct from '../Section/Customer/LovesProduct';
import SingleCar from './SingleCar';
import SingleTrack from './Track/SingleTrack';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Cars = ({category}) => {
    console.log(catagory)
    const {
        _id,
        user_name, 
        email, 
        url,
        product_name, 
        price,
        catagory,
        quantity,
        rating,
        details
        
    }  = category
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                
            <Col >
          <Card>
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title>{product_name}</Card.Title>
              <Card.Text>
                <p>Price: ${price}</p>
                <p>
                {rating}k
                <Rating
                  style={{ maxWidth: 100 }}
                  value={3}
                  readOnly
                />
                   </p>
                <Button variant="primary">Veiw More</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                
            </Row>
        </div>
    );
};

export default Cars;