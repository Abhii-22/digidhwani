import { useState, useRef, useEffect } from "react";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import image1 from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg";
import image2 from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg";
import image3 from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg";
import image4 from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg";

const FeaturesSection = ({ autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

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
      title: "TECHVRITTI",
      description: "Looking into the need and supporting for the right product/software.",
      link: "/techvritti",
      bg_image: `${image4}?height=600&width=800`,
    },
    {
      title: "EDUPHYGITAL",
      description: "Restructuring the Dreams through innovative educational solutions that bridge physical and digital learning environments.",
      link: "/eduphygital",
      bg_image: `${image2}?height=600&width=800`,
    },
    {
      title: "DIGIDHVANI",
      description: "Digital Marketing Solutions for businesses looking to amplify their online presence and reach.",
      link: "/digidhvani",
      bg_image: `${image4}?height=600&width=800`,
    },
    {
      title: "BUILDDSPACE",
      description: "For Startup Support - Empowering entrepreneurs with the resources and guidance needed to build successful ventures.",
      link: "/builddspace",
      bg_image: `${image1}?height=600&width=800`,
    },
    {
      title: "MECHSETU",
      description: "From design to manufacturing, any need of the market to the market",
      link: "/teamech",
      bg_image: `${image3}?height=600&width=800`,
    },
  ];

  const slideLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end when at the beginning
      setCurrentIndex(services.length - getVisibleCards());
    }
  };

  const slideRight = () => {
    const maxIndex = services.length - getVisibleCards();
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop to the beginning when at the end
      setCurrentIndex(0);
    }
  };

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3; 
      if (window.innerWidth >= 768) return 2; 
      return 1; 
    }
    return 1;
  };

  const getTranslatePercentage = () => {
    const visibleCards = getVisibleCards();
    const cardWidth = 100 / visibleCards;
    return currentIndex * cardWidth;
  };

  // Set up automatic sliding
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideTimerRef.current = setInterval(() => {
        if (!isPaused) {
          slideRight();
        }
      }, autoSlideInterval);
    };

    startAutoSlide();

    // Clean up timer on unmount
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [currentIndex, isPaused, autoSlideInterval]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const maxIndex = services.length - getVisibleCards();
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, services.length]);

  // Pagination indicators
  const renderPaginationDots = () => {
    const dotsCount = services.length - getVisibleCards() + 1;
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: dotsCount }).map((_, index) => (
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
    );
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-blue-400 dark:to-purple-400">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver transformative solutions to foster innovation, optimize efficiency, and fuel strategic growth.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-end mb-6 space-x-2">
          <button
            onClick={slideLeft}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:scale-105 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
          <button
            onClick={slideRight}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition transform hover:scale-105 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {/* Cards Slider */}
        <div
          className="overflow-hidden"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${getTranslatePercentage()}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="px-4 min-w-full md:min-w-[50%] xl:min-w-[33.333%]">
                <div
                  className="h-[36rem] rounded-2xl shadow-xl overflow-hidden relative group transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
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

                    <p className="text-xl text-white/90 font-sans font-light mb-8 leading-relaxed text-justify">
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
                        <span>Explore Services</span>
                        <Globe className="w-6 h-6 ml-2 animate-pulse" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {renderPaginationDots()}
      </div>
    </div>
  );
};

export default FeaturesSection;

