import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, User, StarIcon } from 'lucide-react';

// First Testimonial Component: Clean Professional Slider
function Feedback() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        {
            quote: "Their innovative approach revolutionized our digital strategy, delivering results that exceeded our highest expectations.",
            author: "Emily Rodriguez",
            title: "Chief Digital Officer",
            company: "InnovateTech Solutions",
            rating: 5
        },
        {
            quote: "A transformative partnership that brought cutting-edge solutions and unparalleled expertise to our organization.",
            author: "David Kim",
            title: "Head of Strategic Partnerships",
            company: "Global Innovations Inc.",
            rating: 5
        }
    ];

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <StarIcon key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />
        ));
    };

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Client Success Stories
                </h2>
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="bg-gray-50 rounded-xl p-8 shadow-lg"
                        >
                            <div className="flex justify-center mb-6">
                                {renderStars(testimonials[currentTestimonial].rating)}
                            </div>
                            <p className="text-xl italic text-gray-700 mb-6 max-w-2xl mx-auto">
                                "{testimonials[currentTestimonial].quote}"
                            </p>
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {testimonials[currentTestimonial].author}
                                </h3>
                                <p className="text-blue-600">
                                    {testimonials[currentTestimonial].title}
                                </p>
                                <p className="text-gray-500">
                                    {testimonials[currentTestimonial].company}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8 space-x-4">
                        <button 
                            onClick={handlePrev}
                            className="bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition"
                        >
                            <ArrowLeft />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="bg-gray-100 text-gray-600 p-3 rounded-full hover:bg-gray-200 transition"
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;