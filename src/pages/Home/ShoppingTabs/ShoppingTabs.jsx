import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LovesProduct from '../Section/Customer/LovesProduct';
import Catagory from '../Section/Catagory/Catagory';
import Cars from './Cars';
import Track from './Track/Track';
import PoliceCar from './PoliceCar/PoliceCar';
// import Track from './Track/Track';


const ShoppingTabs = () => {

    return (
       <Container>
        <h1 className='text-center fs-3 text-dark fw-bold'>Shopping Product</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Select Catagory</h2>
            <Tabs>
              <TabList>
                <Tab>Cars</Tab>
                <Tab>Truck</Tab>
                <Tab>Police Car</Tab>
              </TabList>

              <TabPanel>
                <Cars></Cars>
              </TabPanel>
              <TabPanel>
                <Track></Track>
              </TabPanel>
              <TabPanel>
                <PoliceCar/>
              </TabPanel>
          </Tabs>
       </Container>
    );
};

export default ShoppingTabs;