import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
  document.title = "Kids Dream | Blog"

    return (
        <Container>
            <h5 className='my-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
            <p><span className='  fw-bold'>Access Token : </span> An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a user's device. <br /> 
                
                 <span className='  fw-bold mt-3'> Refresh Token :</span> A refresh token allows the user to get a new access token without needing to log in again.
        <br />
        It is typically stored in memory or a short-lived storage mechanism, such as browser memory (e.g., JavaScript variable) or a local storage. Storing it in an HTTP-only cookie can also provide some protection against cross-site scripting (XSS) attacks.
            </p>
            <h5 className='my-3'>Compare SQL and NoSQL databases?</h5>
            <p className='my-3'>SQL: SQL databases follow a relational data model, where data is organized into tables with rows and columns. Relationships between tables are defined using foreign keys.NoSQL: NoSQL databases use various data models, such as key-value pairs, document-based, columnar, or graph-based. They offer more flexibility in structuring data and can handle unstructured or semi-structured data effectively.</p>
            
            <p className='my-3'>SQL: SQL databases are well-suited for applications that require complex relationships, structured data, and ACID compliance. They are commonly used in traditional enterprise systems, financial applications, and data analysis scenarios.NoSQL: NoSQL databases excel in handling unstructured or semi-structured data, rapid development, and scalability. They are often chosen for use cases such as content management systems, real-time analytics, IoT applications, and handling high-velocity data.</p>
            <p className='my-3'>SQL: SQL databases use SQL as the standardized query language, providing a rich set of operations for data retrieval, manipulation, and analysis. SQL offers powerful querying capabilities, including joins, aggregations, and complex queries. NoSQL: NoSQL databases use various query languages specific to their data model. For example, document databases often use query languages similar to JSON or JavaScript object notation.</p>

            <h5 className='my-3'>What is express js? What is Nest JS ?</h5>
            <p><span className='fw-bold my-3'>Express js : </span> Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy. <br /> 
            <span className='fw-bold mb-3'>NestJS js : </span>
            NestJS is a framework for developing modern server-side applications in Node. js. </p>
            <h5 className='my-3'>What is MongoDB aggregate and how does it work ?</h5>
            <p className='mb-5'>In MongoDB, the aggregate method is a powerful feature that allows you to perform advanced data aggregation operations on your collections. It provides a flexible and expressive way to manipulate, transform, and analyze data within the database.The aggregate method in MongoDB works by processing data through a pipeline of multiple stages. Each stage performs a specific operation on the data and passes the transformed data to the next stage. The result of the aggregation pipeline is the output of the last stage.</p>
        </Container>
    );
};

export default Blog;