import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import BannerSection from './Section/BannerSection';
import Gallery from './Section/Gallery';

const Home = () => {
    return (
        <>
           <BannerSection></BannerSection>
           <Gallery/>
        </>
    );
};

export default Home;