import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const GalleryImg = ({galleryImgages}) => {
    console.log(galleryImgages)
    return (
        <div>
                  <Col>
                    <Card style={{height: "200px"}}>
                    <Card.Img variant="top" style={{height: "200px"}} src={galleryImgages.url
                    } />
                      
                    </Card>
                  </Col>
        </div>
    );
};

export default GalleryImg;