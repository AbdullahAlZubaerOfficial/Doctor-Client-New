import React, { useEffect, useState } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import CountUp from 'react-countup';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  
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

  useEffect(() => {
    refetch();
  }, [refetch]);

  const stats = [
    { num: 10000, text: "Patients Served", icon: "👥" },
    { num: 1000, text: "Expert Doctors", icon: "👨‍⚕️" },
    { num: 15, text: "Specialities", icon: "🎯" },
    { num: 0, text: "Emergency Care", icon: "🚑" }
  ];

  const { category } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <NavBar />

      <div className="bg-gradient-to-b from-blue-50 mt-20 to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
              <span className="text-2xl">🏥</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              About <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lifeline</span>
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Bringing <span className="font-semibold text-blue-500">Affordable</span>, <span className="font-semibold text-purple-500">World-Class Healthcare</span> to Every Doorstep
            </p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20"
          >
            {/* Image Section */}
            <motion.div 
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <span className="text-4xl">❤️</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Compassionate Care</h3>
                    <p className="text-blue-100">Your health is our priority</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={containerVariants} className="space-y-6 lg:space-y-8">
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100"
              >
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  At <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">Lifeline Health Care</span>, we believe healthcare should be accessible, affordable, and of the highest quality — no matter your background or income.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100"
              >
                <p className="text-gray-700 leading-relaxed text-lg md:text-xl">
                  From rural villages to bustling cities, our mission is to serve people of all walks of life by offering top-tier medical services at a fraction of the typical cost.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="text-white text-lg md:text-xl font-semibold italic text-center">
                  "Your health shouldn't depend on your wealth — and with us, it never will."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  icon: "🌍",
                  title: "Our Vision",
                  description: "A world where quality healthcare is accessible to all, regardless of economic status.",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: "🎯",
                  title: "Our Mission",
                  description: "To deliver affordable, compassionate, and excellent healthcare services to every community.",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: "🤝",
                  title: "Our Promise",
                  description: "To treat every patient with dignity, respect, and the highest standard of care.",
                  color: "from-green-500 to-green-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              onViewportEnter: () => setIsInView(true)
            }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 2.5%)`,
                  backgroundSize: '50px 50px'
                }}></div>
              </div>
              
              <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
                {stats.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-6 lg:p-8 group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {index === 3 ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          24/7
                        </motion.span>
                      ) : (
                        <CountUp
                          end={item.num}
                          duration={3}
                          decimals={item.num % 1 !== 0 ? 1 : 0}
                          suffix="+"
                          enableScrollSpy
                          scrollSpyOnce
                          className="block"
                        />
                      )}
                    </div>
                    <p className="text-blue-100 text-lg font-medium">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready to Experience Compassionate Healthcare?
              </h3>
              <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust Lifeline for their healthcare needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/alldoctors/cardiology">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform flex items-center gap-2"
                  >
                    <span>Book an Appointment</span>
                    <span>→</span>
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;