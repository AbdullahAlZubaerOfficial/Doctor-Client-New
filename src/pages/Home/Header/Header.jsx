import React from 'react';
import headerBg from '../../../assets/headerBg.jpg';
import NavBar from '../../shared/NavBar/NavBar';
import doctor1 from '../../../assets/assets_frontend/doc1.png'
import doctor2 from '../../../assets/assets_frontend/doc2.png'
import doctor3 from '../../../assets/assets_frontend/doc3.png'
import doctor4 from '../../../assets/assets_frontend/doc4.png'

const Header = () => {
  return (
    <div
      className="relative h-[900px] md:h-[600px] top-0 left-0 right-0 z-50"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Transparent NavBar */}
      <div className="absolute top-0 left-0 w-full bg-opacity-50 z-10">
        <NavBar />
      </div>

      {/* Content area */}
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0'>
        <div className="flex items-center justify-center h-full px-6 relative z-0">
          {/* Main flexbox */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full max-w-6xl mx-auto text-white">
            
            {/* Left side text */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 mt-8 md:mb-0">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent animate-slideAndColor">
  "Your Best Medical Help Center...."
</h1>


              <p className="mb-5 text-white ">
                Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s standard.
              </p>
              <button className="rounded-[10px] bg-[#f7a582] p-4 font-size-[20px]">All Services</button>
            </div>

            {/* Right side image */}
            <div className="w-full md:w-1/2 mt-8 justify-center grid grid-cols-2">
              <img 
                src={doctor1} 
                alt="Header Image" 
                className="rounded-lg shadow-lg w-72 md:w-full h-auto object-cover"
              />
              <img 
                src={doctor2} 
                alt="Header Image" 
                className="rounded-lg shadow-lg w-72 md:w-full h-auto object-cover"
              />
              <img 
                src={doctor3} 
                alt="Header Image" 
                className="rounded-lg shadow-lg w-72 md:w-full h-auto object-cover"
              />
              <img 
                src={doctor4} 
                alt="Header Image" 
                className="rounded-lg shadow-lg w-72 md:w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
