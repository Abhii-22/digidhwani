import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from "lucide-react"; // Import necessary icons

const BimContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully. We'll contact you shortly to discuss your project.",
    });

    // Reset form after successful submission
    if (formStatus.success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    }
  };

  return (
    <section className="py-20 bg-white"> {/* Set background color to white */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <div className="mb-12">
                <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-black">
                  Contact information
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email Us",
                    content: "connect@medini.in",
                    link: "mailto:connect@medini.in",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Call Us",
                    content: "+91 9900081006 ",
                    link: "tel:9900081006 ",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Visit Our Company",
                    content: "No. 2943/E,3rd Floor, 40, Service Rd, opposite Shri Maruthi Mandira, Hosahalli Extension, Vijayanagar, Bengaluru, Karnataka 560040",
                    link: "https://maps.google.com",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Studio hours */}
              <div className="mt-12 bg-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-amber-600" />
                  Studio Hours
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>9:00 AM - 8:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100"
            >
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
                >
                  <div className="flex items-center">
                    {formStatus.success ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Select Project Type</option>
                      <option value="residential-interior">Residential Interior</option>
                      <option value="commercial-interior">Commercial Interior</option>
                      <option value="exterior-design">Exterior Design</option>
                      <option value="bim-modeling">BIM Modeling</option>
                      <option value="3d-visualization">3D Visualization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell us about your project, goals, timeline, and budget..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Prefer a quick chat? Call us at +1234567890
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
  ];

  return (
    <div className="bg-white py-20"> {/* Set background color to white */}
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

        {/* Add the Contact Section */}
        <BimContactSection />
      </div>
    </div>
  );
};

export default FaqSection;
