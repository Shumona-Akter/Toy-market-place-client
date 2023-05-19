import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleCar = ({car}) => {
    
    return (
        <div>
        <Col >
          <Card>
            <Card.Img variant="top" src={car.url} />
            <Card.Body>
              <Card.Title>{car.name}</Card.Title>
              <Card.Text>
                <p>Price: ${car.price}</p>
                <p>Ratting: ${car.rating}k</p>
                <Button variant="primary">Veiw More</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default SingleCar;