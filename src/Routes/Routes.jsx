import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import DoctorDetails from '../pages/DoctorProfile/DoctorDetails';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />
        },{
          path: "/doctorDetails",
          element: <DoctorDetails></DoctorDetails>
        },
        {
          path: "/about",
          element: <About></About>
        },{
          path:"/login",
          element: <Login></Login>
        },{
          path:"/signup",
          element: <SignUp></SignUp>
        }
      ]
    }
  ],
  {
    basename: '/Doc-House-New' // Correct path for subdirectory
  }
);
