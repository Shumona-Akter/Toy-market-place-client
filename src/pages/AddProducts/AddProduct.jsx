import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { authContext } from '../../Provider/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(authContext)
    console.log(user)

    const handleProductAdd = event =>{
        event.preventDefault();

        const form = event.target;
        const user_name = user?.user_name;
        const url = form.url.value;
        const product_name = form.product_name.value;
        const catagory = form.catagory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const email = user?.email;
        
        const addToys = {
            name, 
            email, 
            url,
            product_name, 
            price,
            catagory,
            quantity,
            rating,
            details
            
        }
        console.log(addToys)

        fetch("http://localhost:3000/addToys",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addToys)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }   
    return (
       <Container className='border border-secondar my-5 p-5'>
            <h1 className='text-center fs-3 text-dark fw-bold'>Add A Toys</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Please Add</h2>

            <Form onSubmit={handleProductAdd}>
                <div className='d-md-flex gap-4'>
                <div className='w-100'>
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control  type="text" name='user_name' defaultValue={user?.displayName}  className='my-3'/>
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control  type="text"  name='url' placeholder="Picture URL" className='my-3'/>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control  type="text" name='product_name' placeholder="Product Name" className='my-3'/>
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Control  type="text" name='catagory' placeholder="Sub Category" className='my-3'/>
                </div>
                <div className='w-100'>
                    <Form.Label>Seller Email</Form.Label>
                    <Form.Control  type="email" name='email'defaultValue={user?.email}className='my-3' />

                    <Form.Label>Price</Form.Label>
                    <Form.Control  type="text" name='price' placeholder="Price" className='my-3'/>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control  type="text" name='rating' placeholder="Rating" className='my-3'/>
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control  type="text" name='quantity' placeholder="Available Quantity" className='my-3'/>
                </div>
                </div>
                <Form.Label>Detail Description</Form.Label>
                    <Form.Control  type="text" name='details' placeholder="Detail description" className='my-3'/>
                    <Button variant="primary" className='text-center w-100' type="submit">
                        Submit
                    </Button>
            </Form>
        
       </Container>
    );
};

export default AddProduct;