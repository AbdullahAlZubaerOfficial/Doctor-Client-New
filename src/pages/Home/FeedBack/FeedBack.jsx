import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FeedBack = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    
    // Animation variants
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

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.6 }
        },
        hover: {
            y: -15,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const testimonials = [
        {
            name: "Abdullah Rahman",
            role: "Web Designer",
            content: "The medical care I received was exceptional. The doctors were knowledgeable and took time to listen to my concerns. Their approach to patient care is truly remarkable.",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Abdullah Al Zubaer",
            role: "Product Designer",
            content: "I've never experienced such compassionate care before. The staff went above and beyond to make me comfortable during my entire treatment journey.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Zubaer Ahmed",
            role: "Marketing Manager",
            content: "Quick service and professional diagnosis. I was in and out with a comprehensive treatment plan in under an hour. Highly recommended!",
            img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
        },
        {
            name: "Sarah Johnson",
            role: "Software Engineer",
            content: "Outstanding experience from start to finish. The team was professional, caring, and extremely efficient in handling my health concerns.",
            img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth + 24; // width + gap
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(newIndex);
        }
    };

    const scrollToIndex = (index) => {
        if (scrollContainerRef.current) {
            const cardWidth = scrollContainerRef.current.children[0]?.offsetWidth + 24;
            scrollContainerRef.current.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <motion.section 
            className="py-16 px-4 sm:px-6 lg:px-8 max-w-9xl mx-auto bg-gradient-to-br from-gray-50 to-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            {/* Header Section */}
            <motion.div 
                className="text-center mb-16"
                variants={itemVariants}
            >
                <motion.h1 
                    className='text-gray-900 pb-4 text-4xl md:text-6xl font-bold'
                    variants={itemVariants}
                >
                    What Our <span className="text-[#f7a582]">Patients Say</span>
                </motion.h1>

                <motion.div 
                    className="w-24 h-1 bg-gradient-to-r from-[#f7a582] to-orange-400 mx-auto mb-6 rounded-full"
                    variants={itemVariants}
                />

                <motion.p 
                    className='text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed'
                    variants={itemVariants}
                >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis.
                </motion.p>
            </motion.div>

            {/* Testimonials Carousel */}
            <motion.div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-12 gap-6 scrollbar-hide snap-x snap-mandatory"
                variants={containerVariants}
                whileInView="visible"
                viewport={{ once: true }}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index}
                        className="flex-shrink-0 w-11/12 sm:w-96 lg:w-[420px] bg-white rounded-2xl shadow-lg p-8 snap-center border border-gray-100 relative overflow-hidden"
                        variants={cardVariants}
                        whileHover="hover"
                        initial="hidden"
                        animate="visible"
                        custom={index}
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f7a582]/10 to-orange-400/10 rounded-full -translate-y-16 translate-x-16" />
                        
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-6xl text-[#f7a582]/20 font-serif">"</div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            <motion.div 
                                className="flex items-center gap-5 mb-6"
                                whileHover={{ x: 5 }}
                            >
                                <div className="avatar">
                                    <div className="ring-2 ring-[#f7a582] ring-offset-2 w-16 h-16 rounded-full overflow-hidden">
                                        <img 
                                            src={testimonial.img} 
                                            alt={testimonial.name} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div>  
                                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{testimonial.role}</p>
                                </div>
                            </motion.div>
                            
                            <p className="text-gray-700 mb-8 text-lg leading-relaxed relative z-10">
                                {testimonial.content}
                            </p>
                            
                            <div className="flex justify-between items-center">
                                <div className="rating rating-md">
                                    {[...Array(5)].map((_, i) => (
                                        <input 
                                            key={i}
                                            type="radio" 
                                            name={`rating-${index}`} 
                                            className="mask mask-star-2 bg-[#f7a582]" 
                                            defaultChecked={i < 5}
                                        />
                                    ))}
                                </div>
                                <motion.button 
                                    className="text-[#f7a582] hover:text-white hover:bg-gradient-to-r from-[#f7a582] to-orange-400 px-6 py-3 rounded-xl border border-[#f7a582] transition-all duration-300 font-semibold text-sm"
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(247, 165, 130, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Read Full Story
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Custom Navigation Dots */}
            <motion.div 
                className="flex justify-center gap-3 mt-8"
                variants={itemVariants}
            >
                {testimonials.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                            index === activeIndex 
                                ? 'bg-gradient-to-r from-[#f7a582] to-orange-400 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => scrollToIndex(index)}
                        animate={{ 
                            scale: index === activeIndex ? 1.3 : 1
                        }}
                    />
                ))}
            </motion.div>

            {/* Scroll Hint */}
            <motion.div 
                className="text-center mt-12"
                variants={itemVariants}
            >
                <motion.p 
                    className="text-gray-500 text-sm flex items-center justify-center gap-2"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <span>Scroll for more testimonials</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        →
                    </motion.span>
                </motion.p>
            </motion.div>
        </motion.section>
    );
};

export default FeedBack;