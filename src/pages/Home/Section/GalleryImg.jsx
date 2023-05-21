import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const GalleryImg = ({galleryImgages}) => {
    // console.log(galleryImgages)
    return (
        <div>
                  <Col data-aos="fade-up">
                    <Card style={{height: "200px"}}>
                    <Card.Img variant="top" style={{height: "200px"}} src={galleryImgages.url
                    } />
                      
                    </Card>
                  </Col>
        </div>
    );
};

export default GalleryImg;