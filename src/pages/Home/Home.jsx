import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import BannerSection from './Section/BannerSection';
import Gallery from './Section/Gallery';
import Catagory from './Section/Catagory/Catagory';
import Customer from './Section/Customer/Customer';
import ShoppingTabs from './ShoppingTabs/ShoppingTabs';

const Home = () => {
    return (
        <>
           <BannerSection></BannerSection>
           <Gallery/>
           <Catagory/>
           <ShoppingTabs></ShoppingTabs>
           <Customer></Customer>
        </>
    );
};

export default Home;