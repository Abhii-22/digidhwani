import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, User } from 'lucide-react';

function TestimonialsSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            quote: "Medini Technologies transformed our business operations with their innovative solutions. Their team's expertise and dedication exceeded our expectations.",
            author: "Sarah Johnson",
            title: "CTO, Global Enterprises",
            image: "/api/placeholder/120/120",
            company: "Global Enterprises"
        },
        {
            quote: "Working with Medini has been a game-changer for our healthcare system. Their solutions have improved patient care and operational efficiency.",
            author: "Dr. Michael Chen",
            title: "Director of IT, Metro Health",
            image: "/api/placeholder/120/120",
            company: "Metro Health"
        },
        {
            quote: "The cloud migration project delivered by Medini was flawless. Their attention to detail and technical expertise is unmatched in the industry.",
            author: "Robert Williams",
            title: "VP of Engineering, TechFin Solutions",
            image: "/api/placeholder/120/120",
            company: "TechFin Solutions"
        }
    ];

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative min-h-[600px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center overflow-hidden">
            {/* Decorative Blurred Circles */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 dark:bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-30 blur-3xl"></div>

            <div className="container max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                    >
                        What Our Clients Says
                    </motion.h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Hear directly from industry leaders who have experienced transformative solutions with Medini Technologies.
                    </p>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={currentTestimonial}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-10 relative overflow-hidden"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-4 left-4 text-blue-100 dark:text-slate-700 w-24 h-24 z-0" />

                            <div className="relative z-10">
                                <p className="text-2xl italic text-gray-800 dark:text-white mb-8 text-center relative z-10">
                                    "{testimonials[currentTestimonial].quote}"
                                </p>

                                <div className="flex items-center justify-center space-x-6 mt-8">
                                    {/* <img 
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].author}
                                        className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-700 shadow-lg object-cover"
                                    /> */}
                                    <User />
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {testimonials[currentTestimonial].author}
                                        </h4>
                                        <p className="text-blue-600 dark:text-blue-400">
                                            {testimonials[currentTestimonial].title}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {testimonials[currentTestimonial].company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <button 
                            onClick={handlePrev}
                            className="bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 p-3 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-slate-600 transition-all"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 p-3 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-slate-600 transition-all"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-4 space-x-2">
                        {testimonials.map((_, index) => (
                            <div 
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    currentTestimonial === index 
                                        ? 'bg-blue-600 dark:bg-blue-400 w-6' 
                                        : 'bg-gray-300 dark:bg-slate-600'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;