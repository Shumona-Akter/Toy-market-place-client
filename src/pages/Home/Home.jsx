import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import BannerSection from './Section/BannerSection';
import Gallery from './Section/Gallery';
import Catagory from './Section/Catagory/Catagory';
import Customer from './Section/Customer/Customer';
import ShoppingTabs from './ShoppingTabs/ShoppingTabs';
import About from './Section/about';

const Home = () => {
    document.title = "Kids Dream | Home"
    return (
        <>
           <BannerSection></BannerSection>
           <About></About>
           <Gallery/>
           <Catagory/>
           <ShoppingTabs></ShoppingTabs>
           <Customer></Customer>
        </>
    );
};

export default Home;