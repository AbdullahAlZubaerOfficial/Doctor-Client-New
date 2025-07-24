import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import headerBg from '../../../assets/headerBg.jpg';
import NavBar from '../../shared/NavBar/NavBar';
import doctor1 from '../../../assets/assets_frontend/doc1.png';
import doctor2 from '../../../assets/assets_frontend/doc2.png';
import doctor3 from '../../../assets/assets_frontend/doc3.png';
import doctor4 from '../../../assets/assets_frontend/doc4.png';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {
  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const {user}  = useContext(AuthContext);

  return (
    <motion.div
      className="relative h-[900px] md:h-[600px] top-0 left-0 bg-fixed right-0 z-50"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment:'fixed'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Transparent NavBar */}
      <motion.div 
        className="absolute top-0 left-0 w-full bg-opacity-50 z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <NavBar />
      </motion.div>

      {/* Content area */}
      <div className='absolute mt-14 left-0 w-full h-full bg-black bg-opacity-60 z-0'>
        <div className="flex items-center justify-center h-full px-6 relative z-0">
          {/* Main flexbox */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between w-full max-w-6xl mx-auto text-white">
            
            {/* Left side text */}
            <motion.div 
              className="w-full md:w-1/2 text-center md:text-left mb-8 mt-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >

  <motion.h1 
                className="mb-5 text-2xl md:text-5xl font-bold bg-gradient-to-r from-red-300 to-green-300  bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
            <div className='flex text-center items-center'>
                <div>
                 Hi, 
              </div>
              <div>
                 {
                  user ? ( <h2> { user.displayName} </h2> ) : ( <h2></h2> )
                 }
              </div>
            </div>
              </motion.h1>

              <motion.h1 
                className="mb-5 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-orange-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Your Best Medical Help <span className='text-gray-200'>Center</span> ....
              </motion.h1>

             <motion.p variants={itemVariants} className=" leading-relaxed text-lg ">
                       At <span className="font-semibold text-green-200">Lifeline Health Care</span>, we believe healthcare should be accessible, affordable, and of the highest quality — no matter your background or income. That belief drives everything we do.
                     </motion.p>


              <motion.button 
                className="rounded-[10px] bg-[#f7a582] p-4 font-size-[20px] hover:bg-[#e69572] transform hover:scale-105 mt-6 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                All Services
              </motion.button>
            </motion.div>

            {/* Right side images */}
            <motion.div 
              className="w-full md:w-1/2 mt-8 justify-center grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[doctor1, doctor2, doctor3, doctor4].map((doctor, index) => (
                <motion.img
                  key={index}
                  src={doctor}
                  alt={`Doctor ${index + 1}`}
                  className="rounded-lg shadow-lg w-72 md:w-full h-auto object-cover hover:shadow-xl transition-shadow"
                  custom={index}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;