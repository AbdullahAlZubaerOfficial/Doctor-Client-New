import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navOptions = (
    <>
      <li className="font-bold">
        <a className={`${isScrolled ? 'text-white' : 'text-black'}`}>Home</a>
      </li>
      <li className="font-bold">
        <a className={`${isScrolled ? 'text-white' : 'text-black'}`}>About</a>
      </li>
      <li className="font-bold">
        <a className={`${isScrolled ? 'text-white' : 'text-black'}`}>Appointment</a>
      </li>
    </>
  );

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a
          className={`btn btn-ghost text-2xl font-bold ${
            isScrolled ? 'text-white' : 'text-black'
          }`}
        >
          <span className="text-[#f7a582]">Doc</span> House
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal px-1 ${
            isScrolled ? 'text-white' : 'text-black'
          }`}
        >
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
