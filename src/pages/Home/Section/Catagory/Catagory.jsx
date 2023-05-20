import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ImgCatagory from './ImgCatagory';

const Catagory = () => {
    const [catagoris, setCatagoris] = useState([])

    const url = `https://toys-car-server-site.vercel.app/catagory`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCatagoris(data))
    }, []);
    return (
        <Container className='py-5 my-5'>
        <h1 className='text-center fs-3 text-dark fw-bold'>Shop by Age</h1>
        <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Our Collections</h2>
      
        <Row xs={1} md={3} className="g-4">
                    {
                      catagoris.map(catagory => <ImgCatagory
                        key={catagory._id}
                        catagory={catagory}
                    ></ImgCatagory>)
                    }
            </Row>
    </Container>
    );
};

export default Catagory;