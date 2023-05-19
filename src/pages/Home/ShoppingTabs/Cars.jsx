import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import LovesProduct from '../Section/Customer/LovesProduct';

const Cars = () => {
    const [car, setCar] = useState([])
    const url = `http://localhost:3000/love`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                
                    {
                        car.map(love => <LovesProduct
                          key={love._id}
                          love={love}
                      ></LovesProduct>)
                      }
                
            </Row>
        </div>
    );
};

export default Cars;