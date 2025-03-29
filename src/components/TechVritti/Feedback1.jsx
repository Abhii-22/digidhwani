import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, User, StarIcon } from 'lucide-react';

function Feedback() {
    const testimonials = [
        {
            quote: "Exceptional service that transformed our business processes with remarkable efficiency and innovation.",
            author: "Michael Thompson",
            title: "Operations Director",
            company: "NextGen Enterprises",
        },
        {
            quote: "A game-changing partnership that brought unparalleled technological insights to our team.",
            author: "Sarah Chen",
            title: "Chief Technology Officer",
            company: "Quantum Innovations",
        }
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        What Our Partners Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Insights from industry leaders who have experienced transformative solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                        >
                            <Quote className="text-blue-100 w-16 h-16 mb-4" />
                            <p className="text-lg italic text-gray-700 mb-6">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center space-x-4">
                                {/* <img 
                                    src={testimonial.image} 
                                    alt={testimonial.author} 
                                    className="w-16 h-16 rounded-full object-cover"
                                /> */}
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {testimonial.author}
                                    </h3>
                                    <p className="text-blue-600">{testimonial.title}</p>
                                    <p className="text-gray-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;