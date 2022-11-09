import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextAuth } from '../ContextAPI/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(ContextAuth)
    const location =useLocation();

    if(loading){
        return <progress className="progress w-full">Loading</progress>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    return children
};

export default PrivateRoute;