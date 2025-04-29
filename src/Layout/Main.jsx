import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footter/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;