import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({ submitted: true, success: true, message: "Thank you! Your message has been sent successfully." })

    // Reset form after successful submission
    if (formStatus.success) {
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact information */}
            <div>
              <div className="mb-12">
                <div className="inline-block px-3 py-1 text-sm font-medium text-amber-600 bg-amber-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400 mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Let's Discuss Your Project</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  Have a project in mind? Contact us today and let's create something amazing together. Our team is
                  ready to help you transform your ideas into reality.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    title: "Email Us",
                    content: "info@techvritti.com",
                    link: "mailto:connect@medini.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    title: "Call Us",
                    content: "+91 123-456-7890",
                    link: "tel:+911234567890",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    title: "Visit Us",
                    content: "No. 2943/E,3rd Floor, 40, Service Rd, opposite Shri Maruthi Mandira, Hosahalli Extension, Vijayanagar, Bengaluru, Karnataka 560040",
                    link: "https://maps.google.com",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="p-3 rounded-full bg-amber-50 dark:bg-blue-900/20 text-amber-600 dark:text-blue-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700"
            >
              {formStatus.submitted && (
                <div
                  className={`mb-6 p-4 rounded-lg ${formStatus.success ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-400"}`}
                >
                  <div className="flex items-center">
                    {formStatus.success ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2" />
                    )}
                    <p>{formStatus.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-customBlue hover:bg-customBlue/95 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

