
import React from 'react'

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateDefaultLogin = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) {
        return <progress className='progress w-56'></progress>
    }

    if(user){
        return children;
    }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateDefaultLogin
