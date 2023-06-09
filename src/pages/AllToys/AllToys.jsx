import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import SingleToys from './SingleToys';

const AllToys = () => {
  document.title = "Kids Dream | AllToys"
  const loadData = useLoaderData()

  const [allData, setallData] = useState(loadData)
  const [searchText, setSearchText] =useState('')
  const handleSearch = ()=> {
    console.log(searchText)
    const search = allData.filter(toy => toy.product_name.toUpperCase() == searchText.toUpperCase())
    setallData(search)
  }
  // console.log(allData)
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
        <Form className="d-flex">
            <Form.Control
            onChange={(e)=> setSearchText(e.target.value)}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSearch} variant="outline-success">Search</Button>
          </Form>
         <div>
            <h2 >Total Items: {allData.length}</h2>
            <div >
                <table className="w-100 my-5 p-5 text-center ">
                    {/* head */}
                    <thead className=' py-5  bg-secondary'>
                        <tr className='text-white fs-5'>
                            
                            <th className='py-3'>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allData.map(data => <SingleToys key={data._id} 
                        data= {data}></SingleToys>)
                       }
                    </tbody>

                </table>
            </div>
        </div>
         </Container>
      </div>
    );
};

export default AllToys;