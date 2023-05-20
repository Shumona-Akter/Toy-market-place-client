import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import LovesProduct from '../Section/Customer/LovesProduct';
import SingleCar from './SingleCar';
import SingleTrack from './Track/SingleTrack';

const Cars = () => {
    const [car, setCar] = useState([])
    const url = `https://toys-car-server-site.vercel.app/car`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data))
    }, []);
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                
                    {
                        car.map(car => <SingleTrack
                          key={car._id}
                          car={car}
                      ></SingleTrack>)
                      }
                
            </Row>
        </div>
    );
};

export default Cars;