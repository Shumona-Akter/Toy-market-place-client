import React from 'react';
import { Button } from 'react-bootstrap';

const SingleToys = ({data}) => {
    console.log(data)
    
    const {
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
               <Button>View Details</Button>
            </th>
        </tr>
       </>
    );
};

export default SingleToys;