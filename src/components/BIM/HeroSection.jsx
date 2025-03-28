import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Building, Home, Ruler, Compass } from "lucide-react"
import image1 from "@/assets/IMAGES/Revit Architecture.jpg"
import image2 from "@/assets/IMAGES/pablo-merchan-montes-2pmRwB_q3k8-unsplash.jpg"
import image3 from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg"

const BimHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    {
      title: "Innovative Interior & Exterior Design Solutions",
      image: `${image1}?height=600&width=800`,
      description:
        "Transform your spaces with our cutting-edge design solutions that blend aesthetics with functionality.",
    },
    {
      title: "Expert BIM Modeling & Visualization",
      image: `${image2}?height=600&width=800`,
      description:
        "Experience your design before construction with our detailed 3D models and immersive visualizations.",
    },
    {
      title: "Sustainable Architecture & Design",
      image: `${image3}?height=600&width=800`,
      description:
        "Create eco-friendly spaces that reduce environmental impact while maximizing comfort and efficiency.",
    },
  ]

  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
      }, 10000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    setIsPlaying(false)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-gray-50">
      {/* Background slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${slide.image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentIndex === index ? 1 : 0,
                y: currentIndex === index ? 0 : 20,
              }}
              transition={{ duration: 0.8 }}
              className={`${currentIndex === index ? "block" : "hidden"}`}
            >
              <div className="inline-block px-4 py-1 bg-amber-100 border border-amber-500/30 rounded-full text-amber-600 text-sm font-medium mb-6">
                BIM Construct - Excellence in Design
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="relative overflow-hidden inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-3 text-base font-medium text-white transition-all duration-500 hover:shadow-amber-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 shadow-lg shadow-amber-700/30 group"
                >
                  <span className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>

              {/* Slider controls - Added more margin to create space */}
              <div className="flex space-x-3 mt-12 mb-16">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index ? "bg-amber-500 w-8" : "bg-gray-400/50 hover:bg-gray-500/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services quick access - Adjusted top margin to create more separation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent py-6 z-20 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Building className="h-8 w-8" />, title: "Architectural Design" },
              { icon: <Home className="h-8 w-8" />, title: "Interior Design" },
              { icon: <Ruler className="h-8 w-8" />, title: "3D Modeling" },
              { icon: <Compass className="h-8 w-8" />, title: "BIM Consulting" },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
              >
                <div className="p-3 rounded-full bg-amber-500/20 text-amber-700 mb-3">{service.icon}</div>
                <h3 className="font-medium text-gray-900">{service.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BimHeroSection