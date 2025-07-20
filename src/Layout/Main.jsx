import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footter/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {
    return (
        <div className="bg-3d-medical min-h-screen">
           <div className="content-overlay">
             <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Main;