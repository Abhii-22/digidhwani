"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const BimFeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Robert Anderson",
      position: "Homeowner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "BIM Construct transformed our outdated home into a modern masterpiece. Their attention to detail and innovative design solutions exceeded our expectations. The 3D visualization helped us see exactly what we were getting before construction began, which was invaluable for making decisions.",
    },
    {
      name: "Jennifer Martinez",
      position: "Restaurant Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with BIM Construct on our restaurant redesign was an exceptional experience. Their team understood our vision perfectly and created a space that has received countless compliments from our customers. The BIM modeling helped us avoid costly mistakes during construction.",
    },
    {
      name: "Thomas Wright",
      position: "Property Developer",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As a property developer, I've worked with many design firms, but BIM Construct stands out for their professionalism and innovative approach. Their BIM expertise has streamlined our construction process and saved us both time and money. They're now our go-to design partner.",
    },
    {
      name: "Sophia Kim",
      position: "Office Manager",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Our office renovation by BIM Construct has completely transformed our workspace. The team listened to our needs and created a design that improved workflow and employee satisfaction. The 3D visualizations were incredibly helpful in getting everyone on board with the changes.",
    },
  ]

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-amber-900/30 dark:text-amber-400 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our design services and
            solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-amber-200 dark:text-amber-900 opacity-50">
            <Quote size={80} />
          </div>

          {/* Testimonial slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl p-8 md:p-12">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="min-w-full px-4"
                  >
                    <div className="flex flex-col items-center text-center">
                      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                      <h4 className="font-bold text-lg dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-amber-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "40+", label: "Happy Clients" },
            { value: "12+", label: "Design Awards" },
            { value: "8+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured projects preview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Featured Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">Take a look at some of our recent design work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Modern Minimalist Home", category: "Residential Interior" },
              { title: "Luxury Restaurant", category: "Commercial Interior" },
              { title: "Corporate Headquarters", category: "Commercial Exterior" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={`/placeholder.svg?height=400&width=600`}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                  <p className="text-amber-300">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors duration-200"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const ArrowRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export default BimFeedbackSection

