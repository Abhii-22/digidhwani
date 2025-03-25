"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CloudCog, 
  ShieldCheck, 
  Workflow, 
  Zap, 
  Globe, 
  BarChart2 
} from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: <CloudCog className="w-16 h-16 text-blue-600" />,
      title: "MEDINI SCHOOL OF DESIGN",
      description: "Maximize the productivity of your knowledge with learning programs designed to meet industry requirements. Take live instructor-led classes online/offline, or take advantage of on-demand.",
      details: [
        "Architectural Engineering & Construction",
        "Manufacturing",
        "Media & Entertainment",
        "Sales",
        "Corporate"
      ],
      link: "http://medinischoolofdesign.com/",
      background: "from-blue-100 to-blue-200"
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-green-600" />,
      title: "BIM CONSTRUCT",
      description: "Support Architects, Engineers & Owners on process of building digital Models.  Increasing safety & Cost effective.",
      details: [
        "Autodesk Revit",
        "Manufacturing Design Software",
        "Building Construction Company",
      ],
      link: "https://bimconstruct.in/lander",
      background: "from-green-100 to-green-200"
    },
    {
      icon: <Workflow className="w-16 h-16 text-purple-600" />,
      title: "TEAMECH",
      description: "From design to manufacturing, any need of the market to the market",
      details: [
        "AI-powered workflow optimization",
        "Enterprise application integration",
        "Process automation",
        "Digital strategy consulting"
      ],
      link: "http://medinischoolofdesign.com/",
      background: "from-purple-100 to-purple-200"
    },
    {
      icon: <ShieldCheck className="w-16 h-16 text-green-600" />,
      title: "SOFTWARE SOLUTIONS",
      description: "Looking into the need and supporting for the right product/software.",
      details: [
        "Autodesk Revit",
        "Manufacturing Design Software",
        "Building Construction Company",
      ],
      link: "https://bimconstruct.in/lander",
      background: "from-green-100 to-green-200"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Enterprise-Grade Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformative solutions designed to accelerate innovation, enhance operational efficiency, and drive strategic growth for global enterprises.
          </p>
        </motion.div>

        {/* Services Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Service Selection Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <div 
                key={index}
                onMouseOver={() => setActiveService(index)}
                className={`
                  cursor-pointer p-6 rounded-2xl transition-all duration-300
                  ${activeService === index 
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-l-4 border-blue-600' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 border-l-4 border-transparent'}
                `}
              >
                <div className="flex items-center space-x-6">
                  {service.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Service Details Column */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className={`
                p-8 rounded-3xl shadow-2xl 
                bg-gradient-to-br ${services[activeService].background}
                dark:from-gray-800 dark:to-gray-700
              `}
            >
              <div className="mb-6">
                {services[activeService].icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
                {services[activeService].description}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Key Capabilities:
                </h4>
                {services[activeService].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                <Link
                to={services[activeService].link}
                className="
                  bg-blue-600 text-white 
                  px-6 py-3 rounded-full 
                  hover:bg-blue-700 
                  transition-colors
                  flex items-center
                  space-x-2
                ">
                  <span>Explore Service</span>
                  <Globe className="w-5 h-5" />
                </Link>
                {/* <button className="
                  border border-gray-300 
                  text-black 
                  px-6 py-3 
                  rounded-full 
                  hover:text-black
                  dark:border-gray-600 
                  dark:text-gray-300
                  flex items-center
                  space-x-2
                ">
                  <span>Detailed Analysis</span>
                  <BarChart2 className="w-5 h-5" />
                </button> */}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection