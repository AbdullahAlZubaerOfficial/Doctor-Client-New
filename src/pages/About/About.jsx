
import React, { useEffect } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';

const About = () => {

      // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
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

  const [,,refetch] = useMenu();

  useEffect(()=> {
    refetch();
  },[refetch]);


  const {category} = useParams();

  return (

    <div>
        <NavBar/>


 <div className="bg-gradient-to-b from-blue-50 mt-20 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Lifeline</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing Affordable, World-Class Healthcare to Every Doorstep
          </p>
        </motion.div>

        {/* Content with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="hidden md:block">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
              <div className="absolute inset-0 bg-blue-500 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-64 h-64 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-blue-600">Lifeline Health Care</span>, we believe healthcare should be accessible, affordable, and of the highest quality — no matter your background or income. That belief drives everything we do.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 leading-relaxed text-lg">
              From rural villages to bustling cities, our mission is to serve people of all walks of life by offering top-tier medical services at a fraction of the typical cost. We combine the power of technology, modern facilities, and the warmth of compassionate professionals to bring hope, healing, and health to every patient.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 italic font-medium">
                "Your health shouldn't depend on your wealth — and with us, it never will."
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">A world where quality healthcare is accessible to all, regardless of economic status.</p>
            </div>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">To deliver affordable, compassionate, and excellent healthcare services to every community.</p>
            </div>

            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Promise</h3>
              <p className="text-gray-600">To treat every patient with dignity, respect, and the highest standard of care.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-blue-600 rounded-xl shadow-lg overflow-hidden text-white"
        >
          <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-500">
            <div className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-blue-100">Patients Served</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Expert Doctors</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Specialities</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Emergency Care</p>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to experience compassionate healthcare?</h3>
       <Link to="/alldoctors/cardiology">
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
    Book an Appointment
  </button>
</Link>

        </motion.div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
