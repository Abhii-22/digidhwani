"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building,
  Home,
  Ruler,
  Compass,
  PenTool,
  Image,
  Lightbulb,
  Layers,
  Palette,
  Maximize,
  Minimize,
  Zap,
} from "lucide-react"

const BimServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("interior")

  const services = {
    interior: [
      {
        icon: <Home />,
        title: "Residential Interiors",
        description:
          "Create beautiful, functional living spaces that reflect your personal style and enhance your quality of life.",
      },
      {
        icon: <Building />,
        title: "Commercial Interiors",
        description:
          "Design productive, inspiring workspaces that embody your brand identity and support your business goals.",
      },
      {
        icon: <Palette />,
        title: "Color Consultation",
        description: "Expert color schemes that create the perfect atmosphere and emotional response in any space.",
      },
      {
        icon: <Lightbulb />,
        title: "Lighting Design",
        description:
          "Strategic lighting solutions that enhance architectural features and create the desired ambiance.",
      },
    ],
    exterior: [
      {
        icon: <Building />,
        title: "Facade Design",
        description:
          "Striking building exteriors that make a lasting impression while maintaining structural integrity.",
      },
      {
        icon: <Maximize />,
        title: "Landscape Architecture",
        description: "Harmonious outdoor spaces that connect with the natural environment and extend your living area.",
      },
      {
        icon: <Minimize />,
        title: "Outdoor Living",
        description:
          "Functional and beautiful outdoor spaces for relaxation, entertainment, and connecting with nature.",
      },
      {
        icon: <Zap />,
        title: "Sustainable Design",
        description:
          "Eco-friendly solutions that reduce environmental impact while enhancing aesthetics and functionality.",
      },
    ],
    bim: [
      {
        icon: <Layers />,
        title: "BIM Modeling",
        description:
          "Comprehensive 3D building information models that streamline design, construction, and facility management.",
      },
      {
        icon: <Image />,
        title: "3D Visualization",
        description:
          "Photorealistic renderings and animations that bring your design concepts to life before construction begins.",
      },
      {
        icon: <Ruler />,
        title: "Construction Documentation",
        description: "Detailed, accurate construction documents that ensure your design is built exactly as intended.",
      },
      {
        icon: <Compass />,
        title: "BIM Coordination",
        description:
          "Clash detection and coordination services that prevent costly errors during the construction phase.",
      },
    ],
  }

  const tabs = [
    { id: "interior", label: "Interior Design" },
    { id: "exterior", label: "Exterior Design" },
    { id: "bim", label: "BIM & Visualization" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-amber-900/30 dark:text-amber-400 mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Comprehensive Design Solutions</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            From concept to completion, we offer a full range of interior and exterior design services powered by
            cutting-edge BIM technology.
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
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
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
              <div className="p-4 rounded-full bg-amber-50 dark:bg-amber-900/20 w-fit mb-4">
                <div className="text-amber-600 dark:text-amber-400">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Our Design Process</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We follow a structured approach to ensure your project is completed efficiently and exceeds your
              expectations.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-200 dark:bg-amber-900/30 hidden md:block"></div>

            {/* Process steps */}
            <div className="space-y-12 relative">
              {[
                {
                  title: "Discovery & Consultation",
                  description:
                    "We begin by understanding your vision, requirements, and budget to establish the foundation for your project.",
                  icon: <PenTool className="w-6 h-6" />,
                },
                {
                  title: "Concept Development",
                  description:
                    "Our designers create initial concepts and mood boards to visualize the direction of your project.",
                  icon: <Lightbulb className="w-6 h-6" />,
                },
                {
                  title: "Design Development",
                  description: "We refine the chosen concept into detailed plans, 3D models, and material selections.",
                  icon: <Layers className="w-6 h-6" />,
                },
                {
                  title: "Implementation",
                  description:
                    "Our team coordinates with contractors and suppliers to bring your design to life with precision.",
                  icon: <Building className="w-6 h-6" />,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse text-right" : "text-left"
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-64 h-64 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
                      <div className="w-48 h-48 bg-amber-200 dark:bg-amber-800/30 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-amber-600 text-white rounded-full flex items-center justify-center text-4xl font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Circle on the timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>

                  <div className="md:w-1/2">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="p-3 rounded-full bg-amber-50 dark:bg-amber-900/20 w-fit mb-4 mx-auto md:mx-0 md:ml-auto">
                        <div className="text-amber-600 dark:text-amber-400">{step.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition-colors duration-200"
          >
            Start Your Project
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

export default BimServicesComponent

