import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import DoctorDetails from '../pages/DoctorProfile/DoctorDetails';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AllDoctors from '../pages/AllDoctors/AllDoctors';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import AdminRoute from './AdminRoute';
import AddDoctors from '../pages/Dashboard/AddDoctors/AddDoctors';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import ManageItems from '../pages/Dashboard/ManageItems/ManageItems';

import Details from '../pages/DoctorProfile/Details';
import DoctorProfileCard from '../pages/DoctorProfile/DoctorProfileCard';


import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";



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
        },{
          path:"/appointment",
          element: <DoctorProfileCard></DoctorProfileCard>
        },{
  path: "alldoctors/:category?",
  element: <AllDoctors />
},
        {
          path:"/dashboardd",
          element: <Dashboard></Dashboard>
        },
         {
          path:"/doctor/:id",
          element: <DoctorProfileCard></DoctorProfileCard>
        }
      ]
    },{
      path:"dashboard",
      element: (
        <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      ),
      children: [
        // normal users





        // admin Users

        {
          path:"users",
          element:(
            <AdminRoute>
              <AllUsers></AllUsers>
            </AdminRoute>
          )
        },

        {
          path:"addDoctors",
          element: (
            <AdminRoute>
              <AddDoctors></AddDoctors>
            </AdminRoute>
          )
        },{
          path:"manageItems",
          element: (
            <AdminRoute>
              <ManageItems></ManageItems>
            </AdminRoute>
          )
        },
        {
          path:"updateItem/:id",
          element: (
            <AdminRoute>
              <UpdateItem></UpdateItem>
            </AdminRoute>
          ),
          loader: ({params})=> fetch(`http://localhost:5100/menu/${params.id}`),
        },

       

      ]
    }
  ],
  {
    basename: '/' // Correct path for subdirectory
  }
);
