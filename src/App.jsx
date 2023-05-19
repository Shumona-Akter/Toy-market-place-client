import React from 'react';
import Navber from './Shared/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';

const App = () => {
  return (
    <div>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
    </div>
  );
};

export default App;