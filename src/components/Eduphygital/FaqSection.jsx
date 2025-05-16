import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is EDUPHYGITAL?",
      answer:
        "EDUPHYGITAL is our innovative educational service that bridges the gap between physical and digital learning environments. We provide comprehensive solutions that help educational institutions restructure their approach to teaching and learning by integrating technology with traditional classroom methods, creating more engaging, effective, and flexible educational experiences."
    },
    {
      question: "How can hybrid classroom design benefit my institution?",
      answer:
        "Hybrid classroom design creates flexible learning environments that support both in-person and remote learning simultaneously. Benefits include increased student engagement, improved accessibility for diverse learners, more efficient use of physical space, enhanced collaboration opportunities, and greater resilience against disruptions to traditional learning models. Our designs optimize both physical spaces and digital technologies to create seamless learning experiences."
    },
    {
      question: "What training do you provide for educators?",
      answer:
        "Our educator training programs are comprehensive and practical, focusing on building the skills needed to excel in modern educational environments. Training includes digital literacy development, blended learning methodologies, technology integration, student engagement strategies, and assessment in digital environments. All programs are customizable to your institution's specific needs and can be delivered in-person, online, or in a hybrid format."
    },
    {
      question: "How do you approach learning experience design?",
      answer:
        "Our learning experience design process is student-centered and outcome-focused. We begin by understanding your educational goals and student needs, then design engaging learning journeys that incorporate appropriate technologies, pedagogical approaches, and assessment strategies. We emphasize creating multimodal learning paths that accommodate different learning styles and ensure accessibility for all students."
    },
    {
      question: "Can you help with digital transformation for an entire school or district?",
      answer:
        "Yes, our Education Transformation Consulting service is designed specifically for comprehensive institutional change. We work with schools, districts, colleges, and universities to develop strategic plans for digital transformation that address infrastructure, professional development, curriculum design, and change management. Our approach ensures alignment with your educational mission and values while modernizing your approach to teaching and learning."
    },
    {
      question: "What technologies do you typically implement in educational settings?",
      answer:
        "We work with a wide range of educational technologies based on your specific needs and goals. These may include learning management systems, interactive displays, virtual/augmented reality tools, student response systems, collaborative platforms, content creation tools, and learning analytics solutions. Rather than promoting specific products, we focus on finding the right technological solutions that align with your pedagogical approach and institutional capabilities."
    },
    {
      question: "How do you measure the success of your educational solutions?",
      answer:
        "We establish clear metrics for success at the beginning of each project, which may include student engagement levels, learning outcomes, teacher satisfaction, technology adoption rates, and return on investment. Our learning analytics solutions provide ongoing data about educational effectiveness, allowing for continuous improvement. We believe in evidence-based approaches and work with institutions to develop appropriate assessment frameworks."
    },
    {
      question: "Do you work with all types of educational institutions?",
      answer:
        "Yes, we work with a wide range of educational institutions including K-12 schools, colleges, universities, corporate training departments, and non-traditional educational organizations. Our solutions are scalable and customizable to meet the specific needs of different educational contexts, from small independent schools to large university systems or corporate learning environments."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our educational services and how we can help transform your learning environment.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-amber-500 text-white"
                    : "bg-gray-800/50 text-white hover:bg-gray-700/50"
                }`}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="bg-gray-800/30 border border-gray-700 p-6 rounded-b-lg mt-1">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-8">
            Still have questions? We're here to help!
          </p>
          <a
            href="/eduphygital/contact"
            className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            Contact Us
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FaqSection;
