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
      question: "What services does BuilddSpace offer?",
      answer:
        "BuilddSpace offers a comprehensive range of architectural and construction services including architectural design, interior design, construction management, renovation services, sustainable design, project planning, collaborative design, and building inspection & analysis. Our integrated approach ensures seamless execution from concept to completion."
    },
    {
      question: "How long does a typical construction project take?",
      answer:
        "The timeline for construction projects varies significantly based on scope, complexity, and scale. Small renovation projects might take 2-3 months, while larger commercial or residential projects can take 6-18 months or more. During our initial consultation, we'll provide a detailed timeline specific to your project requirements."
    },
    {
      question: "How do you ensure projects stay within budget?",
      answer:
        "Budget management is a core aspect of our process. We implement several strategies including detailed initial cost estimation, regular budget reviews, value engineering when necessary, transparent communication about potential cost impacts, and a proactive approach to identifying and addressing potential issues before they affect the budget."
    },
    {
      question: "Do you handle all necessary permits and approvals?",
      answer:
        "Yes, we manage the entire permitting process as part of our services. This includes preparing and submitting all required documentation, coordinating with local authorities, addressing any feedback or requirements from review boards, and ensuring all regulatory compliance is met before and during construction."
    },
    {
      question: "What is your approach to sustainable design?",
      answer:
        "Our sustainable design approach integrates environmental responsibility throughout the project lifecycle. We focus on energy efficiency, sustainable material selection, water conservation, waste reduction, indoor air quality, and site optimization. We can also pursue various green building certifications based on your sustainability goals."
    },
    {
      question: "How do you handle changes during the construction process?",
      answer:
        "We manage changes through a structured change order process that ensures transparency and control. Any proposed changes are documented, priced, and presented for approval before implementation. Our proactive planning minimizes the need for changes, but when they occur, we ensure they're handled efficiently with minimal disruption."
    },
    {
      question: "What makes BuilddSpace different from other architectural firms?",
      answer:
        "BuilddSpace distinguishes itself through our integrated design-build approach, emphasis on client collaboration, innovative design solutions, commitment to sustainability, and attention to detail. We combine creative vision with practical execution to deliver spaces that are not only beautiful but also functional and aligned with our clients' needs and values."
    },
    {
      question: "Do you work on residential, commercial, or both types of projects?",
      answer:
        "We have extensive experience with both residential and commercial projects. Our portfolio includes single-family homes, multi-family residences, office spaces, retail environments, hospitality venues, and mixed-use developments. Our diverse expertise allows us to apply best practices across project types while tailoring our approach to each client's specific requirements."
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
            Find answers to common questions about our architectural and construction services and how we bring your vision to life.
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
            href="/builddspace/contact"
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
