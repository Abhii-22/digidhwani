import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../../ThemeProvider"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import DynamicTypingHeadline from "@/components/DynamicTypeWritter"
import bg_image from "@/assets/IMAGES/Untitled design.png"

function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      heroRef.current.style.setProperty("--mouse-x", x)
      heroRef.current.style.setProperty("--mouse-y", y)
    }

    const heroElement = heroRef.current
    heroElement.addEventListener("mousemove", handleMouseMove)

    return () => {
      heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ 
        "--mouse-x": 0.5, 
        "--mouse-y": 0.5,
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200/30 dark:bg-purple-900/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto relative z-10 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-3 rounded-full border border-blue-200 dark:border-blue-800 px-4 py-1.5 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
            >
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Introducing Medini Technologies
              </span>
            </motion.div>

            <div className="space-y-6">
              <DynamicTypingHeadline />
              
              {/* <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 dark:text-gray-300 max-w-xl"
              >
                Empowering innovation through cutting-edge technology solutions that transform businesses and drive success.
              </motion.p> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-customBlue text-white px-8 py-3.5 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border-2 border-blue-200 dark:border-blue-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md px-8 py-3.5 text-gray-700 dark:text-gray-300 shadow-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>
    </div>
  )
}

export default HeroSection