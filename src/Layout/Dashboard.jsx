import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProviders';
import { FaHome, FaUsers, FaUtensils, FaList, FaShoppingCart, FaAd, FaCalendar } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      {isAdmin ? (
        <>
          {/* <li><Link to="/dashboard/adminHome" className="font-bold"><FaHome /> Admin Home</Link></li> */}
          <li><Link to="/dashboard/addDoctors" className="font-bold"><FaUtensils /> Add Doctors</Link></li>
          <li><Link to="/dashboard/manageItems" className="font-bold"><FaList /> Manage Items</Link></li>
          <li><Link to="/dashboard/users" className="font-bold"><FaUsers /> All Users</Link></li>
          {/* <li><Link to="/appointment" className="font-bold"><FaUsers />  Appointment</Link></li> */}
          {/* <li><Link to="/dashboard/paymentHistory" className="font-bold"><FaAd /> My Payment History</Link></li> */}
          {/* <li><Link to="/dashboard/cart" className="font-bold"><FaShoppingCart /> My Cart ({cart.length})</Link></li> */}
        </>
      ) : (
        <>
          <li><Link to="/dashboard/userHome" className="font-bold"><FaHome /> User Home</Link></li>
          <li><Link to="/dashboard/cart" className="font-bold"><FaShoppingCart /> My Cart ({cart.length})</Link></li>
          <li><Link to="/dashboard/paymentHistory" className="font-bold"><FaAd /> Payment History</Link></li>
        </>
      )}
      <li><Link to="/" className="font-bold"><FaHome /> Home</Link></li>
      {/* <li><Link to="/order/salad" className="font-bold"><FaCalendar /> Menu</Link></li> */}
      {/* <li><Link to="/dashboard/contact" className="font-bold"><FaShoppingCart /> Contact</Link></li> */}
    </>
  );

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div
        className={`navbar fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1e1e2f] shadow-md'
            : 'bg-[rgba(229,231,235,0.6)] backdrop-blur-md shadow-none'
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className={`btn btn-ghost font-bold lg:hidden ${
                isScrolled ? 'text-white' : 'text-black'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] w-52 p-2 shadow rounded-box ${
                isScrolled ? 'bg-gray-900 text-white' : 'bg-white text-black'
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className={`btn btn-ghost text-2xl font-bold ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            <span className="text-[#f7a582]">Doc</span> House
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navOptions}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className={`btn btn-outline ${
                isScrolled ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button
                className={`btn btn-outline ${
                  isScrolled ? 'text-white border-white' : 'text-black border-black'
                }`}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Main Content from Nested Routes */}

  <div className="bg-3d-medical min-h-screen">
           <div className="content-overlay">
               <Outlet></Outlet>
          
           </div>
        </div>

     
    </div>
  );
};

export default Dashboard;


