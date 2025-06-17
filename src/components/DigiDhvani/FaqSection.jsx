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
      question: "What is digital marketing and why is it important?",
      answer:
        "Digital marketing encompasses all marketing efforts that use electronic devices or the internet. It includes channels like search engines, social media, email, and websites to connect with current and prospective customers. It's important because it allows businesses to reach a larger audience than traditional marketing, target specific demographics, and measure success accurately in real-time."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline depends on various factors including your website's current state, competition in your industry, and the aggressiveness of your SEO strategy. While some improvements may be visible sooner, sustainable rankings and traffic growth require consistent effort over time."
    },
    {
      question: "What social media platforms should my business be on?",
      answer:
        "The right social media platforms for your business depend on your target audience, industry, and marketing goals. Rather than trying to maintain a presence on every platform, it's more effective to focus on the ones where your audience is most active. We can help you identify the most relevant platforms for your business and develop strategies to engage effectively with your audience."
    },
    {
      question: "How much should I budget for digital marketing?",
      answer:
        "Digital marketing budgets vary widely depending on your business size, goals, industry, and competition. As a general guideline, businesses typically allocate 7-10% of their revenue to marketing. We work with clients to develop customized strategies that align with their budget constraints while maximizing ROI. Our services are scalable and can be adjusted as your business grows."
    },
    {
      question: "Do I need a new website to start digital marketing?",
      answer:
        "Not necessarily. While having a modern, mobile-friendly website is important for digital marketing success, we can often work with your existing website and recommend improvements over time. We'll evaluate your current website's performance and suggest updates that will enhance user experience and conversion rates while implementing other digital marketing strategies."
    },
    // {
    //   question: "How do you measure the success of digital marketing campaigns?",
    //   answer:
    //     "We measure success through various metrics aligned with your business goals, including website traffic, conversion rates, engagement metrics, lead generation, and ultimately, ROI. We use advanced analytics tools to track performance and provide regular reports with actionable insights. Our approach focuses on data-driven decision making to continuously optimize your campaigns."
    // },
    // {
    //   question: "What makes DigiDhvani different from other digital marketing agencies?",
    //   answer:
    //     "DigiDhvani stands out through our personalized approach, transparent reporting, and focus on measurable results. We don't believe in one-size-fits-all solutions; instead, we develop customized strategies based on your unique business needs and goals. Our team stays current with the latest digital marketing trends and technologies to ensure your business maintains a competitive edge."
    // },
    // {
    //   question: "Can digital marketing work for my small business?",
    //   answer:
    //     "Absolutely! Digital marketing is particularly valuable for small businesses because it provides cost-effective ways to reach targeted audiences. Unlike traditional marketing, digital strategies can be scaled according to your budget and allow you to compete with larger companies. We specialize in helping small businesses develop effective digital marketing strategies that maximize their resources."
    // }
  ];

  return (
    <div className="bg-white py-20"> {/* Changed background color to white */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our digital marketing services and how we can help your business grow online.
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
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
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
                <div className="bg-gray-100 border border-gray-300 p-6 rounded-b-lg mt-1">
                  <p className="text-gray-700">{faq.answer}</p>
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
          <p className="text-xl text-gray-700 mb-8">
            Still have questions? We're here to help!
          </p>
          <a
            href="/digidhvani/contact"
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
