import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    if(loading){
        return <div className='text-center p-5 m-5'>
            <Spinner  animation="border" variant="primary" />
        </div>
    }
   
    if(user){
        return children
    }
    console.log(user)
    return <Navigate to="/login" state={{form:location}} replace></Navigate>

   
};

export default PrivateRoute;