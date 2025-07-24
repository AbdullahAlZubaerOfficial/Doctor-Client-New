import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams, useNavigate } from 'react-router-dom';
import useMenu from '../../hooks/useMenu';
import DoctorTab from '../DoctorTabCategory/DoctorTab';

const AllDoctors = () => {
  const [menu, loading] = useMenu();
  const navigate = useNavigate();
  const categories = ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Gynecology', 'Ophthalmology'];
  const { category } = useParams();
  
  // Initialize tabIndex based on URL parameter
  const [tabIndex, setTabIndex] = useState(0);

  // Update tabIndex when category in URL changes
  useEffect(() => {
    if (category) {
      const index = categories.findIndex(cat => cat.toLowerCase() === category.toLowerCase());
      setTabIndex(index >= 0 ? index : 0);
    }
  }, [category]);

  const handleTabSelect = (index) => {
    setTabIndex(index);
    // Optional: Update URL when tab changes
    navigate(`/alldoctors/${categories[index].toLowerCase()}`);
  };

  const categorizedDoctors = categories.reduce((acc, cat) => {
    acc[cat] = menu.filter(item => item.category === cat);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }
  };

  if (loading) return <div className="text-center py-10 text-xl">Loading Doctors... 🩺⏳</div>;

  return (
    <motion.section
      className="px-4 lg:py-12 sm:px-2 lg:px-8 max-w-7xl mt-24 mx-auto"
      initial="hidden"
      animate="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h1 className='text-4xl md:text-5xl font-bold text-center mb-6' variants={containerVariants}>
        Our <span className="text-[#f7a582]">ALL Doctors</span> 👨‍⚕️👩‍⚕️
      </motion.h1>

      <motion.p className='text-gray-600 text-lg text-center max-w-3xl mx-auto mb-12' variants={containerVariants}>
        Find your desired specialist doctor and book an appointment anytime from anywhere 💻📅
      </motion.p>

      <Tabs selectedIndex={tabIndex} onSelect={handleTabSelect}>
        <TabList className="flex flex-wrap gap-4 my-8 justify-center">
          {categories.map((tabName, index) => (
            <Tab
              key={index}
              className="px-4 py-2 text-sm md:text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-yellow-100 hover:text-yellow-600 cursor-pointer transition-all duration-300"
              selectedClassName="bg-yellow-100 text-yellow-600 border-yellow-400"
            >
              {tabName}
            </Tab>
          ))}
        </TabList>

        {categories.map((category, idx) => (
          <TabPanel key={idx}>
            <DoctorTab items={categorizedDoctors[category]} />
          </TabPanel>
        ))}
      </Tabs>
    </motion.section>
  );
};

export default AllDoctors;