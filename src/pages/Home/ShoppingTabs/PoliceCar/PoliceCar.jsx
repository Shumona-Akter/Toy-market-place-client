import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleTrack from '../Track/SingleTrack';

const PoliceCar = () => {
    const [car, setCar] = useState([])
    const url = `http://localhost:3000/police`;
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

export default PoliceCar;