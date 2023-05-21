import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const SingleCard = ({catagory}) => {

    const {_id, product_name, url, price, rating} = catagory

    console.log(catagory);
    return (
        <div>
            <Col >
          <Card>
            <Card.Img variant="top" src={url}  style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title>{product_name}</Card.Title>
              <Card.Text>
                <p>Price: ${price}</p>
                <p className='d-flex'>Rating:
               
                <Rating
                  style={{ maxWidth: 100 }}
                  value={3}
                  readOnly
                /> {rating}
                   </p>
                <Link to={`/allToys/${_id}`}><Button variant="primary">Veiw More</Button></Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </div>
    );
};

export default SingleCard;