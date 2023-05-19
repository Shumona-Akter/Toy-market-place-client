import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import LovesProduct from '../Section/Customer/LovesProduct';
import SingleCar from './SingleCar';

const Cars = () => {
    const [car, setCar] = useState([])
    const url = `http://localhost:3000/car`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                
                    {
                        car.map(car => <SingleCar
                          key={car._id}
                          car={car}
                      ></SingleCar>)
                      }
                
            </Row>
        </div>
    );
};

export default Cars;