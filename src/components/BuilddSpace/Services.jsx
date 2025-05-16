import React from "react";
import { motion } from "framer-motion";
import { Building, Layers, Home, Ruler, Pencil, Clock, Users, Shield } from "lucide-react";

const ServicesComponent = () => {
  const services = [
    {
      icon: <Building className="w-12 h-12 text-amber-500" />,
      title: "Architectural Design",
      description:
        "Transform your vision into reality with our innovative architectural design services. We create functional, aesthetically pleasing spaces that meet your specific needs and exceed your expectations.",
      features: [
        "Conceptual Design Development",
        "3D Visualization & Rendering",
        "Construction Documentation",
        "Building Code Compliance",
        "Sustainable Design Solutions"
      ]
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-500" />,
      title: "Interior Design",
      description:
        "Create beautiful, functional interior spaces that reflect your style and enhance your daily life. Our interior design services focus on optimizing space, aesthetics, and functionality.",
      features: [
        "Space Planning & Layout",
        "Material & Finish Selection",
        "Furniture & Fixture Specification",
        "Lighting Design",
        "Color Scheme Development"
      ]
    },
    {
      icon: <Home className="w-12 h-12 text-green-500" />,
      title: "Construction Management",
      description:
        "Ensure your project is completed on time, within budget, and to the highest quality standards with our comprehensive construction management services.",
      features: [
        "Project Scheduling & Planning",
        "Budget Development & Control",
        "Quality Assurance",
        "Contractor Selection & Management",
        "Progress Monitoring & Reporting"
      ]
    },
    {
      icon: <Ruler className="w-12 h-12 text-purple-500" />,
      title: "Renovation Services",
      description:
        "Breathe new life into existing spaces with our renovation services. We specialize in transforming outdated or inefficient spaces into modern, functional environments.",
      features: [
        "Existing Condition Assessment",
        "Renovation Planning & Design",
        "Structural Modifications",
        "System Upgrades",
        "Historic Preservation"
      ]
    },
    {
      icon: <Pencil className="w-12 h-12 text-indigo-500" />,
      title: "Sustainable Design",
      description:
        "Create environmentally responsible buildings and spaces that minimize resource consumption and environmental impact while maximizing comfort and efficiency.",
      features: [
        "Energy-Efficient Design",
        "Sustainable Material Selection",
        "Water Conservation Strategies",
        "Indoor Air Quality Enhancement",
        "Green Building Certification"
      ]
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: "Project Planning",
      description:
        "Set your project up for success with comprehensive planning services that address all aspects of your building project before construction begins.",
      features: [
        "Feasibility Studies",
        "Site Analysis & Selection",
        "Programming & Space Requirements",
        "Regulatory Review",
        "Project Timeline Development"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: "Collaborative Design",
      description:
        "Engage in a collaborative design process that brings together stakeholders, designers, and builders to create spaces that truly meet your needs.",
      features: [
        "Stakeholder Workshops",
        "Design Charrettes",
        "User Experience Research",
        "Iterative Design Process",
        "Feedback Integration"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-cyan-500" />,
      title: "Building Inspection & Analysis",
      description:
        "Ensure the safety, compliance, and performance of your building with our thorough inspection and analysis services.",
      features: [
        "Structural Assessments",
        "Building Code Compliance",
        "Energy Performance Analysis",
        "Safety Inspections",
        "Maintenance Planning"
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
          <h2 className="text-4xl font-bold text-white mb-6">Our Design & Construction Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive architectural and construction solutions to bring your vision to life with precision and excellence.
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
