import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleToys = ({data}) => {
    console.log(data)
    
    const {
        _id,
        user_name, 
        email, 
        url,
        product_name, 
        price,
        catagory,
        quantity,
        rating,
        details
        
    } = data
    console.log(email)
    return (
       <>
       <tr  className='text-dark  fs-5 my-3'>
            <th className='py-5'>
                {user_name}
            </th>
            <td>
                {product_name}
            </td>
            <td>{catagory}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
               <Link to={`/allToys/${_id}`}>
               <Button>View Details</Button>
               </Link>
            </th>
        </tr>
       </>
    );
};

export default SingleToys;