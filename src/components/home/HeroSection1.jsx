"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useTheme } from "../ThemeProvider"
import image1 from "@/assets/IMAGES/AutoCAD.jpg"
import image2 from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"
import image3 from "@/assets/IMAGES/israel-andrade-YI_9SivVt_s-unsplash.jpg"

const SLIDER_IMAGES = [
  image1,image2,image3
]

function HeroSection() {
  const { theme } = useTheme()
  const heroRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mouse move effect from original component
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

  // Image slider auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % SLIDER_IMAGES.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={heroRef} className="relative mt-0 overflow-hidden" style={{ "--mouse-x": 0.5, "--mouse-y": 0.5 }}>
      {/* Dynamic background with theme-aware styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 opacity-80 dark:opacity-40"></div>

      {/* Animated gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 dark:opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Mouse-following highlight */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-15 dark:opacity-10 rounded-full blur-3xl"
        style={{
          left: "calc(var(--mouse-x) * 100%)",
          top: "calc(var(--mouse-y) * 100%)",
          transform: "translate(-50%, -50%)",
          width: "50%",
          height: "50%",
          transition: "opacity 0.2s ease",
        }}
      ></div>

      <div className="container mx-auto relative z-10 py-24 md:py-32 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 fade-in">
            {/* Left side content remains the same as original component */}
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 px-4 py-1.5 text-sm font-medium bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <span className="text-blue-600 dark:text-blue-400">Introducing Medini Technologies</span>
                <div className="mx-2 h-1 w-1 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                <span className="text-gray-600 dark:text-gray-400">Innovate. Transform. Succeed.</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Advanced Technology{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Solutions
                </span>{" "}
                for the Modern World
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[600px]">
                Empowering businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage.
              </p>
            </div>
            {/* Buttons and features remain the same */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:shadow-lg dark:shadow-blue-700/30"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-blue-200 dark:border-blue-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-8 py-3 text-base font-medium shadow-sm transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
          
          {/* Image Slider Section */}
          <div className="relative scale-in group">
            {/* Slider Backgrounds */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 dark:opacity-40 animate-pulse"></div>
            
            {/* Image Slider Container */}
            <div className="relative z-10 rounded-xl overflow-hidden border-2 border-white/50 dark:border-gray-800/50 bg-white dark:bg-gray-900 p-1 shadow-2xl">
              <div className="rounded-lg overflow-hidden relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                {SLIDER_IMAGES.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Dashboard Interface ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      currentImageIndex === index 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-95"
                    }`}
                  />
                ))}
              </div>
              
              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {SLIDER_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? "bg-blue-600 w-6" 
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative Blurs */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>
    </div>
  )
}

export default HeroSection