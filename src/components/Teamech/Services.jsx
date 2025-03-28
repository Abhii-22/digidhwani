"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  PrinterIcon as Printer3d,
  Cog,
  Cpu,
  Wrench,
  Layers,
  FileText,
  Microscope,
  Zap,
  Rocket,
  Lightbulb,
  Gauge,
  Repeat,
} from "lucide-react"

const TeamechServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("printing")

  const services = {
    printing: [
      {
        icon: <Printer3d />,
        title: "Industrial 3D Printing",
        description: "High-precision 3D printing services for functional parts, prototypes, and production components.",
      },
      {
        icon: <Layers />,
        title: "Multi-Material Printing",
        description: "Create complex parts with multiple materials and properties in a single print.",
      },
      {
        icon: <Microscope />,
        title: "Micro-Precision Printing",
        description: "Ultra-high resolution printing for small, detailed components with tight tolerances.",
      },
      {
        icon: <Zap />,
        title: "Rapid Prototyping",
        description: "Quick turnaround on functional prototypes to accelerate your development cycle.",
      },
    ],
    design: [
      {
        icon: <Cog />,
        title: "Mechanical Design",
        description: "Expert mechanical engineering and design services for products, machines, and components.",
      },
      {
        icon: <FileText />,
        title: "CAD Modeling",
        description: "Precise 3D modeling and 2D drafting using industry-standard CAD software.",
      },
      {
        icon: <Gauge />,
        title: "Simulation & Analysis",
        description: "FEA, CFD, and motion analysis to validate designs before manufacturing.",
      },
      {
        icon: <Lightbulb />,
        title: "Design Optimization",
        description: "Improve existing designs for performance, cost, and manufacturability.",
      },
    ],
    solutions: [
      {
        icon: <Wrench />,
        title: "Custom Engineering",
        description: "Tailored engineering solutions for unique manufacturing and design challenges.",
      },
      {
        icon: <Cpu />,
        title: "Industrial Automation",
        description: "Design and implementation of automated systems for manufacturing processes.",
      },
      {
        icon: <Rocket />,
        title: "Product Development",
        description: "End-to-end product development from concept to production-ready designs.",
      },
      {
        icon: <Repeat />,
        title: "Reverse Engineering",
        description: "Recreate and improve existing parts when original designs are unavailable.",
      },
    ],
  }

  const tabs = [
    { id: "printing", label: "3D Printing" },
    { id: "design", label: "Mechanical Design" },
    { id: "solutions", label: "Engineering Solutions" },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-purple-900/30 dark:text-purple-400 mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Advanced Manufacturing & Design Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We offer a comprehensive range of 3D printing and mechanical design services to bring your ideas to life
            with precision and expertise.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-amber-600 text-white shadow-lg shadow-purple-600/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-4 rounded-full bg-purple-50 dark:bg-purple-900/20 w-fit mb-4">
                <div className="text-amber-600 dark:text-purple-400">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Technology</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We utilize cutting-edge equipment and software to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced 3D Printers",
                description:
                  "Our facility is equipped with industrial-grade 3D printers capable of producing parts in a wide range of materials with exceptional precision.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Engineering Software Suite",
                description:
                  "We use the latest CAD/CAM software and simulation tools to design, analyze, and optimize mechanical components and systems.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Quality Control Systems",
                description:
                  "Our comprehensive quality control process ensures that every part meets strict specifications and performance requirements.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <img src={tech.image || "/placeholder.svg"} alt={tech.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 dark:text-white">{tech.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Materials section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Materials We Work With</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              From industrial-grade polymers to metals, we offer a wide range of materials to suit your specific
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["ABS", "PLA", "Nylon", "TPU", "PETG", "Polycarbonate", "Aluminum", "Steel"].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-amber-50 dark:bg-purple-900/10 rounded-lg p-4 text-center border border-purple-100 dark:border-purple-800/20"
              >
                <span className="font-medium text-customBlue dark:text-purple-300">{material}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors duration-200"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
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

export default TeamechServicesComponent

