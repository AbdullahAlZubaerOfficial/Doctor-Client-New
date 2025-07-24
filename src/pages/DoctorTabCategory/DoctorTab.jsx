import React from 'react';
import DoctorCardd from '../../Components/DoctorCard/DoctorCardd';
import { motion } from 'framer-motion';

const DoctorTab = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }
  };

  if (!items || items.length === 0) {
    return <p className="text-center text-lg text-gray-500">No doctors available in this category 🙁</p>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map(item => (
        <DoctorCardd key={item._id} item={item} />
      ))}
    </motion.div>
  );
};

export default DoctorTab;
