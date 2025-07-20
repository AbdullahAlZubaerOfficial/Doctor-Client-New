import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const footerLinks = [
    {
      title: "Services",
      links: ["Branding", "Design", "Marketing", "Advertisement"]
    },
    {
      title: "Company",
      links: ["About us", "Contact", "Jobs", "Press kit"]
    },
    {
      title: "Legal",
      links: ["Terms of use", "Privacy policy", "Cookie policy"]
    }
  ];

  return (
    <motion.div 
      className="w-full bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="w-[410px] sm:w-full lg:max-w-screen-xl mx-auto">
        <motion.footer 
          className="footer sm:footer-horizontal p-10 md:p-16 w-full"
          variants={containerVariants}
        >
          <motion.aside 
            className="max-w-xs"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current text-[#f7a582]"
              >
                <path d="M22.672 15.226..." />
              </svg>
              <h2 className="text-2xl font-bold">DocHouse</h2>
            </motion.div>
            <p className="text-gray-600">
              Providing reliable healthcare services since 2024
              <br />
              Your health is our top priority
            </p>
          </motion.aside>

          {footerLinks.map((section, index) => (
            <motion.nav 
              key={index}
              variants={itemVariants}
              custom={index + 1}
            >
              <h6 className="footer-title text-gray-800">{section.title}</h6>
              {section.links.map((link, linkIndex) => (
                <motion.a 
                  key={linkIndex}
                  className="link link-hover text-gray-500 hover:text-[#f7a582] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.nav>
          ))}
        </motion.footer>

        <motion.footer 
          className="footer footer-center bg-gray-100 text-gray-600 p-6 w-full border-t border-gray-200"
          variants={itemVariants}
        >
          <aside>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-1"
            >
              <span>Copyright © {new Date().getFullYear()} - All rights reserved by</span>
              <span className="text-[#f7a582] font-medium">DocHouse Medical</span>
            </motion.p>
          </aside>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default Footer;