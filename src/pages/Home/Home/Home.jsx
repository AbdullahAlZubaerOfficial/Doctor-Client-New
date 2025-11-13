import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Opening from '../Opening/Opening';
import FeedBack from '../FeedBack/FeedBack';
import DoctorCard from '../../../Components/DoctorCard/DoctorCard';
import Contact from '../Contact/Contact';
import About from '../../About/About';
import Footer from '../../shared/Footter/Footer';
import DoctorCardd from '../../../Components/DoctorCard/DoctorCardd';
import axios from 'axios';
import useMenu from '../../../hooks/useMenu';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const sectionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Home = () => {
  // Destructure refetch from useMenu
  const [menu, loading, refetch] = useMenu();
  const popular = menu.filter(item => item.category == 'Dermatology');

  // Add refetch on component mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="bg-[rgba(229,231,235,0.4)] text-black min-h-screen">
      {/* ✅ Header should be outside of the container to be full width */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Header />
      </motion.div>

      {/* ✅ Other sections can stay inside the constrained container */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-4 xl:px-16 m space-y-14">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-14"
        >
          <About />

          <motion.div variants={sectionVariants}>
            <Services />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Opening />
          </motion.div>

          
<motion.div variants={sectionVariants}>
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Our Doctors</h2>
    <p className="text-gray-600 text-center max-w-2xl mx-auto">
      Meet our team of experienced healthcare professionals dedicated to your well-being
    </p>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
    {loading ? (
      // Enhanced loading state
      <div className="col-span-full">
        <div className="flex flex-col items-center justify-center py-12 lg:py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-lg text-gray-600 font-medium">Loading our doctors...</p>
          <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the best healthcare professionals</p>
        </div>
      </div>
    ) : popular.length > 0 ? (
      popular.map((item) => (
        <DoctorCardd key={item._id} item={item} />
      ))
    ) : (
      // Enhanced empty state
      <div className="col-span-full">
        <div className="text-center py-16 lg:py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Doctors Available</h3>
          <p className="text-gray-500 max-w-md mx-auto">
            We're currently updating our doctor listings. Please check back soon or contact us for assistance.
          </p>
        </div>
      </div>
    )}
  </div>
</motion.div>





          

  
        </motion.div>
        
      </div>

      
      
              <motion.div variants={sectionVariants}>
            <Contact />
          </motion.div>
                    <motion.div variants={sectionVariants}>
            <FeedBack />
          </motion.div>
    </div>
  );
};

export default Home;