import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPhone, FaStar } from 'react-icons/fa';
import { FaMapLocation, FaLocationDot } from 'react-icons/fa6';

const Opening = () => {
    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const cardVariants = {
        hidden: { 
            y: 60, 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1]
            }
        },
        hover: {
            y: -15,
            scale: 1.03,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const iconVariants = {
        initial: { scale: 1 },
        hover: {
            rotate: [0, -5, 5, 0],
            scale: 1.2,
            transition: { 
                duration: 0.5,
                rotate: { duration: 0.6 }
            }
        }
    };

    const pulseVariants = {
        animate: {
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
            <motion.div 
                className="max-w-7xl mx-auto grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Opening Hours Card */}
                <motion.div 
                    className="relative rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 flex flex-col p-8 justify-center items-start space-y-6 min-h-[240px] w-full max-w-[380px] shadow-xl border border-emerald-700/30 overflow-hidden group"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    {/* Background decoration */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-600/20 rounded-full"></div>
                    <div className="absolute -left-6 -bottom-6 w-20 h-20 bg-emerald-500/10 rounded-full"></div>
                    
                    <motion.div 
                        className="text-white text-4xl p-3 rounded-xl bg-emerald-700/40 backdrop-blur-sm group-hover:bg-emerald-600/60 transition-colors duration-300"
                        variants={iconVariants}
                    >
                        <FaClock />
                    </motion.div>
                    <div className="text-white relative z-10">
                        <h1 className="font-bold text-2xl mb-3 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                            Opening Hours
                        </h1>
                        <p className="text-emerald-100 text-lg font-medium">Open 9.00 am to 5.00pm</p>
                        <p className="text-emerald-200/80">Everyday</p>
                    </div>
                    
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>

                {/* Locations Card (highlighted) */}
                <motion.div 
                    className="relative rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 flex flex-col p-8 justify-center items-start space-y-6 min-h-[240px] w-full max-w-[380px] shadow-2xl border border-orange-300/50 overflow-hidden group"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        delay: 0.2,
                        type: "spring", 
                        stiffness: 400,
                        damping: 15
                    }}
                >
                    {/* Animated background elements */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-orange-400/80 to-rose-500/80"
                        animate={{
                            background: [
                                'linear-gradient(45deg, rgba(247,165,130,0.9) 0%, rgba(239,108,90,0.9) 100%)',
                                'linear-gradient(45deg, rgba(239,108,90,0.9) 0%, rgba(247,165,130,0.9) 100%)',
                                'linear-gradient(45deg, rgba(247,165,130,0.9) 0%, rgba(239,108,90,0.9) 100%)'
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/15 rounded-full"></div>
                    
                    <motion.div 
                        className="text-white text-4xl p-3 rounded-xl bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 relative z-10"
                        variants={iconVariants}
                    >
                        <FaLocationDot />
                    </motion.div>
                    <div className="text-white relative z-10">
                        <h1 className="font-bold text-2xl mb-3 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                            Our Locations
                        </h1>
                        <p className="text-white text-lg font-semibold">Dhanmondi 17, Dhaka -1200</p>
                        <p className="text-white/90">Bangladesh</p>
                    </div>
                    
                    {/* Special badge */}
                    <motion.div 
                        className="absolute -top-3 -right-3 bg-gradient-to-br from-white to-orange-100 text-rose-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-orange-200"
                        variants={pulseVariants}
                        animate="animate"
                    >
                        <FaStar className="text-sm" />
                    </motion.div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                </motion.div>

                {/* Contact Us Card */}
                <motion.div 
                    className="relative rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-800 flex flex-col p-8 justify-center items-start space-y-6 min-h-[240px] w-full max-w-[380px] shadow-xl border border-emerald-700/30 overflow-hidden group"
                    variants={cardVariants}
                    whileHover="hover"
                >
                    {/* Background decoration */}
                    <div className="absolute -left-4 -top-4 w-20 h-20 bg-emerald-600/20 rounded-full"></div>
                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full"></div>
                    
                    <motion.div 
                        className="text-white text-4xl p-3 rounded-xl bg-emerald-700/40 backdrop-blur-sm group-hover:bg-emerald-600/60 transition-colors duration-300"
                        variants={iconVariants}
                    >
                        <FaPhone />
                    </motion.div>
                    <div className="text-white relative z-10">
                        <h1 className="font-bold text-2xl mb-3 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-emerald-100 text-lg font-medium">+88 01750 00 00 00</p>
                        <p className="text-emerald-100 text-lg font-medium">+88 01750 00 00 00</p>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </motion.div>
            </motion.div>
            
            {/* Responsive grid adjustments */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .grid-cols-1 {
                        grid-template-columns: 1fr;
                    }
                    .max-w-7xl {
                        padding: 0 1rem;
                    }
                }
                @media (min-width: 769px) and (max-width: 1024px) {
                    .grid-cols-2 {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
};

export default Opening;