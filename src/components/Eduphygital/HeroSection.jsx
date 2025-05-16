import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, BookOpen, Monitor, Users, Lightbulb, Compass } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

// Import placeholder images - replace with actual images later
import bg_image from "@/assets/IMAGES/getty-images-OB7KJ7WtHOs-unsplash.jpg"
import digitalLearningImage from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"
import hybridClassroomImage from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg"
import teacherTrainingImage from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg"
import learningDesignImage from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg"
import educationConsultingImage from "@/assets/IMAGES/getty-images-KD_fT_T4D24-unsplash.jpg"

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const sliderRef = useRef(null)
  const heroRef = useRef(null)

  const services = [
    {
      id: 1,
      icon: <Monitor className="w-8 h-8 text-amber-500" />,
      image: `${digitalLearningImage}?height=200&width=300`,
      name: "Digital Learning Solutions",
      description: "Innovative digital platforms and tools to enhance the learning experience",
      link: "/eduphygital/services/digital-learning",
    },
    {
      id: 2,
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      image: `${hybridClassroomImage}?height=200&width=300`,
      name: "Hybrid Classroom Design",
      description: "Creating effective learning environments that blend physical and digital elements",
      link: "/eduphygital/services/hybrid-classroom",
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-green-500" />,
      image: `${teacherTrainingImage}?height=200&width=300`,
      name: "Educator Training Programs",
      description: "Empowering teachers with skills to excel in modern educational environments",
      link: "/eduphygital/services/teacher-training",
    },
    {
      id: 4,
      icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
      image: `${learningDesignImage}?height=200&width=300`,
      name: "Learning Experience Design",
      description: "Creating engaging and effective learning journeys for students of all ages",
      link: "/eduphygital/services/learning-design",
    },
    {
      id: 5,
      icon: <Compass className="w-8 h-8 text-indigo-500" />,
      image: `${educationConsultingImage}?height=200&width=300`,
      name: "Education Transformation Consulting",
      description: "Strategic guidance for educational institutions navigating digital transformation",
      link: "/eduphygital/services/education-consulting",
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
                Restructuring Education for the Future
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Innovative educational solutions that bridge physical and digital learning environments
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/eduphygital/contact"
                  className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/eduphygital/services"
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
              <h2 className="text-2xl md:text-3xl font-bold text-white">Our Educational Services</h2>
              
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

            <div 
              className="relative overflow-hidden"
              ref={sliderRef}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
              >
                {services.map((service) => (
                  <div 
                    key={service.id}
                    className="min-w-[25%] px-3 transition-all duration-300"
                  >
                    <Link 
                      to={service.link}
                      className="block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-amber-500/30 h-full"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.name}
                          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default HeroSection
