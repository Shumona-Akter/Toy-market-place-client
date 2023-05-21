import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const BannerSection = () => {
    return (
        <div style={{background: `url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074078.jpg?w=900&t=st=1684472118~exp=1684472718~hmac=6833befd563b0a6921ea2c7cfb4ed2822511de5871efb0625973a13f1b56ac7d) no-repeat bottom / cover` , }} className='p-5 mb-5'>
          <div className='py-5'>
          <Container className='py-5 text-start'>
                    <Button className='btn-danger text-white mb-5 btn py-3 fs-5 fw-bold' style={{width:"170px"}}>Kids Dream</Button>
                    <h1 className='text-secondary display-4 fw-bold'>ONE BOX TOY</h1>
                     <h2 className='text-dark fs-5 fw-bold'> Flat 15% off Order Above $100.99 </h2>
                     <Button className='btn-primary rounded-pill text-white my-5 btn py-3 fs-5 fw-bold' style={{width:"170px"}}>SHOP NOW <FaArrowAltCircleRight/></Button>
                     
           </Container>
          </div>
            
        </div>
    );
};

export default BannerSection;