import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import bg_image from "@/assets/IMAGES/getty-images-OB7KJ7WtHOs-unsplash.jpg"
// import image1 from "@/assets/IMAGES/AutoCAD.jpg"
import { Link } from "react-router-dom"

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [headerHeight, setHeaderHeight] = useState(0)
    const sliderRef = useRef(null)
    const heroRef = useRef(null)
    const image1 = "/images/AutoCAD.jpg"

    const cards = [
      {
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
      },
      {
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
      },
      {
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
      },
      {
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
      },{
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
      },{
        id: 1,
        image: `${image1}?height=200&width=300`,
        name: "AutoCAD",
        link: "/courses/autocad",
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
      <section className="relative overflow-hidden" ref={heroRef}>
        <div
        className="absolute px-4 inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
        <div className="hero-gradient absolute inset-0 z-0"></div>
        <div className="container relative z-10 py-20 md:py-32">
          <div className="z-10 mx-auto px-4 mt-20 flex flex-col justify-center">
            {/* Main Heading */}
            <div className="max-w-3xl mt-[-80px]">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Discover Amazing Courses
                  <br />
                  For Your Career
                </h1>
            
                <Link to="/courses" className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition duration-300 mb-16">
                  Explore Now
                </Link>
            </div>

            {/* Slider Section */}
            <div className="mt-16">
              <div className="flex justify-between items-center ">
                <h3 className="text-xl md:text-2xl font-semibold text-white">Explore courses by Medini</h3>

                <div className="flex space-x-2 py-4">
                  <button
                    onClick={slideLeft}
                    className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={slideRight}
                    className={`p-2 rounded-full bg-white/20 hover:bg-white/30 transition ${currentIndex >= cards.length - 4 ? "opacity-50 cursor-not-allowed" : ""}`}
                    disabled={currentIndex >= cards.length - 4}
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
                    <div key={card.id} className="min-w-[25%] px-3">
                      <Link to={`${card.link}`}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src={card.image || "/placeholder.svg"} alt={card.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-semibold text-black text-lg mb-2">{card.name}</h3>
                        </div>
                      </div>
                      </Link>
                    </div>
                  ))}
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </section>
    )
  }
  

export default HeroSection