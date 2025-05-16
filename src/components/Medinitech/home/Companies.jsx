import { useState, useRef, useEffect } from "react"
import { Globe, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

import image1 from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"
import image2 from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg"
import image3 from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg"
import image4 from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg"

const ThreeDCarousel = ({ autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoSlideTimerRef = useRef(null)

  const services = [
    {
      title: "MEDINI SCHOOL OF DESIGN",
      description:
        "Maximize the productivity of your knowledge with learning programs designed to meet industry requirements. Take live instructor-led classes online/offline, or take advantage of on-demand.",
      link: "/medinischoolofdesign",
      bg_image: `${image1}?height=600&width=800`,
    },
    {
      title: "BIM CONSTRUCT",
      description:
        "Support Architects, Engineers & Owners on process of building digital Models. Increasing safety & Cost effective.",
      link: "/bim_construct",
      bg_image: `${image2}?height=600&width=800`,
    },
    {
      title: "MECHSETU",
      description: "From design to manufacturing, any need of the market to the market",
      link: "/teamech",
      bg_image: `${image3}?height=600&width=800`,
    },
    {
      title: "TECHVRITTI",
      description: "Looking into the need and supporting for the right product/software.",
      link: "/techvritti",
      bg_image: `${image4}?height=600&width=800`,
    },
  ]

  const totalSlides = services.length

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }

  const getSlideStyles = (index) => {
    // Calculate the position of each slide in the carousel
    const angle = (2 * Math.PI * (index - currentIndex)) / totalSlides
    const radius = 300 // Adjust this value to change the size of the carousel

    // Calculate the x and z positions based on the angle
    const x = radius * Math.sin(angle)
    const z = radius * Math.cos(angle) - radius

    // Calculate opacity and scale based on z position
    const opacity = z < -radius / 2 ? 0.5 : 1
    const scale = z < -radius / 2 ? 0.8 : 1

    // Calculate z-index to ensure proper stacking
    const zIndex = z < -radius / 2 ? 0 : 10

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity,
      zIndex,
    }
  }

  // Set up automatic sliding
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideTimerRef.current = setInterval(() => {
        if (!isPaused) {
          goToNext()
        }
      }, autoSlideInterval)
    }

    startAutoSlide()

    // Clean up timer on unmount
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current)
      }
    }
  }, [currentIndex, isPaused, autoSlideInterval])

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-blue-400 dark:to-purple-400">
            Enterprise-Grade Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformative solutions designed to accelerate innovation, enhance operational efficiency, and drive
            strategic growth.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={goToPrev}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* 3D Carousel */}
        <div
          className="relative h-[600px] perspective-[1200px] overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute w-full h-full transform-style-3d">
            <div className="relative w-full h-full transform-style-3d">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="absolute top-0 left-0 right-0 mx-auto w-full max-w-md transition-all duration-700 ease-out"
                  style={getSlideStyles(index)}
                >
                  <div
                    className="h-[36rem] rounded-2xl shadow-xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.bg_image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/60 transition-all duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full p-8">
                      <div className="flex items-center mb-6">
                        <h3 className="text-3xl font-bold text-white font-mono tracking-wide group-hover:text-amber-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-xl text-white/90 font-sans font-light mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-auto">
                        <Link
                          to={service.link}
                          className="
                            inline-flex items-center space-x-3
                            bg-white/20 hover:bg-amber-600/80 
                            backdrop-blur-sm
                            text-white font-semibold
                            px-6 py-3 rounded-lg
                            transition-all duration-300
                            border border-white/30
                            hover:border-amber-500/50
                            transform hover:scale-105
                          "
                        >
                          <span>Explore Service</span>
                          <Globe className="w-6 h-6 ml-2 animate-pulse" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-amber-600 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThreeDCarousel

