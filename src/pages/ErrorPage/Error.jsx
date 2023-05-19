import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='d-flex justify-content-center' style={{background: `url(https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3255.jpg?w=740&t=st=1684498574~exp=1684499174~hmac=a60c6a840f4f51450dc13b7d28896370d0ae6d41fcb51640c5f51bf062deb8c7) no-repeat bottom / cover` , height:"100vh" } } 
        >
            <Container className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
            <h1 className='text-black fw-bold fs-1'>{error.status}!</h1>
            <h1 className='text-black fw-bold fs-1'>{error.statusText}!</h1>
            <p className='text-black fw-bold fs-3'>{error.data}</p>
            <Link to="/"><Button>GO HOME</Button></Link>
            </div>
            </Container>
            
        </div>
    );
};

export default Error;