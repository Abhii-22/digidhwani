import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart, Globe, TrendingUp, Mail, Target, Smartphone, Code } from "lucide-react";

const ServicesComponent = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-amber-500" />,
      title: "Search Engine Optimization",
      description:
        "Improve your website's visibility in search engine results with our comprehensive SEO strategies. We optimize your site structure, content, and backlink profile to drive organic traffic and increase rankings.",
      features: [
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Technical SEO Audits",
        "Link Building & Authority Development",
        "Local SEO for Business"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Social Media Marketing",
      description:
        "Build your brand presence and engage with your audience through strategic social media marketing. We create and manage campaigns that drive engagement, increase followers, and generate leads.",
      features: [
        "Platform Strategy & Selection",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Performance Analytics"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Content Marketing",
      description:
        "Attract and convert your target audience with valuable, relevant content. Our content marketing strategies help establish your brand as an industry authority while driving traffic and conversions.",
      features: [
        "Content Strategy Development",
        "Blog & Article Creation",
        "Infographics & Visual Content",
        "eBooks & Whitepapers",
        "Content Distribution"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-purple-500" />,
      title: "Pay-Per-Click Advertising",
      description:
        "Drive immediate traffic and conversions with targeted PPC campaigns. We create and manage ads that reach your ideal customers at the right time, maximizing your ROI.",
      features: [
        "Google Ads Management",
        "Bing Ads Campaigns",
        "Display & Remarketing",
        "Shopping Campaigns",
        "Conversion Tracking & Optimization"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-500" />,
      title: "Analytics & Reporting",
      description:
        "Gain valuable insights into your digital marketing performance with comprehensive analytics and reporting. We track key metrics and provide actionable recommendations for improvement.",
      features: [
        "Custom Dashboard Setup",
        "Performance Tracking",
        "Conversion Analysis",
        "Competitor Benchmarking",
        "Monthly Performance Reports"
      ]
    },
    {
      icon: <Mail className="w-12 h-12 text-red-500" />,
      title: "Email Marketing",
      description:
        "Nurture leads and drive conversions with targeted email campaigns. We design, create, and optimize email marketing strategies that engage your audience and drive results.",
      features: [
        "Email Strategy Development",
        "Newsletter Creation",
        "Automated Email Sequences",
        "A/B Testing",
        "Performance Optimization"
      ]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Mobile Marketing",
      description:
        "Reach customers on their mobile devices with targeted marketing strategies. We help you connect with your audience through SMS, apps, and mobile-optimized content.",
      features: [
        "Mobile SEO",
        "App Store Optimization",
        "SMS Marketing",
        "Mobile Ad Campaigns",
        "Location-Based Marketing"
      ]
    },
    {
      icon: <Code className="w-12 h-12 text-cyan-500" />,
      title: "Web Development & Design",
      description:
        "Create a stunning, conversion-focused website that represents your brand. Our web development and design services ensure your site is visually appealing, user-friendly, and optimized for performance.",
      features: [
        "Responsive Website Design",
        "UX/UI Optimization",
        "Landing Page Creation",
        "Website Speed Optimization",
        "Conversion Rate Optimization"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Digital Marketing Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow online and reach your target audience effectively.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-amber-500/30 group"
            >
              <div className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gray-700/50 rounded-full group-hover:bg-gray-700 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-amber-400 mb-4">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-700/50 p-4 text-center">
                <button className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
