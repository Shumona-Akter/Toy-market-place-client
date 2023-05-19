import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const SingleTrack = ({car}) => {
    
    return (
        <div>
        <Col >
          <Card>
            <Card.Img variant="top" src={car.url} />
            <Card.Body>
              <Card.Title>{car.name}</Card.Title>
              <Card.Text>
                <p>Price: ${car.price}</p>
                <p>
                {car.rating}k
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
        </div>
    );
};

export default SingleTrack;