import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { authContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { Form } from 'react-router-dom';

const ToysUpdate = () => {
  document.title = "Kids Dream | Update"

  const {user} = useContext(authContext)
    console.log(user)
    const loadData = useLoaderData()
    const  {
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
      
  } = loadData
  console.log(loadData._id)
    const handleUpdate = event =>{
        event.preventDefault();

        const form = event.target;
        const user_name = user?.displayName;
        const url = form.url.value;
        const product_name = form.product_name.value;
        const catagory = form.catagory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        // const details = form.details.value;
        const email = user?.email;
        
        const addToys = {
            user_name, 
            email, 
            url,
            product_name, 
            price : parseInt(price),
            catagory,
            quantity,
            rating,
            details
            
        }
        
        fetch(`https://toys-car-server-site.vercel.app/addToys/${_id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(addToys)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
               toast("Update Successful....")
            //    console.log("hello")
            }
        })
    }

   
    return (
      <>
     <Container className='border border-secondar my-5 p-5'>
        
            <h1 className='text-center fs-3 text-dark fw-bold'>Update A Toys</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Please Add</h2>

            <Form onSubmit={handleUpdate}>
                <div className='d-md-flex gap-4'>
                <div className='w-100'>
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control  type="text" name='user_name' defaultValue={user?.displayName}  className='my-3'/>
                    <Form.Label>Picture URL</Form.Label>
                    <Form.Control  type="text"  name='url' placeholder="Picture URL"  defaultValue={url} className='my-3'/>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control  type="text" name='product_name' placeholder="Product Name" defaultValue={product_name} className='my-3'/>
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Control  type="text" name='catagory' placeholder="Sub Category" defaultValue={catagory} className='my-3'/>
                </div>
                <div className='w-100'>
                    <Form.Label>Seller Email</Form.Label>
                    <Form.Control  type="email" name='email'defaultValue={user?.email}className='my-3' />

                    <Form.Label>Price</Form.Label>
                    <Form.Control  type="number" name='price' placeholder="Price" defaultValue={price} className='my-3'/>
                    <Form.Label>Rating</Form.Label>
                    <Form.Control  type="text" name='rating' placeholder="Rating" defaultValue={rating} className='my-3'/>
                    <Form.Label>Available Quantity</Form.Label>
                    <Form.Control  type="text" name='quantity' placeholder="Available Quantity" defaultValue={quantity} className='my-3'/>
                </div>
                </div>
                    <Button variant="primary" className='text-center w-100' type="submit">
                        Update
                    </Button>
            </Form>
           
       </Container>
       <ToastContainer/>
      </>
    );
};

export default ToysUpdate;