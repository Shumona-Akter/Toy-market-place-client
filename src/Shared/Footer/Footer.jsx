import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGooglePlusSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-primary py-5'>
            <Container>
                <div className="row">
                    <div className="col-md-6">
                        <Link to='/' className='text-white fs-4 fw-bold text-decoration-none'>
                        <img src="https://i.ibb.co/h9RdKdv/download.jpg" style={{width:"50px", marginRight:"20px"}} alt="" />
                        Kids Dream</Link>
                        <div>
                        <p className='text-white fs-6 mt-3 fw-bold text-decoration-none'><span>Address:</span> Dhaka <span>Mirpur, 2</span> <span>Block H</span></p>
                        <p className='text-white fs-6 mt-3 fw-bold text-decoration-none'><span>Phone:</span> <span>+88012345678</span></p>
                        
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-none d-md-block'>
                        <Link to="/" className='text-white d-block fs-5 fw-bold' style={{textDecoration:"none"}}>Home</Link>
                        <Link to="/" className='text-white d-block fs-5 fw-bold' style={{textDecoration:"none"}}>All toys</Link>
                        <Link to="/" className='text-white d-block fs-5 fw-bold' style={{textDecoration:"none"}}>Blog</Link>
                        </div>
                        <Link to="/" className='text-white fs-3 '><FaFacebook/></Link>
                        <Link to="/" className='text-white fs-3 ms-3'><FaTwitterSquare/></Link>
                        <Link to="/" className='text-white fs-3 ms-3'><FaInstagramSquare/></Link>
                        <Link to="/" className='text-white fs-3 ms-3'><FaGooglePlusSquare/></Link>
                        
                    </div>
                </div>
                <p className='text-center fs-5 text-dark mt-3'>Copyright Sumona | Built with Sumona by Team90Degree</p>
            </Container>
        </div>
    );
};

export default Footer;