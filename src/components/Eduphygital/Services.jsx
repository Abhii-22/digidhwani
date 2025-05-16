import React from "react";
import { motion } from "framer-motion";
import { Monitor, BookOpen, Users, Lightbulb, Compass, Laptop, Video, BarChart } from "lucide-react";

const ServicesComponent = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-amber-500" />,
      title: "Digital Learning Solutions",
      description:
        "Comprehensive digital learning platforms and tools designed to enhance educational experiences. Our solutions integrate seamlessly with existing curricula and provide engaging, interactive learning opportunities.",
      features: [
        "Learning Management Systems",
        "Interactive Digital Content",
        "Virtual Classrooms",
        "Gamified Learning Experiences",
        "Adaptive Learning Technologies"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Hybrid Classroom Design",
      description:
        "Create effective learning environments that seamlessly blend physical and digital elements. Our hybrid classroom designs optimize space, technology, and pedagogy for maximum learning outcomes.",
      features: [
        "Physical Space Optimization",
        "Technology Integration",
        "Collaborative Learning Zones",
        "Flexible Furniture Solutions",
        "Audiovisual System Design"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Educator Training Programs",
      description:
        "Empower educators with the skills and knowledge needed to excel in modern educational environments. Our training programs focus on practical applications of technology and innovative teaching methodologies.",
      features: [
        "Digital Literacy Development",
        "Blended Learning Methodologies",
        "Technology Integration Workshops",
        "Student Engagement Strategies",
        "Assessment in Digital Environments"
      ]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-500" />,
      title: "Learning Experience Design",
      description:
        "Create engaging and effective learning journeys that motivate and inspire students. Our learning experience design focuses on student-centered approaches that enhance comprehension and retention.",
      features: [
        "Curriculum Mapping & Design",
        "Interactive Content Creation",
        "Engagement Strategy Development",
        "Accessibility Optimization",
        "Multimodal Learning Paths"
      ]
    },
    {
      icon: <Compass className="w-12 h-12 text-indigo-500" />,
      title: "Education Transformation Consulting",
      description:
        "Strategic guidance for educational institutions navigating digital transformation. We help schools, colleges, and universities develop comprehensive plans for integrating technology into their educational mission.",
      features: [
        "Digital Strategy Development",
        "Change Management",
        "Technology Infrastructure Planning",
        "Staff Development Programs",
        "ROI Analysis & Measurement"
      ]
    },
    {
      icon: <Laptop className="w-12 h-12 text-red-500" />,
      title: "Educational Technology Integration",
      description:
        "Seamlessly integrate educational technology into existing learning environments. We assess needs, recommend solutions, and implement technologies that enhance teaching and learning.",
      features: [
        "Technology Needs Assessment",
        "Solution Selection & Implementation",
        "System Integration",
        "User Training & Support",
        "Ongoing Maintenance Planning"
      ]
    },
    {
      icon: <Video className="w-12 h-12 text-yellow-500" />,
      title: "Multimedia Content Development",
      description:
        "Create engaging multimedia educational content that captures attention and facilitates learning. Our content development services include video production, interactive modules, and digital resources.",
      features: [
        "Educational Video Production",
        "Interactive Module Creation",
        "Virtual Reality Learning Experiences",
        "Digital Textbooks & Resources",
        "Animated Learning Materials"
      ]
    },
    {
      icon: <BarChart className="w-12 h-12 text-cyan-500" />,
      title: "Learning Analytics & Assessment",
      description:
        "Leverage data to understand and improve educational outcomes. Our learning analytics solutions provide insights into student performance, engagement, and progress.",
      features: [
        "Learning Data Collection Systems",
        "Performance Dashboard Development",
        "Progress Tracking Tools",
        "Assessment Design & Implementation",
        "Data-Driven Instructional Planning"
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
          <h2 className="text-4xl font-bold text-white mb-6">Our Educational Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive educational solutions that bridge the gap between physical and digital learning environments.
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
