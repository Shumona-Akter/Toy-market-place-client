import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import { Button, Container } from 'react-bootstrap';
import SingleToys from '../AllToys/SingleToys';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import SingleMyToys from './SingleMyToys';

const MyToys = () => {
    const {user} = useContext(authContext)
    const [myToys, setMyToys] = useState([])
    const url = `https://toys-car-server-site.vercel.app/addToys?email=${user.email}`
    useEffect(() =>{
        fetch (url)
        .then(res => res.json())
        .then(data =>  setMyToys(data)
        )
    },[])


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://toys-car-server-site.vercel.app/addToys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(toys => toys._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }


    // 
    
    return (
        <div>
            <div  style={{background: `url(https://img.freepik.com/free-photo/happy-childhood-vibrant-colors_52683-100297.jpg?t=st=1684569894~exp=1684570494~hmac=8c168a82219fc6229a9653e3f9f0f15d2c233647367ee7c3c0838890c55df69b) no-repeat bottom / cover` , }} className='p-5 mb-5'>
        <Container className='py-5 text-start'>
          <Button className='btn-danger text-white mb-5 btn py-3 fs-5 fw-bold' style={{width:"170px"}}>Kids Dreams</Button>
          <h1 className='text-secondary display-4 fw-bold'>ONE BOX TOY</h1>
          <h2 className='text-dark fs-5 fw-bold'> Flat 15% off Order Above $100.99 </h2>
          <Button className='btn-primary rounded-pill text-white my-5 btn py-3 fs-5 fw-bold' style={{width:"170px"}}>SHOP NOW <FaArrowAltCircleRight/></Button>
          
         </Container>

         {/* table */}
         
        </div>
        <Container>
         <div>
            <h2 >Total Items: {myToys.length}</h2>
            <div >
                <table className="w-100 my-5 p-5 ">
                    {/* head */}
                    <thead className=' py-5  bg-secondary'>
                        <tr className='text-white fs-5'>
                            
                            <th style={{width:"100px"}} className='py-5 text-center'>Photo</th>
                            <th style={{width:"100px"}} className='py-5 text-center'>Seller</th>
                            <th style={{width:"100px"}} className='py-5 text-center'>Seller Email</th>
                            <th className='text-center' style={{width:"100px"}}>Toy Name</th>
                            <th className='text-center' style={{width:"100px"}}>Sub-category</th>
                            <th className='text-center' style={{width:"100px"}}>Price</th>
                            <th className='text-center' style={{width:"100px"}}>Available Quantity</th>
                            <th className='text-center' style={{width:"100px"}}>Update Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myToys.map(data => <SingleMyToys key={data._id} 
                        data= {data}
                        handleDelete={handleDelete}
                        ></SingleMyToys>)
                        
                       }
                    </tbody>

                </table>
            </div>
        </div>
         </Container>
        </div>
    );
};

export default MyToys;