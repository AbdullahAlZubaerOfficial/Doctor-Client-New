import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/Footter/Footer';
import NavBar from '../pages/shared/NavBar/NavBar';
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {

    const location = useLocation();
    console.log(location);

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className="bg-3d-medical min-h-screen">
           <div className="content-overlay">
           
           {noHeaderFooter || <NavBar></NavBar> }
           
             <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>

            {noHeaderFooter || <Footer></Footer> }
          
           </div>
        </div>
    );
};

export default Main;