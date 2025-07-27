import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const {user: currentUser} = useAuth();

  const username = currentUser?.displayName || currentUser?.email?.split('@')[0]
 


  const navOptions = (
    <>
      <li className="font-bold">
        <Link to="/" className={`${isScrolled ? 'text-white' : 'text-black'}`}>Home</Link>
      </li>
      <li className="font-bold">
        <Link to="/about" className={`${isScrolled ? 'text-white' : 'text-black'}`}>About</Link>
      </li>
       <li className="font-bold">
        <Link to="/alldoctors" className={`${isScrolled ? 'text-white' : 'text-black'}`}>ALL Doctors</Link>
      </li>
    

      {/* <li className="font-bold">
        <Link to="/adminDefaultLogin" className={`${isScrolled ? 'text-red-500' : 'text-green-700'}`}>Become Admin</Link>
      </li> */}
     
      <li className="font-bold">
        <Link to="/dashboard/users" className={`${isScrolled ? 'text-red-500' : 'text-green-700'}`}>Dashboard</Link>
      </li>

        <li className="font-bold">
        <Link to="/appointment" className={`${isScrolled ? 'text-white' : 'text-black'}`}>Appointment</Link>
      </li> 


   <li className="font-bold">
        <Link to="/myprofile" className={`${isScrolled ? 'text-white' : 'text-black'}`}>My Profile</Link>
      </li> 

      
        <li className="font-bold">
        <Link to={`/updateprofile/${username}`} className={`${isScrolled ? 'text-white' : 'text-black'}`}> Update My Profile</Link>
      </li> 
     
    
    </>
  );

  const {user,logOut}  = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch((error)=> console.log(error));
  };

  return (
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
            className={`btn btn-ghost font-bold lg:hidden ${isScrolled ? 'text-white' : 'text-black'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
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
        <Link to="/" className={`btn btn-ghost text-2xl font-bold ${isScrolled ? 'text-white' : 'text-black'}`}>
          <span className="text-[#f7a582]">Doc</span> House
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
         <button 
  onClick={handleLogOut} 
  className={`btn btn-outline ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
  LogOut
</button>

        ) : (
         <Link to="/login">
  <button className={`btn btn-outline ${isScrolled ? 'text-white border-white' : 'text-black border-black'}`}>
    Login
  </button>
</Link>

        )
      
      }
      </div>
    </div>
  );
};

export default NavBar;
