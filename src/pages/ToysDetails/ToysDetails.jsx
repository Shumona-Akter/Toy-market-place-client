import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ToysDetails = () => {
  document.title = "Kids Dream | ToysDetails"

    const toysDetails = useLoaderData()
    console.log(toysDetails)
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
        
    } = toysDetails
    return (
      <Container className='my-5'>
          <Row className="w-50 mx-auto gap-4" xs={1} md={1}>
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col >
          <Card>
            <Card.Img variant="top" src={url} className='img-fluid'/>
            <Card.Body>
              <Card.Title>{product_name}</Card.Title>
              <Card.Text>
                <p>Price: ${price}</p>
                <div
                className='d-flex'>
                    <p className='my-2'>Rating: </p>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={5}
                  readOnly
                />
                <p className='my-2'>{rating}</p>
                </div>
                
                <p>Quantity: {quantity} Pice</p>
                <p><span className='fw-bold'>Product Details:</span> {details}</p>
                <Link to={`/allToys`}>
                <Button>
                    Go All Toys
                </Button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      {/* ))} */}
    </Row>
      </Container>
    );
};

export default ToysDetails;