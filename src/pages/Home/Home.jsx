import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
           <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </>
    );
};

export default Home;