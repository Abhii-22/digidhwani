import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import image1 from "@/assets/IMAGES/Untitled design.png"
import image2 from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"

const SLIDER_CONTENT = [
  {
    image: `${image2}?height=1200&width=1920&color=blue`,
    title: "Interior Design",
    description: "Transforming businesses through cutting-edge digital strategies",
    buttonText: "Discover More",
    buttonLink: "/services"
  },
  {
    image: `${image1}?height=1200&width=1920&color=purple`, 
    title: "Exterior Design",
    description: "Tailored solutions that drive efficiency and growth",
    buttonText: "Explore Services",
    buttonLink: "/solutions"
  },
]
function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_CONTENT.length)
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [])

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        {SLIDER_CONTENT.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  filter: 'brightness(0.7)'
                }} />

              {/* Content Overlay */}
              <div className="relative z-10 container mx-auto h-full flex items-center px-6">
                <div className="max-w-xl text-white dark:text-white space-y-6">
                  <motion.h1
                    // initial={{ x: -50, opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    // initial={{ x: -50, opacity: 0 }}   
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-lg mb-6 text-gray-200 dark:text-gray-200"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.a
                    // initial={{ x: -50, opacity: 0 }}
                    // animate={{ x: 0, opacity: 1 }}
                    // transition={{ delay: 0.6, duration: 0.6 }}
                    href={slide.buttonLink}
                    className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full transition-colors"
                  >
                    {slide.buttonText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {SLIDER_CONTENT.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${currentSlide === index
                ? 'bg-black dark:bg-white w-8'
                : 'bg-black/50 dark:bg-white/50 hover:bg-white/75'}
            `} />
        ))}
      </div>
    </div>
  )
}

export default HeroSection