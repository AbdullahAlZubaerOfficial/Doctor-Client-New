import React from 'react';
import { motion } from 'framer-motion';
import serviceImage from '../../../assets/doctor8.jpg';
import teeth from '../../../assets/teeth.jpg';
import { Link } from 'react-router-dom';

const Services = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="hero bg-base-100 py-10 px-4 sm:px-6 lg:px-8 " 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="hero-content flex-col lg:flex-row gap-8 mt-8">
                {/* Image with floating animation */}
                <motion.div 
                    className="w-full lg:w-1/2 flex justify-center"
                    variants={imageVariants}
                    whileHover={{ y: -10 }}
                >
                    <img
                        src={serviceImage}
                        className="w-full max-w-md lg:max-w-none rounded-lg shadow-2xl hover:shadow-xl transition-all"
                        alt="Doctor"
                    />
                </motion.div>
                
                {/* Content with staggered animations */}
                <motion.div 
                    className="w-full lg:w-1/2 text-left"
                    variants={containerVariants}
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
                        Our <span className="text-[#f7a582]">Services</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="pb-6 text-slate-500">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven­tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </motion.p>

                    {/* Buttons with pop-in effect */}
                    <motion.div 
                        className="flex flex-wrap gap-2 mb-6"
                        variants={containerVariants}
                    >
                        <motion.button 
                            variants={itemVariants}
                            className="rounded-[10px] bg-[#f7a582] text-black px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 hover:bg-[#e69572] transform hover:scale-105 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Cavity Protection
                        </motion.button>
                        <motion.button 
                            variants={itemVariants}
                            className="rounded-[10px] border border-[#e6e6e6] text-black px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 hover:bg-gray-100 transform hover:scale-105 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Cosmetic Dentisty
                        </motion.button>
                        <motion.button 
                            variants={itemVariants}
                            className="rounded-[10px] border border-[#e6e6e6] text-black px-4 py-2 text-sm sm:text-base sm:px-6 sm:py-3 hover:bg-gray-100 transform hover:scale-105 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Oral Surgery
                        </motion.button>
                    </motion.div>

                    {/* Teeth image with subtle zoom */}
                    <motion.div 
                        className="w-full mb-6 overflow-hidden rounded-lg"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img 
                            src={teeth} 
                            className="w-full h-auto max-h-[250px] object-cover rounded-lg hover:scale-105 transition-transform" 
                            alt="Teeth" 
                        />
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
                        Electro <span className="text-[#f7a582]">Gastrology</span> Therapy
                    </motion.h1>

                    <motion.p variants={itemVariants} className='pb-6 text-slate-500'>
                        Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inven­tore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </motion.p>        

            <Link to="/about">
            
            
                    <motion.button 
                        variants={itemVariants}
                        className="rounded-[10px] text-[#f7a582] border border-[#f7a582] px-6 py-3 font-bold hover:bg-[#f7a582] hover:text-white transition-all duration-300"
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#f7a582",
                            color: "white"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        More Details
                    </motion.button>
            
            </Link>

                </motion.div>
            </div>
        </motion.div>
    );
};

export default Services;