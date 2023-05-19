import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import LovesProduct from './LovesProduct';

const Customer = () => {
    const [loves, setLoves] = useState([])

    const url = `http://localhost:3000/love`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLoves(data))
    }, []);
    return (
        <Container className='py-5 my-5'>
        <h1 className='text-center fs-3 text-dark fw-bold'>Customer Loves</h1>
        <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Popular Product</h2>
      
        <Row xs={1} md={3} className="g-4">
                    {
                      loves.map(love => <LovesProduct
                        key={love._id}
                        love={love}
                    ></LovesProduct>)
                    }
            </Row>
    </Container>
    );
};

export default Customer;