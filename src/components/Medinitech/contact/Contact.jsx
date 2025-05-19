import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    location: 'vijayanagar'
  });

  const [activeLocation, setActiveLocation] = useState("vijayanagar");

  const locations = {
    vijayanagar: {
      name: "Vijayanagar (Main Branch)",
      address: "#189, 18th Cross Opposite to Metro Station(Exit A), Vijayanagar, Bengaluru, Karnataka 560040",
      phone: "(+91) 99000 81006",
      email: "connect@medini.in"
    },
    gulbarga: {
      name: "Gulbarga Branch",
      address: "#1-105/2 & 12A, Paradise Building,PDACE Road, Kalaburagi, Karnataka 585102",
      phone: "(+91) 9686201005",
      email: "connect@medini.in"
    },
    belgavi: {
      name: "Belgaum Branch",
      address: "+497, Medini Technologies, South End Block, Jnana Sangama, VTU Main Rd,Visvesvaraya Technological University, Machhe, Belgavi, Karnataka 590018",
      phone: "(+91) 87654 32109",
      email: "connect@medini.in"
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleServiceChange = (e) => {
    setFormData(prev => ({
      ...prev,
      service: e.target.value
    }));
  };

  const handleLocationChange = (locationKey) => {
    setActiveLocation(locationKey);
    setFormData(prev => ({
      ...prev,
      location: locationKey
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    alert("form submitted");
  };

  return (
    <div className="min-h-screen bg-background px-4">
      {/* Header Section */}
      <header className="bg-customBlue text-primary-foreground rounded-lg">
        <div className="container mx-auto px-4 py-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl text-white font-bold mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl text-gray-300 mx-auto"
          >
            Have an idea in mind or want to discuss how we can help your business grow? 
            Fill out the form below, and our team will get back to you soon.
          </motion.p>
        </div> 
      </header>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-card border rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
          
          {/* Custom Location Tabs */}
          <div className="mb-8">
            <div className="grid grid-cols-3 gap-2 mb-6">
              {Object.keys(locations).map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocationChange(loc)}
                  className={`py-2 px-4 text-center rounded-md transition-colors ${
                    activeLocation === loc 
                      ? "bg-customBlue text-white" 
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800"
                  }`}
                >
                  {locations[loc].name.split(' ')[0]}
                </button>
              ))}
            </div>
            
            {/* Content for active location */}
            <div className="p-4 bg-muted/30 rounded-lg mb-4">
              <h3 className="text-lg font-bold mb-2">{locations[activeLocation].name}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <span>{locations[activeLocation].address}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{locations[activeLocation].phone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{locations[activeLocation].email}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-muted/20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 8:30 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-card border rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <div className="space-y-4">
            <div>
              <input 
                id="name" 
                placeholder="Your Name" 
                required 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                id="email" 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input 
                id="phone" 
                placeholder="Your Phone Number (Optional)" 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                id="service"
                value={formData.service}
                onChange={handleServiceChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue appearance-none bg-white"
              >
                <option value="" disabled>Select a Service</option>
                <option value="consulting">Strategic Consulting</option>
                <option value="development">Custom Software Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="data">Data & Analytics</option>
                <option value="security">Cybersecurity</option>
                <option value="ai">AI & Machine Learning</option>
              </select>
            </div>
            <div>
              <select
                id="location"
                value={formData.location}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue appearance-none bg-white"
              >
                <option value="vijayanagar">Vijayanagar (Main Branch)</option>
                <option value="gulbarga">Gulbarga Branch</option>
                <option value="belgavi">Belgavi Branch</option>
              </select>
            </div>
            <div>
              <textarea 
                id="message" 
                placeholder="Tell us about your project or inquiry..." 
                rows={5} 
                required 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-900 dark:bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button 
              type="submit" 
              className="w-full group bg-customBlue py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              <span className="flex text-white items-center justify-center">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;