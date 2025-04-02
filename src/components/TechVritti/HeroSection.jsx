import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Layout, Smartphone, Database, Code } from "lucide-react"
import backgroundImage from "@/assets/IMAGES/ilya-sonin-IsX2ZkbSk1Y-unsplash.jpg"


const HeroSection = ({ isDarkMode = false, servicesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const headlines = [
    "Transforming Ideas into Digital Reality",
    "Custom Software Solutions for Modern Businesses",
    "Innovative Web & Mobile Applications",
  ]

  // Use the provided servicesData or fallback to default
  const services = servicesData || [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Web Development",
      color: "from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps", 
      color: "from-indigo-500 to-indigo-600",
      textColor: "text-white"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "CRM & ERP",
      color: "from-purple-500 to-purple-600",
      textColor: "text-white"
    },
    { 
      icon: <Code className="h-6 w-6" />, 
      title: "Custom Software", 
      color: "from-cyan-500 to-cyan-600",
      textColor: "text-white"
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <section className={`w-full overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Background */}
      <div 
        className="relative w-full min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay with slight gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30"
              >
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                Software Development Experts
              </motion.div>
              
              {/* Headline with Animation */}
              <div className="h-28 sm:h-24 md:h-20">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
                  >
                    {headlines[currentIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-base md:text-lg text-gray-200 max-w-xl"
              >
                We build powerful, scalable, and user-friendly software solutions that drive business growth and enhance
                user experience.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="#contact"
                  className="group relative overflow-hidden inline-flex h-12 items-center justify-center rounded-full bg-blue-600 px-6 md:px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  to="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-300 bg-transparent px-6 md:px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Services Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-2/5 relative"
            >
              <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.15 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 rounded-full bg-gradient-to-r ${service.color} mb-3 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className={`font-medium ${service.textColor || "text-white"}`}>{service.title}</h3>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative lines */}
                <div className="absolute -bottom-2 -right-2 -left-2 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="absolute -top-2 -right-2 -left-2 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-1/3 -left-8 w-24 h-24 bg-indigo-400 rounded-full filter blur-3xl opacity-20"></div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection