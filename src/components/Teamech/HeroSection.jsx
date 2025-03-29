"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, PrinterIcon as Printer3d, Cog, Cpu, Wrench } from "lucide-react"
import bg_image from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg"

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const headlines = [
    "Transforming Ideas into Digital Reality",
    "Custom Software Solutions for Modern Businesses",
    "Innovative Web & Mobile Applications",
    "Advanced 3D Printing & Mechanical Design Solutions",
    "Turning Concepts into Tangible Reality",
    "Engineering Excellence for Modern Manufacturing",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-blue-50 text-gray-900">
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${bg_image})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-amber-600/20 text-amber-600 bg-amber-100 border border-amber-500/30 rounded-full text-sm font-medium">
              Precision Engineering & 3D Printing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {headlines.map((headline, index) => (
                <span
                  key={index}
                  className={`block font-bold font-roboto text-white transition-opacity duration-1000 ${
                    currentIndex === index ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  {headline}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            We bring your mechanical designs to life with cutting-edge 3D printing technology and expert engineering
            solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/teamech#contact"
                className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-full bg-customBlue px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-500 hover:shadow-blue-300/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group"
              >
                <span className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                to="/teamech#services"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-gray-300 bg-transparent px-8 py-3 text-base font-medium text-gray-200 transition-all duration-300 hover:bg-gray-100 hover:text-black"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-500 rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Printer3d className="h-8 w-8" />,
                    title: "3D Printing",
                    color: "from-purple-500 to-purple-700",
                  },
                  {
                    icon: <Cog className="h-8 w-8" />,
                    title: "Mechanical Design",
                    color: "from-indigo-500 to-indigo-700",
                  },
                  { icon: <Cpu className="h-8 w-8" />, title: "Prototyping", color: "from-violet-500 to-violet-700" },
                  {
                    icon: <Wrench className="h-8 w-8" />,
                    title: "Engineering Solutions",
                    color: "from-blue-500 to-blue-700",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-300 dark:bg-gray-700 border border-gray-200 dark:border-black hover:bg-gray-100 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-full bg-gradient-to-r ${service.color} mb-3`}>{service.icon}</div>
                    <h3 className="font-medium text-gray-800">{service.title}</h3>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -bottom-4 -right-4 -left-4 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="absolute -top-4 -right-4 -left-4 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 -right-16 w-32 h-32 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-1/3 -left-16 w-32 h-32 bg-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection