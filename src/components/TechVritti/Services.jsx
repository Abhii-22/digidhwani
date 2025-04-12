import { useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  Database,
  Layout,
  Smartphone,
  Server,
  ShieldCheck,
  Cloud,
  Cpu,
  BarChart,
  Globe,
  Layers,
  Settings,
} from "lucide-react"

const ServicesComponent = () => {
  const [activeTab, setActiveTab] = useState("web")

  const services = {
    web: [
      {
        icon: <Layout />,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies and frameworks.",
      },
      {
        icon: <Globe />,
        title: "E-Commerce Solutions",
        description: "Scalable online stores with secure payment gateways and inventory management.",
      },
      {
        icon: <Layers />,
        title: "Progressive Web Apps",
        description: "Fast, reliable, and engaging web applications that work offline.",
      },
    ],
    mobile: [
      {
        icon: <Smartphone />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      {
        icon: <Settings />,
        title: "App Maintenance",
        description: "Ongoing support, updates, and optimization for existing mobile applications.",
      },
      {
        icon: <ShieldCheck />,
        title: "Secure Authentication",
        description: "Implement biometric, social, and multi-factor authentication systems.",
      },
    ],
    enterprise: [
      {
        icon: <Database />,
        title: "CRM Solutions",
        description: "Custom customer relationship management systems tailored to your business needs.",
      },
      {
        icon: <Server />,
        title: "ERP Systems",
        description: "Enterprise resource planning solutions to streamline your business operations.",
      },
      {
        icon: <BarChart />,
        title: "Business Intelligence",
        description: "Data analytics and reporting tools to make informed business decisions.",
      },
    ],
    cloud: [
      {
        icon: <Cloud />,
        title: "Cloud Migration",
        description: "Seamlessly migrate your existing systems to secure cloud infrastructure.",
      },
      {
        icon: <Cpu />,
        title: "DevOps Solutions",
        description: "Continuous integration and deployment pipelines for faster development cycles.",
      },
      {
        icon: <Code />,
        title: "API Development",
        description: "Robust and scalable APIs to connect your systems and enable third-party integrations.",
      },
    ],
  }

  const tabs = [
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "enterprise", label: "Enterprise Solutions" },
    { id: "cloud", label: "Cloud & DevOps" },
  ]

  return (
    <section id="services" className="py-20 mt-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Comprehensive Software Solutions</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We offer a wide range of software development services to help businesses transform their digital presence
            and operations.
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
                  ? "bg-amber-100 text-amber-600 shadow-lg shadow-amber-600/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit mb-4">
                <div className="text-customBlue dark:text-blue-400">{service.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/techvritti#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-amber-100 text-amber-600 font-medium rounded-full hover:bg-amber-700 hover:text-white transition-colors duration-200"
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

export default ServicesComponent

