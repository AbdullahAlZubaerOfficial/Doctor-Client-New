import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Details = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Locations', 'Reviews', 'Business Hours'];

  // Animation variants
  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const tabButtonVariants = {
    hover: { 
      scale: 1.05,
      color: "#3b82f6"
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            variants={tabButtonVariants}
            whileHover="hover"
            whileTap="tap"
            className={`px-4 py-2 font-medium text-sm md:text-base relative ${activeTab === tab ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                layoutId="tabUnderline"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {activeTab === 'Overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                  {/* About Me Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
                    <motion.p 
                      className="text-gray-600"
                      variants={itemVariants}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </motion.p>
                  </motion.div>

                  {/* Education Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                    <div className="space-y-4">
                      {educationData.map((edu, i) => (
                        <motion.div 
                          key={i}
                          custom={i}
                          variants={itemVariants}
                          className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 rounded-r transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <h3 className="font-semibold text-gray-700">{edu.institution}</h3>
                          <p className="text-gray-600">{edu.degree} <span className="text-gray-500">{edu.period}</span></p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Work Experience Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Work & Experience</h2>
                    <div className="space-y-4">
                      {experienceData.map((exp, i) => (
                        <motion.div 
                          key={i}
                          custom={i + educationData.length}
                          variants={itemVariants}
                          className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 rounded-r transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <h3 className="font-semibold text-gray-700">{exp.company}</h3>
                          <p className="text-gray-600">{exp.period} <span className="text-gray-500">({exp.duration})</span></p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Services Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service, i) => (
                        <motion.div 
                          key={service}
                          custom={i + educationData.length + experienceData.length}
                          variants={itemVariants}
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                          />
                          <span className="text-gray-700">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Awards Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Awards</h2>
                    <div className="space-y-6">
                      {awardsData.map((award, i) => (
                        <motion.div 
                          key={i}
                          custom={i}
                          variants={itemVariants}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          whileHover={{ y: -3 }}
                        >
                          <h3 className="font-semibold text-gray-700">{award.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{award.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Specializations Section */}
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Specializations</h2>
                    <div className="flex flex-wrap gap-2">
                      {specializations.map((spec, i) => (
                        <motion.span 
                          key={spec}
                          custom={i}
                          variants={itemVariants}
                          className="px-3 py-1 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-800 text-sm rounded-full shadow-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {activeTab === 'Locations' && (
              <motion.div 
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-sm"
                variants={tabContentVariants}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Locations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {locations.map((location, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={itemVariants}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ y: -3 }}
                    >
                      <h4 className="font-medium text-gray-800">{location.name}</h4>
                      <p className="text-gray-600 mt-1">{location.address}</p>
                      <p className="text-gray-500 text-sm mt-2">{location.hours}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Reviews' && (
              <motion.div 
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-sm"
                variants={tabContentVariants}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Patient Reviews</h3>
                <div className="space-y-6">
                  {reviews.map((review, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={itemVariants}
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                          <h4 className="font-medium">{review.name}</h4>
                          <div className="flex text-yellow-400 text-sm">
                            {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                      <p className="text-gray-400 text-sm mt-2">{review.date}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Business Hours' && (
              <motion.div 
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg shadow-sm"
                variants={tabContentVariants}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Business Hours</h3>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Day</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hours</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {businessHours.map((day, i) => (
                        <motion.tr
                          key={day.day}
                          custom={i}
                          variants={itemVariants}
                          whileHover={{ backgroundColor: "#f8fafc" }}
                        >
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{day.day}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{day.hours}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// Data for the component
const educationData = [
  {
    institution: "American Dental Medical University",
    degree: "BDS",
    period: "1998 - 2003"
  },
  {
    institution: "American Dental Medical University",
    degree: "MDS",
    period: "2003 - 2005"
  }
];

const experienceData = [
  {
    company: "Glowing Smiles Family Dental Clinic",
    period: "2010 - Present",
    duration: "5 years"
  },
  {
    company: "Comfort Care Dental Clinic",
    period: "2007 - 2010",
    duration: "3 years"
  },
  {
    company: "Dream Smile Dental Practice",
    period: "2005 - 2007",
    duration: "2 years"
  }
];

const services = [
  'Tooth cleaning',
  'Root Canal Therapy',
  'Implants',
  'Composite Bonding',
  'Fissure Sealants'
];

const awardsData = [
  {
    title: "July 2019 - Humanitarian Award",
    description: "Recognized for outstanding volunteer work in underserved communities."
  },
  {
    title: "March 2011 - Certificate for International Volunteer Service",
    description: "Awarded for dental mission work in developing countries."
  },
  {
    title: "May 2008 - The Dental Professional of The Year Award",
    description: "Recognized as top dental professional by the National Dental Association."
  }
];

const specializations = [
  'Children Care',
  'Dental Care',
  'Oral and Maxillofacial Surgery',
  'Orthodontist',
  'Periodontist',
  'Prosthodontics'
];

const locations = [
  {
    name: "Main Clinic",
    address: "123 Dental Street, Health District, Cityville 10001",
    hours: "Monday-Friday: 8:00 AM - 6:00 PM"
  },
  {
    name: "Downtown Office",
    address: "456 Smile Avenue, Business District, Cityville 10002",
    hours: "Tuesday-Thursday: 9:00 AM - 5:00 PM"
  }
];

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "Dr. Ruby was incredibly professional and made me feel at ease during my procedure. The staff was wonderful too!",
    date: "2 weeks ago"
  },
  {
    name: "Michael Chen",
    rating: 4,
    comment: "Great experience overall. The office is modern and clean. Wait time was a bit long but worth it for the quality care.",
    date: "1 month ago"
  },
  {
    name: "Emily Rodriguez",
    rating: 5,
    comment: "I've been going to Dr. Ruby for years and wouldn't trust anyone else with my dental care. Highly recommend!",
    date: "3 months ago"
  }
];

const businessHours = [
  { day: "Monday", hours: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:00 PM" },
  { day: "Friday", hours: "8:00 AM - 3:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

export default Details;