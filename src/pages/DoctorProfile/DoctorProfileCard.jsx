import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import img1 from '../../../public/doc14.png';
import { useParams } from "react-router-dom";
import axios from "axios";
import Details from "./Details";
import Header from "./Header";

const DoctorProfileCard = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    axios
      .get(`https://doctor-server-green.vercel.app/menu/${id}`)
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.3)",
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <div>
      <div className="hidden lg:block">
        <Header></Header>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto mt-28 mb-10 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row hover:shadow-xl  transition-shadow duration-300"
      >
        {/* Left: Image Section */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/4 xl:w-1/5 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 sm:p-6 lg:p-0"
        >
          <motion.div
            variants={imageVariants}
            whileHover="hover"
            className="relative w-full max-w-xs"
          >
            {/* Responsive image container with aspect ratio */}
            <div className="pb-[100%] relative rounded-full overflow-hidden shadow-md">
              <img
                src={doctor?.image}
                alt="Dr. Ruby Perrin"
                className="absolute h-full w-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='16' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EDR%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {/* Online status indicator with pulse animation */}
            <motion.div
              className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 500,
                damping: 15,
              }}
              whileHover={{
                scale: [1, 1.2, 1],
                transition: { repeat: Infinity, duration: 1.5 },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          variants={containerVariants}
          className="w-full lg:w-3/4 xl:w-4/5 p-6 lg:p-8"
        >
          {/* Name and Rating */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <motion.h2
                className="text-xl md:text-2xl font-bold text-gray-900"
                whileHover={{ color: "#3b82f6" }}
              >
                {doctor?.name}
              </motion.h2>
              <motion.p
                className="text-sm md:text-base text-gray-600 mt-1"
                whileHover={{ x: 5 }}
              >
                {doctor?.category}
              </motion.p>
            </div>

            {/* Rating with star animation */}
            <motion.div
              className="flex items-center mt-3 lg:mt-0"
              variants={itemVariants}
            >
              <motion.div
                className="flex text-orange-400 text-base md:text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.3, rotate: 15 }}
                  >
                    ★
                  </motion.span>
                ))}
                <motion.span
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  ☆
                </motion.span>
              </motion.div>
              <motion.span
                className="ml-2 text-sm md:text-base text-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                (35 reviews)
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Location with floating animation */}
          <motion.div
            variants={itemVariants}
            className="text-sm md:text-base text-gray-600 mt-3 md:mt-4 flex items-start"
            whileHover={{ y: -3 }}
          >
            <motion.span
              className="inline-block mr-2 mt-1"
              animate={{
                y: [0, -3, 0],
                transition: { repeat: Infinity, duration: 3 },
              }}
            >
              📍
            </motion.span>
            <div>
              <p> {doctor?.locationn} </p>
              <motion.a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-medium mt-1 inline-block transition-colors"
                whileHover={{
                  x: 5,
                  textShadow: "0px 0px 5px rgba(249, 115, 22, 0.5)",
                }}
              >
                Get Directions →
              </motion.a>
            </div>
          </motion.div>

          {/* Specializations with staggered animation */}
          <motion.div variants={containerVariants} className="mt-4 md:mt-6">
            <motion.h3
              variants={itemVariants}
              className="text-sm md:text-base font-semibold text-gray-700 mb-2"
            >
              Specializations:
            </motion.h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "Dentistry",
                "Cosmetic",
                "Implants",
                "Orthodontics",
                "Whitening",
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  custom={i}
                  className="flex items-center px-3 py-1.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{
                    y: -3,
                    backgroundColor: "#e0e7ff",
                  }}
                >
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-200 rounded-full mr-2 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    <span className="text-xs text-gray-500">{i + 1}</span>
                  </motion.div>
                  <span className="text-xs md:text-sm text-gray-700">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Available Services */}
          <motion.div variants={containerVariants} className="mt-6 md:mt-8">
            <motion.h3
              variants={itemVariants}
              className="text-sm md:text-base font-semibold text-gray-700 mb-2"
            >
              Available Services:
            </motion.h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Dental Filling", "Teeth Whitening", "Root Canal"].map(
                (service, i) => (
                  <motion.button
                    key={i}
                    variants={itemVariants}
                    custom={i + 5}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                    whileHover={{
                      y: -3,
                      backgroundColor: "#f3f4f6",
                      boxShadow: "0px 3px 10px rgba(0,0,0,0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>

          {/* CTA Button with special animation */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto mt-6 md:mt-8 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-colors"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </motion.div>
      <Details></Details>
    </div>
  );
};

export default DoctorProfileCard;
