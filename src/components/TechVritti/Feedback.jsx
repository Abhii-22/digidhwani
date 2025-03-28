"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react"

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechInnovate",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "TechVritti transformed our outdated systems into a streamlined digital solution. Their team's expertise in web development and ERP integration has significantly improved our operational efficiency. The custom dashboard they built gives us real-time insights that have been game-changing for our business decisions.",
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthApp",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Working with TechVritti on our mobile app was an exceptional experience. Their development team understood our vision perfectly and delivered a product that exceeded our expectations. The app's performance and user experience have received outstanding feedback from our customers.",
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Operations, CloudSolutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The CRM system developed by TechVritti has revolutionized how we manage customer relationships. The intuitive interface and powerful automation features have increased our team's productivity by 40%. Their ongoing support and maintenance have been equally impressive.",
    },
    {
      name: "David Wilson",
      position: "E-Commerce Manager, RetailPlus",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "TechVritti delivered an e-commerce platform that perfectly balances functionality and user experience. Their attention to detail during the development process ensured that all our specific requirements were met. The platform has significantly increased our conversion rates and customer satisfaction.",
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our software solutions and
            services.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-blue-200 dark:text-blue-900 opacity-50">
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
                      {/* <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900 mb-4"
                      /> */}
                      <User />
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                          />
                        ))}
                      </div>
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
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "200+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "15+", label: "Team Members" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-blue-400 mb-2">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeedbackSection

