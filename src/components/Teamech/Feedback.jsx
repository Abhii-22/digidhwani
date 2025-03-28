"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

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

const TeamechFeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "James Wilson",
      position: "Product Development Manager, TechInnovate",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Teamech's 3D printing services have revolutionized our prototyping process. Their attention to detail and quick turnaround times have significantly accelerated our product development cycle. The quality of their prints is exceptional, and their team is always responsive and helpful.",
    },
    {
      name: "Lisa Chen",
      position: "Chief Engineer, MechSolutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "We've been working with Teamech for our mechanical design needs for over two years now. Their engineering expertise and innovative approach to problem-solving have been invaluable to our projects. They consistently deliver designs that are not only functional but also optimized for manufacturing.",
    },
    {
      name: "Robert Johnson",
      position: "Founder, Aerospace Innovations",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The precision and quality of Teamech's 3D printed components for our aerospace applications have been outstanding. Their ability to work with specialized materials and meet our strict tolerances has made them an essential partner in our manufacturing process.",
    },
    {
      name: "Sarah Martinez",
      position: "Director of Operations, MedTech Devices",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4,
      text: "Teamech's mechanical design and 3D printing services have been crucial for our medical device prototypes. Their understanding of our industry's requirements and their ability to suggest design improvements have added significant value beyond just manufacturing our parts.",
    }
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
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-purple-900/30 dark:text-purple-400 mb-4">
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our 3D printing and mechanical
            design services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 text-purple-200 dark:text-purple-900 opacity-50">
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
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-purple-100 dark:border-purple-900 mb-4"
                      />
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
                    ? "bg-purple-600 w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Case studies preview */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2 dark:text-white">Featured Case Studies</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore how our solutions have helped clients overcome engineering challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automotive Component Redesign",
                description:
                  "Optimized a critical engine component for weight reduction while maintaining structural integrity.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Medical Device Prototyping",
                description: "Rapid prototyping of a novel medical device, reducing development time by 60%.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Custom Manufacturing Tooling",
                description:
                  "Designed and 3D printed custom jigs and fixtures for a specialized manufacturing process.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-sm font-medium px-2 py-1 rounded-full bg-purple-600">
                        Case Study
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{study.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{study.description}</p>
                  <a
                    href={`/case-studies/${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-purple-600 dark:text-purple-400 font-medium inline-flex items-center"
                  >
                    Read Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "100+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "25+", label: "Industries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-600 dark:text-purple-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamechFeedbackSection