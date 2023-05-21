import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const ImgCatagory = ({catagory}) => {
    console.log(catagory)
    return (
        <div>
            <Col data-aos="fade-up" className='my-5'>
                    <div style={{height: "200px"}}>
                    <Image variant="top" style={{height: "200px"}} src={catagory.url
                    } roundedCircle />
                      <h1 className='text-center fs-3 my-3 pb-5 text-dark  '>{catagory.age}</h1>
                    </div>
                  </Col>
        </div>
    );
};

export default ImgCatagory;