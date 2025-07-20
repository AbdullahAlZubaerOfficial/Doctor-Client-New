import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';

const Opening = () => {
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

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            transition: { duration: 0.3 }
        }
    };

    const iconVariants = {
        hover: {
            rotate: 10,
            scale: 1.1,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div 
            className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-items-center py-8 px-4'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
        >
            {/* Opening Hours Card */}
            <motion.div 
                className='rounded-lg bg-[rgb(7,51,47)] flex flex-col p-8 justify-center items-start space-y-4 h-[202px] w-full max-w-[364px] shadow-lg'
                variants={cardVariants}
                whileHover="hover"
            >
                <motion.div 
                    className='text-white text-[37.5px]'
                    variants={iconVariants}
                >
                    <FaClock />
                </motion.div>
                <div className='text-white'>
                    <h1 className='font-bold text-2xl mb-3'>Opening Hours</h1>
                    <p className='text-slate-300'>Open 9.00 am to 5.00pm Everyday</p>
                </div>
            </motion.div>

            {/* Locations Card (highlighted) */}
            <motion.div 
                className='rounded-lg bg-[rgb(247,165,130)] flex flex-col p-8 justify-center items-start space-y-4 h-[202px] w-full max-w-[364px] shadow-lg relative'
                variants={cardVariants}
                whileHover="hover"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ 
                    delay: 0.2,
                    type: "spring", 
                    stiffness: 300 
                }}
            >
                <motion.div 
                    className='text-white text-[37.5px]'
                    variants={iconVariants}
                >
                    <FaMapLocation />
                </motion.div>
                <div className='text-white'>
                    <h1 className='font-bold text-2xl mb-3'>Our Locations</h1>
                    <p className='text-white'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                </div>
                <motion.div 
                    className="absolute -top-3 -right-3 bg-white text-[rgb(247,165,130)] rounded-full w-8 h-8 flex items-center justify-center shadow-md"
                    animate={{ 
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    !
                </motion.div>
            </motion.div>

            {/* Contact Us Card */}
            <motion.div 
                className='rounded-lg bg-[rgb(7,51,47)] flex flex-col p-8 justify-center items-start space-y-4 h-[202px] w-full max-w-[364px] shadow-lg'
                variants={cardVariants}
                whileHover="hover"
            >
                <motion.div 
                    className='text-white text-[37.5px]'
                    variants={iconVariants}
                >
                    <FaPhone />
                </motion.div>
                <div className='text-white'>
                    <h1 className='font-bold text-2xl mb-3'>Contact Us</h1>
                    <p className='text-slate-300'>
                        +88 01750 00 00 00 <br /> 
                        +88 01750 00 00 00
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Opening;