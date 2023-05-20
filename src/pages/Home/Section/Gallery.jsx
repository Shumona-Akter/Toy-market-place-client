import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap';
import GalleryImg from './GalleryImg';

const Gallery = () => {
    const [gallery, setGalleryImages] = useState([])

    const url = `https://toys-car-server-site.vercel.app/gallery`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setGalleryImages(data))
    }, []);
    // console.log(gallery) 
    return (
        <Container className='py-5'>
            <h1 className='text-center fs-3 text-dark fw-bold'>Recent Photoshoots</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Check Gallery</h2>
            <Row xs={1} md={4} className="g-4">
                    {
                      gallery.map(galleryImgages => <GalleryImg
                        key={galleryImgages._id}
                        galleryImgages={galleryImgages}
                    ></GalleryImg>)
                    }
            </Row>
                    
        </Container>
    );
};

export default Gallery;