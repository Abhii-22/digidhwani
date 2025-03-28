"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [headerHeight, setHeaderHeight] = useState(0)
  const sliderRef = useRef(null)
  const heroRef = useRef(null)

  const cards = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product One",
      link: "/product-one",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product Two",
      link: "/product-two",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product Three",
      link: "/product-three",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product Four",
      link: "/product-four",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product Five",
      link: "/product-five",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=200&width=300",
      name: "Product Six",
      link: "/product-six",
    },
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
    }
  }

  const slideRight = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{
        height: `calc(90vh - ${headerHeight}px)`,
        marginTop: `${headerHeight}px`,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        {/* Main Heading */}
        <div className="max-w-3xl mt-[-80px]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Discover Amazing Products
            <br />
            For Your Lifestyle
          </h1>

          <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition duration-300 mb-16">
            Explore Now
          </button>
        </div>

        {/* Slider Section */}
        <div className="mt-auto mb-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white">Featured Products</h3>

            <div className="flex space-x-2">
              <button
                onClick={slideLeft}
                className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={slideRight}
                className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition ${currentIndex >= cards.length - 3 ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={currentIndex >= cards.length - 3}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Cards Slider */}
          <div className="overflow-hidden" ref={sliderRef}>
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {cards.map((card) => (
                <div key={card.id} className="min-w-[33.33%] px-3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                    <img src={card.image || "/placeholder.svg"} alt={card.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{card.name}</h3>
                      <a href={card.link} className="text-blue-600 hover:underline inline-block">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

