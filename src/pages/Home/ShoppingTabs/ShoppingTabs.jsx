import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LovesProduct from '../Section/Customer/LovesProduct';
import Catagory from '../Section/Catagory/Catagory';
import Cars from './Cars';


const ShoppingTabs = () => {

  const [loves, setLoves] = useState([])
    return (
       <Container>
        <h1 className='text-center fs-3 text-dark fw-bold'>Shopping Product</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Select Catagory</h2>
            <Tabs>
              <TabList>
                <Tab>Cars</Tab>
                <Tab>Truck</Tab>
              </TabList>

              <TabPanel>
                <Cars></Cars>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
          </Tabs>
       </Container>
    );
};

export default ShoppingTabs;