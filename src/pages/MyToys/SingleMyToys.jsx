import React from 'react';
import { Button } from 'react-bootstrap';
import { FaEdgeLegacy, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleMyToys = ({data,handleDelete}) => {
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
            
            <td style={{width:"100px"}}>
            <div >
                    <div className="w-100">
                        {url && <img src={url} className='img-fluid'/>}
                    </div>
                </div>
            </td>
            <th className='py-5 border text-center'>
                {user_name}
            </th>
            <td className='border text-center'>
                {email}
            </td>
            <td className='border text-center'>
                {product_name}
            </td>
            <td className='border text-center'>{catagory}</td>
            <td className='border text-center'>${price}</td>
            <td className='border text-center'>{quantity}</td>
            <th className='border text-center'>
                <Link to={`${_id}`}>
                <Button className='text-center btn-secondary mx-3'><FaEdit/></Button>
                </Link>
                <Button onClick={()=> handleDelete(_id)} className='text-center btn-danger m-3'><FaTrashAlt></FaTrashAlt></Button>
               
            </th>
        </tr>
       </>
    );
};

export default SingleMyToys;