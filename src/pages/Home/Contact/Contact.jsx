import React from 'react';
import { motion } from 'framer-motion';
import { LuMapPin } from 'react-icons/lu';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

const Contact = () => {
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

  const formItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="hero text-white rounded-xl bg-[rgb(7,51,47)] px-4 py-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="hero-content flex flex-col lg:flex-row w-full max-w-7xl mx-auto">
        {/* Left side content */}
        <motion.div 
          className="lg:w-1/2 text-left lg:p-8 md:p-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold leading-[57px] mb-4"
            variants={itemVariants}
          >
            Contact <span className="text-[#f7a582]">With Us!</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white text-opacity-70 mb-8"
            variants={itemVariants}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-4 mb-4"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-[#f7a582] rounded-full">
              <MdOutlineWifiCalling3 className="text-xl" />
            </div>
            <p className="text-lg">+88 01750 14 14 14</p>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            <div className="p-3 bg-[#f7a582] rounded-full">
              <LuMapPin className="text-xl" />
            </div>
            <p className="text-lg">Dhanmondi, Dhaka, Bangladesh</p>
          </motion.div>
        </motion.div>

        {/* Right side form */}
        <motion.div 
          className="lg:w-1/2 w-full lg:mt-0"
          variants={containerVariants}
        >
          <motion.div 
            className="card w-full bg-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="card-body p-6 md:p-8"
              variants={containerVariants}
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Name", type: "text", placeholder: "Enter your name" },
                  { label: "Email", type: "email", placeholder: "Enter your email" },
                  { label: "Mobile Number", type: "text", placeholder: "Enter mobile number" },
                  { label: "Doctor Name", type: "text", placeholder: "Enter doctor name" },
                  { label: "Date", type: "date" },
                  { label: "Time", type: "time" }
                ].map((field, index) => (
                  <motion.div 
                    key={index}
                    variants={formItemVariants}
                    custom={index}
                  >
                    <label className="label text-white">{field.label}</label>
                    <motion.input
                      type={field.type}
                      className="input w-full bg-[rgba(255,255,255,0.1)] rounded-xl border border-[rgba(255,255,255,0.2)] focus:border-[#f7a582] focus:ring-1 focus:ring-[#f7a582]"
                      placeholder={field.placeholder}
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "#f7a582"
                      }}
                    />
                  </motion.div>
                ))}
                
                <motion.div 
                  className="md:col-span-2"
                  variants={formItemVariants}
                  custom={6}
                >
                  <label className="label text-white">Message</label>
                  <motion.textarea
                    className="textarea w-full bg-[rgba(255,255,255,0.1)] rounded-xl border border-[rgba(255,255,255,0.2)] focus:border-[#f7a582] focus:ring-1 focus:ring-[#f7a582]"
                    placeholder="Type your message here..."
                    rows={4}
                    whileFocus={{ 
                      scale: 1.02,
                      borderColor: "#f7a582"
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="md:col-span-2"
                  variants={formItemVariants}
                  custom={7}
                >
                  <motion.button 
                    className="btn w-full mt-2 py-5 text-white font-bold text-lg rounded-xl bg-[#f7a582] hover:bg-[#e69572] border-none"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(247, 165, 130, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;