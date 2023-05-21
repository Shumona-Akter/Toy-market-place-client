import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-md-6">
                <h1 className='fs-3 text-dark fw-bold'>About Us</h1>
                <h2 className=' fs-6 my-3  text-primary '>See About</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium porro assumenda iusto optio cupiditate omnis! Modi commodi consectetur vel similique perspiciatis atque velit, odio porro qui sequi explicabo aut, quasi harum, temporibus iste nesciunt inventore ex! Eligendi deleniti maiores iusto aliquid labore saepe autem tempora cum quidem officia ipsam iure, quae omnis incidunt veniam fugiat dolore! Placeat, voluptatibus veniam! Eos tempora eum animi cupiditate ullam ex optio ducimus harum officia accusamus voluptas dolor voluptatibus fuga enim cumque tenetur.</p>
            
                </div>
                <div className="col-md-6">
                    <img src="https://img.freepik.com/premium-photo/kids-playing-room_52137-16046.jpg?w=740" alt="" className='img-fluid' />
                </div>
            </div>
        </Container>
    );
};

export default About;