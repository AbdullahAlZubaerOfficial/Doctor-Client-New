import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { MdAttachMoney } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import doc4 from '../../assets/assets_frontend/doc4.png';
import doc5 from '../../assets/assets_frontend/doc5.png';
import doc6 from '../../assets/assets_frontend/doc6.png';
import { Link } from 'react-router-dom';

const DoctorCard = () => {
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
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        }
    };

    const doctors = [
        {
            id: 1,
            name: "Dr. Karyen Anderson",
            specialty: "BTP - Senior Physiotherapist",
            image: doc4,
            rating: 4,
            location: "Dhanmondi, Dhaka, Bangladesh",
            availability: "Available On Mon, 22 December",
            fee: "$15",
            bgClass: "bg-gray-200"
        },
        {
            id: 2,
            name: "Dr. Sarah Johnson",
            specialty: "MD - Cardiologist",
            image: doc5,
            rating: 5,
            location: "Gulshan, Dhaka, Bangladesh",
            availability: "Available On Tue, 23 December",
            fee: "$25",
            bgClass: "bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#111111]"
        },
        {
            id: 3,
            name: "Dr. Michael Chen",
            specialty: "PhD - Neurologist",
            image: doc6,
            rating: 4,
            location: "Banani, Dhaka, Bangladesh",
            availability: "Available On Wed, 24 December",
            fee: "$20",
            bgClass: "bg-gray-200"
        }
    ];

    return (
        <motion.section 
            className=" px-4 lg:py-12 sm:px-2 lg:px-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h1 
                className='text-4xl md:text-5xl font-bold text-center mb-6'
                variants={containerVariants}
            >
                Our <span className="text-[#f7a582]">Expert Doctors</span>
            </motion.h1>

            <motion.p 
                className='text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12'
                variants={containerVariants}
            >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </motion.p>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                variants={containerVariants}
            >
                {doctors.map((doctor, index) => (
                    <motion.div 
                        key={doctor.id}
                        className="card bg-white shadow-md rounded-xl overflow-hidden border border-gray-100"
                        variants={cardVariants}
                        whileHover="hover"
                        custom={index}
                    >
                        <motion.figure 
                            className="relative h-64 overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={doctor.image}
                                className={`w-full h-full object-cover rounded-t-xl ${doctor.bgClass}`}
                                alt={doctor.name}
                            />
                            <motion.div 
                                className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <MdAttachMoney className="text-[#f7a582] mr-1" />
                                <span className="font-medium">{doctor.fee}</span>
                            </motion.div>
                        </motion.figure>

                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl mb-1">{doctor.name}</h2>
                            <p className="text-gray-500 mb-4">{doctor.specialty}</p>

                            <div className="rating rating-sm mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <input 
                                        key={i}
                                        type="radio" 
                                        name={`rating-${doctor.id}`} 
                                        className="mask mask-star-2 bg-orange-400" 
                                        checked={i < doctor.rating}
                                        readOnly
                                    />
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <FiMapPin className="text-[#f7a582] text-xl mt-1" />
                                    <p className="text-gray-600">{doctor.location}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <SlCalender className="text-[#f7a582] text-xl mt-1" />
                                    <p className="text-gray-600">{doctor.availability}</p>
                                </div>
                            </div>

                            <motion.button 
                                className="btn mt-6 py-4 px-8 border-2 border-[#f7a582] text-[#f7a582] hover:bg-[#f7a582] hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/doctorDetails">View Profile</Link>
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default DoctorCard;