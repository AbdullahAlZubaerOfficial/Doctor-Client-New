import React, { useEffect, useState } from 'react';
import headerBg from '../../../public/headerBg.jpg'; // Make sure this path works
import NavBar from '../shared/NavBar/NavBar';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Header = () => {

  const {id} = useParams();
  const axiosPublic = useAxiosPublic();
  const [doctor, setDoctor] = useState(null);

  useEffect(()=> {
    axiosPublic.get(`/menu/${id}`).then((res) => {
      setDoctor(res.data);
    });
  },[id, axiosPublic]);

  return (
    <div
      className="relative w-full h-[900px] md:h-[650px] bg-fixed"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* ✅ Fixed Glassmorphism NavBar */}
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-md z-50">
        <NavBar />
      </div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10" />

      {/* Content Section */}
      <div className="relative z-30 flex items-center justify-center h-full px-6">
        {/* pt-20 is added to give space under the fixed navbar */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl text-white text-center md:text-left">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl sm:mb-8 font-extrabold leading-snug bg-gradient-to-r from-blue-400 to-orange-200 bg-clip-text text-transparent animate-fade-in">
              Your Best Medical Help Center...
            </h1>

            <p className="mt-4 text-base md:text-lg text-white">
              "Committed to providing compassionate, affordable, and quality healthcare services to ensure your well-being, safety, and complete peace of mind." 🏥💙
            </p>

            <button className="mt-6 font-bold px-6 py-3 text-yellow-900 bg-[#f7a582] rounded-xl text-lg hover:bg-[#f78a52] transition-all duration-300 shadow-md">
              All <span className='text-pink-900'>Doctors</span>
            </button>

            <p className="mt-6 text-2xl font-semibold text-green-200 animate-fade-in-delay">
             {doctor?.name} Profile.....
            </p>
          </div>

          {/* Optional: Doctor Images (You can re-add the grid here if needed) */}

        </div>
      </div>
    </div>
  );
};

export default Header;
