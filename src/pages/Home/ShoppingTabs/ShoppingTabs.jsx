import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SingleCard from './SingleCard';
// import Track from './Track/Track';


const ShoppingTabs = () => {
    const [allToys, setToys] = useState([])

    useEffect(()=>{
        fetch(`https://toys-car-server-site.vercel.app/addToys`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
    },[])
    console.log(allToys);

    const bus = allToys?.filter(toy => toy.catagory === "bus")
    const car = allToys?.filter(toy => toy.catagory === "car")
    const train = allToys?.filter(toy => toy.catagory === "train")
    // const sports = allToys?.filter(toy => toy.catagory === "sports")

    return (
       <Container>
        <h1 className='text-center fs-3 text-dark fw-bold'>Shopping  Product</h1>
            <h2 className='text-center fs-6 my-3 pb-5 text-primary '>Select Catagory</h2>
            <Tabs>
              <TabList>
                <Tab>Bus</Tab>
                <Tab>Car</Tab>
                <Tab>Train</Tab>
              </TabList>

              <TabPanel>
                <Row xs={1} md={3} className="g-4">
                {
                  bus.map(category => <SingleCard
                    key={category._id}
                    catagory ={category}
                  ></SingleCard>)
                }
                
                </Row>
                
              </TabPanel>
              <TabPanel>
              <Row xs={1} md={3} className="g-4">
                {
                  car.map(category => <SingleCard
                    key={category._id}
                    catagory ={category}
                  ></SingleCard>)
                }
                
                </Row>
              </TabPanel>
              <TabPanel>
              <Row xs={1} md={3} className="g-4">
                {
                  train.map(category => <SingleCard
                    key={category._id}
                    catagory ={category}
                  ></SingleCard>)
                }
                
                </Row>
              </TabPanel>
          </Tabs>
       </Container>
    );
};

export default ShoppingTabs;