import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Search, BarChart, Globe, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Import images
import bg_image from "@/assets/IMAGES/getty-images-Z2eLWZwOcW4-unsplash.jpg"
import seoImage from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"
import socialMediaImage from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg"
import contentMarketingImage from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg"
import ppcImage from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg"
import analyticsImage from "@/assets/IMAGES/getty-images-KD_fT_T4D24-unsplash.jpg"

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const sliderRef = useRef(null)
  const heroRef = useRef(null)

  const services = [
    {
      id: 1,
      icon: <Search className="w-8 h-8 text-amber-500" />,
      image: `${seoImage}?height=200&width=300`,
      name: "Search Engine Optimization",
      description: "Boost your website's visibility in search results with our comprehensive SEO strategies",
      link: "/digidhvani/services/seo",
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      image: `${socialMediaImage}?height=200&width=300`,
      name: "Social Media Marketing",
      description: "Engage your audience and build brand awareness through effective social media campaigns",
      link: "/digidhvani/services/social-media",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      image: `${contentMarketingImage}?height=200&width=300`,
      name: "Content Marketing",
      description: "Create valuable content that attracts and converts your target audience",
      link: "/digidhvani/services/content-marketing",
    },
    {
      id: 4,
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      image: `${ppcImage}?height=200&width=300`,
      name: "Pay-Per-Click Advertising",
      description: "Drive targeted traffic and increase conversions with strategic PPC campaigns",
      link: "/digidhvani/services/ppc",
    },
    {
      id: 5,
      icon: <BarChart className="w-8 h-8 text-indigo-500" />,
      image: `${analyticsImage}?height=200&width=300`,
      name: "Analytics & Reporting",
      description: "Gain insights into your digital marketing performance with comprehensive analytics",
      link: "/digidhvani/services/analytics",
    }
  ]
  
  // Calculate header height on mount and window resize
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header")
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }

    // Initial calculation
    calculateHeaderHeight()

    // Recalculate on resize
    window.addEventListener("resize", calculateHeaderHeight)

    return () => {
      window.removeEventListener("resize", calculateHeaderHeight)
    }
  }, [])

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      // Loop back to the end
      setCurrentIndex(services.length - 4)
    }
  }

  const slideRight = () => {
    if (currentIndex < services.length - 4) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // Loop back to the beginning
      setCurrentIndex(0)
    }
  }

  useEffect(() => {
    let interval
    
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= services.length - 4 ? 0 : prevIndex + 1
        )
      }, 5000) // Change every 5 seconds for smoother experience
    }

    return () => clearInterval(interval)
  }, [services.length, isHovering])

  const visibleCards = 4 // Number of cards visible at once

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[70vh] flex items-center" ref={heroRef}>
        {/* Background with overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-700"
          style={{
            backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between"
          >
            <div className="lg:w-1/2 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Amplify Your Digital Presence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 text-justify">
                Strategic digital marketing solutions to help your business thrive in the online world
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/digidhvani/contact"
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/digidhvani/services"
                  className="px-8 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Slider Section - Separate from Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Digital Marketing Services</h2>
              
              <div className="flex space-x-2">
                <button
                  onClick={slideLeft}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 shadow-md"
                  aria-label="Previous services"
                >
                  <ChevronLeft className="w-6 h-6 dark:text-white" />
                </button>
                <button
                  onClick={slideRight}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 shadow-md"
                  aria-label="Next services"
                >
                  <ChevronRight className="w-6 h-6 dark:text-white" />
                </button>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: services.length - visibleCards + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Cards Slider */}
            <div 
              className="overflow-hidden" 
              ref={sliderRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="min-w-[25%] px-3">
                    <Link to={service.link}>
                      <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full border border-white/20">
                        <div className="relative">
                          <img 
                            src={service.image || "/placeholder.svg"} 
                            alt={service.name} 
                            className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full">
                            {service.icon}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="font-semibold text-white text-xl mb-2">{service.name}</h3>
                          <p className="text-gray-300 text-sm text-justify">{service.description}</p>
                          <div className="mt-4 flex items-center text-sm font-medium text-amber-400">
                            Learn more
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            
            {/* View all services button */}
            <div className="mt-12 text-center">
              <Link to="/digidhvani/services" className="inline-flex items-center px-6 py-3 border border-white/30 rounded-md text-white hover:bg-white/10 transition duration-300">
                View All Services
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
