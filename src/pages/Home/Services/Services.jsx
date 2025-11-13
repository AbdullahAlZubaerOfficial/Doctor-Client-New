import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren",
                duration: 0.8
            }
        }
    };

    const itemVariants = {
        hidden: { 
            y: 50, 
            opacity: 0,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            scale: 0.8, 
            opacity: 0,
            rotateY: -10
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.section 
            className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    variants={itemVariants}
                >
                    <motion.span 
                        className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        🏥 Our Services
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Exceptional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Medical Care</span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full mb-6"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Image Section */}
                    <motion.div 
                        className="w-full lg:w-1/2 flex justify-center"
                        variants={imageVariants}
                    >
                        <motion.div 
                            className="relative group"
                            whileHover={{ y: -10 }}
                            animate="animate"
                        >
                            <motion.img
                                src="https://i.pinimg.com/736x/9d/85/ef/9d85ef63db3691882dee8b0d2dd08a4c.jpg"
                                className="w-full max-w-lg rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                                alt="Professional Healthcare Team"
                                variants={floatingAnimation}
                            />
                            {/* Floating badges */}
                            <motion.div 
                                className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">✅</span>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">⭐</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    {/* Content Section */}
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-8"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Comprehensive <span className="text-orange-500">Healthcare</span> Services
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                We provide cutting-edge medical services with compassion and expertise. Our team of specialists is dedicated to delivering personalized care that meets your unique health needs.
                            </p>
                        </motion.div>

                        {/* Service Buttons Grid */}
                        <motion.div 
                            className="grid grid-cols-2 gap-4 mb-8"
                            variants={containerVariants}
                        >
                            {[
                                { 
                                    name: "Cavity Protection", 
                                    emoji: "🦷",
                                    active: true 
                                },
                                { 
                                    name: "Cosmetic Dentistry", 
                                    emoji: "😊",
                                    active: false 
                                },
                                { 
                                    name: "Oral Surgery", 
                                    emoji: "🔪",
                                    active: false 
                                },
                                { 
                                    name: "Dental Implants", 
                                    emoji: "🦴",
                                    active: false 
                                }
                            ].map((service, index) => (
                                <motion.button
                                    key={index}
                                    variants={itemVariants}
                                    className={`rounded-2xl px-4 py-4 text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                        service.active 
                                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg' 
                                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                                    }`}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="text-lg">{service.emoji}</span>
                                    {service.name}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Featured Service Card */}
                        <motion.div 
                            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 overflow-hidden group"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <motion.div 
                                    className="w-full md:w-1/3 overflow-hidden rounded-xl"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgDqfzRoEXXY0_Y696vlWGir4PKDAbQVnwBQ&s"
                                        className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
                                        alt="Advanced Therapy" 
                                    />
                                </motion.div>
                                <div className="w-full md:w-2/3">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-green-600 font-semibold text-sm">Featured Service</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                        Electro <span className="text-orange-500">Gastrology</span> Therapy
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        Advanced gastrointestinal treatment using state-of-the-art electro therapy technology for optimal digestive health and comfort.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Non-Invasive</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">Painless</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">Quick Recovery</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants}>
                            <Link to="/about">
                                <motion.button
                                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ 
                                        scale: 1.05,
                                        background: "linear-gradient(45deg, #f7a582, #ec4899)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Discover More Services
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Bar */}
          
            </div>
        </motion.section>
    );
};

export default Services;