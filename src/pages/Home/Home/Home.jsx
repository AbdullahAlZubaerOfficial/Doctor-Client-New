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
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-screen-xl space-y-14">
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
            <FeedBack />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                <p className="col-span-full text-center py-10">Loading doctors...</p>
              ) : popular.length > 0 ? (
                popular.map((item) => (
                  <DoctorCardd key={item._id} item={item} />
                ))
              ) : (
                <p className="col-span-full text-center py-10">No popular doctors available</p>
              )}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Contact />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;