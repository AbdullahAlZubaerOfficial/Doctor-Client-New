import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <progress className='progress w-56'></progress>;
  }

  return user ? children : <Navigate to="/adminDefaultLogin" state={{ from: location }} replace />;
};

export default PrivateRoute
