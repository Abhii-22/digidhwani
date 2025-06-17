import React, { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  BarChart,
  Globe,
  TrendingUp,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import images (adjust paths as needed)
import bg_image from "@/assets/IMAGES/getty-images-Z2eLWZwOcW4-unsplash.jpg";
import seoImage from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg";
import socialMediaImage from "@/assets/IMAGES/getty-images-GWy4HmlGraI-unsplash.jpg";
import contentMarketingImage from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg";
import ppcImage from "@/assets/IMAGES/getty-images-X-lDEMCZBz0-unsplash.jpg";
import analyticsImage from "@/assets/IMAGES/getty-images-KD_fT_T4D24-unsplash.jpg";

// Registration Form component
const RegistrationForm = ({ onBack, selectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    service: selectedService?.name || "",
  });

  React.useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: selectedService?.name || "",
    }));
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert(`Registered for ${formData.service}! Check console for details.`);
    setFormData({ name: "", email: "", password: "", service: selectedService?.name || "" });
    onBack();
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-amber-400 mb-6">Register</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="service" className="block text-gray-300 mb-1">
            Service
          </label>
          <input
            id="service"
            name="service"
            type="text"
            value={formData.service}
            readOnly
            disabled
            className="w-full p-2 rounded-md bg-gray-700 text-gray-300 cursor-not-allowed"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-white/30 rounded-lg text-white hover:bg-white/10 transition duration-300"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const sliderRef = useRef(null);
  const heroRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: <Search className="w-8 h-8 text-amber-500" />,
      image: `${seoImage}?height=200&width=300`,
      name: "Search Engine Optimization",
      description:
        "Boost your website's visibility in search results with our comprehensive SEO strategies",
      details: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO improvements",
        "Link building strategies",
        "Performance tracking and reporting",
      ],
      link: "/digidhvani/services/seo",
    },
    {
      id: 2,
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      image: `${socialMediaImage}?height=200&width=300`,
      name: "Social Media Marketing",
      description:
        "Engage your audience and build brand awareness through effective social media campaigns",
      details: [
        "Content creation and curation",
        "Social media strategy development",
        "Community management",
        "Performance analytics",
        "Paid advertising campaigns",
      ],
      link: "/digidhvani/services/social-media",
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      image: `${contentMarketingImage}?height=200&width=300`,
      name: "Content Marketing",
      description:
        "Create valuable content that attracts and converts your target audience",
      details: [
        "Blog writing and management",
        "Video content production",
        "Infographics and visual content",
        "Content distribution strategies",
        "Performance tracking",
      ],
      link: "/digidhvani/services/content-marketing",
    },
    {
      id: 4,
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      image: `${ppcImage}?height=200&width=300`,
      name: "Pay-Per-Click Advertising",
      description:
        "Drive targeted traffic and increase conversions with strategic PPC campaigns",
      details: [
        "Keyword targeting and bidding",
        "Ad copywriting and design",
        "Landing page optimization",
        "Performance tracking and reporting",
        "A/B testing",
      ],
      link: "/digidhvani/services/ppc",
    },
    {
      id: 5,
      icon: <BarChart className="w-8 h-8 text-indigo-500" />,
      image: `${analyticsImage}?height=200&width=300`,
      name: "Analytics & Reporting",
      description:
        "Gain insights into your digital marketing performance with comprehensive analytics",
      details: [
        "Website traffic analysis",
        "User  behavior tracking",
        "Conversion tracking",
        "Custom reporting",
        "Data-driven recommendations",
      ],
      link: "/digidhvani/services/analytics",
    },
  ];

  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        // Placeholder for header height logic if needed
      }
    };
    calculateHeaderHeight();
    window.addEventListener("resize", calculateHeaderHeight);
    return () => window.removeEventListener("resize", calculateHeaderHeight);
  }, []);

  const visibleCards = 4;

  const slideLeft = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(services.length - visibleCards);
  };

  const slideRight = () => {
    if (currentIndex < services.length - visibleCards) setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  useEffect(() => {
    let interval;
    if (!isHovering) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev >= services.length - visibleCards ? 0 : prev + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [services.length, isHovering]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden h-[70vh] flex items-center"
        ref={heroRef}
      >
        {/* Background with overlay */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-700"
          style={{ backgroundImage: `url(${bg_image})`, backgroundSize: "cover" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/30"></div>

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
                Strategic digital marketing solutions to help your business thrive
                in the online world
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

      {/* Our Digital Marketing Services Section with white background */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Digital Marketing Services</h2>
              <div className="flex space-x-2">
                <button
                  onClick={slideLeft}
                  className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 shadow-md"
                  aria-label="Previous services"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={slideRight}
                  className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 shadow-md"
                  aria-label="Next services"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {Array.from({ length: services.length - visibleCards + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-gray-900" : "w-2 bg-gray-900/40"
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
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {services.map((service) => (
                  <div key={service.id} className="min-w-[25%] px-3">
                    <div
                      onClick={() => {
                        setSelectedService(service);
                        setShowRegistrationForm(false);
                      }}
                      className="bg-gray-100 rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl h-full cursor-pointer"
                    >
                      <div className="relative">
                        <img
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-4 left-4 p-2 bg-gray-100 rounded-full">
                          {service.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 text-xl mb-2">{service.name}</h3>
                        <p className="text-gray-700 text-sm text-justify">{service.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium text-amber-500">
                          Learn more
                          <svg
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View all services button */}
            <div className="mt-12 text-center">
              <Link
                to="/digidhvani/services"
                className="inline-flex items-center px-6 py-3 border border-gray-700 rounded-md text-gray-900 hover:bg-gray-300 transition duration-300"
              >
                View All Services
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedService(null);
              setShowRegistrationForm(false);
            }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors"
                onClick={() => {
                  setSelectedService(null);
                  setShowRegistrationForm(false);
                }}
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {!showRegistrationForm && (
                <>
                  <h3 className="text-3xl font-bold text-amber-400 mb-4">{selectedService.name}</h3>
                  <p className="text-gray-300 mb-6">{selectedService.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                    {selectedService.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <button
                      onClick={() => setShowRegistrationForm(true)}
                      className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now
                    </button>
                  </div>
                </>
              )}

              {showRegistrationForm && (
                <RegistrationForm
                  selectedService={selectedService}
                  onBack={() => setShowRegistrationForm(false)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeroSection;
