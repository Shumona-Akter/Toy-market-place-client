// import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Navber = () => {
    const {user, logOut, loading} = useContext(authContext)
    if(loading){
     return <h1>loading...</h1>
   
    }
    // console.log(user.displayName
    //   )
    const handleLogout = ()=>{
      logOut()
      console.log(logOut())
      .then()
      .catch((error) => {
        console.log(error)
      });
    }
    return (
        <Navbar bg="white " expand="lg">
      <Container>
        <Link to='/' className='text-primary fs-5 fw-bold text-decoration-none'>
            <img src="https://i.ibb.co/h9RdKdv/download.jpg" style={{width:"100px"}} alt="" />
            Kids <span className='text-danger'>Dream</span></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto ">
          <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"10px" , fontWeight: "700", fontSize: "20px"}} to="/" className={({ isActive}) => isActive ? "text-primary" : "text-dark" } > Home</NavLink>
          <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"10px" , fontWeight: "700", fontSize: "20px"}} to="/blog" className={({ isActive}) => isActive ? "text-primary" : "text-dark" } >  Blog</NavLink>
          <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"10px" , fontWeight: "700", fontSize: "20px"}} to="/allToys" className={({ isActive}) => isActive ? "text-primary" : "text-dark" } >  All Toys</NavLink>
          {
            user?<>
              <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"10px" , fontWeight: "700", fontSize: "20px"}} to="/myToys" className={({ isActive}) => isActive ? "text-primary" : "text-dark" } > My Toys</NavLink>
          
              <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"10px" , fontWeight: "700", fontSize: "20px"}} to="/addToys" className={({ isActive}) => isActive ? "text-primary" : "text-dark" } > Add A Toy</NavLink>
              <img cd style={{width: '50px' , height : '50px', borderRadius: '50%'}} src={user.photoURL} alt="user" />
              <Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white' onClick={handleLogout}>Logout</Link></Button>
            </>:
            <Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white'>Login</Link></Button>
          }


          
          
          </Nav>
          <div className="d-flex align-items-center text-white">
           
            {/* {
              user?<div className='d-flex gap-3'>
              <img title={user?.displayName} style={{width: '50px' , height : '50px', borderRadius: '50%'}} src={user.photoURL} alt="user" />
              <Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white' onClick={handleLogout}>Logout</Link></Button>
              </div>:<Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white'>Login</Link></Button>
            } */}
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navber;