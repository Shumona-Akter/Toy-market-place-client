import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h5 className='my-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
            <p>a user with an access token can only access protected resources or perform specific actions for a set period of time, which reduces the risk of the token being compromised. A refresh token allows the user to get a new access token without needing to log in again.</p>
            <h5 className='my-3'>Compare SQL and NoSQL databases?</h5>
            <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores</p>
            <h5 className='my-3'>What is express js? What is Nest JS ?</h5>
            <p>Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy. <br /> NestJS is a framework for developing modern server-side applications in Node. js. </p>
            <h5 className='my-3'>What is MongoDB aggregate and how does it work ?</h5>
            <p className='mb-5'>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages </p>
        </Container>
    );
};

export default Blog;