import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message with form data
    const message = `New Contact Form Submission:%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `${formData.phone ? `*Phone:* ${encodeURIComponent(formData.phone)}%0A` : ''}` +
      `*Message:* ${encodeURIComponent(formData.message)}`;
    
    // Phone number from contact info
    const phoneNumber = '919686311005';
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="bg-white px-4 py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-customBlue mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">XGCP+9J3, MRCR Layout, MC Layout, Vijayanagar, Bengaluru, Karnataka 560040</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-customBlue flex-shrink-0" />
              <span className="text-gray-700 text-sm">(+91) 99000 81006</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-customBlue flex-shrink-0" />
              <span className="text-gray-700 text-sm">connect@medini.in</span>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-1 text-gray-800 text-sm">Business Hours</h3>
            <p className="text-gray-700 text-sm">Monday - Saturday: 9:00 AM - 8:30 PM</p>
            <p className="text-gray-700 text-sm">Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Send Us a Message</h2>
          <div className="space-y-3">
            <div>
              <Input 
                id="name" 
                placeholder="Your Name" 
                required 
                className="w-full bg-white border-gray-300 focus:border-customBlue focus:ring-1 focus:ring-customBlue text-sm h-10"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full bg-white border-gray-300 focus:border-customBlue focus:ring-1 focus:ring-customBlue text-sm h-10"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Input 
                id="phone" 
                type="tel"
                placeholder="Your Phone Number (Optional)" 
                className="w-full bg-white border-gray-300 focus:border-customBlue focus:ring-1 focus:ring-customBlue text-sm h-10"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <Textarea 
                id="message" 
                placeholder="Tell us about your project or inquiry..." 
                rows={4} 
                required 
                className="w-full bg-white border-gray-300 focus:border-customBlue focus:ring-1 focus:ring-customBlue text-sm"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-customBlue hover:bg-customBlue/90 text-white py-2 text-sm mt-2"
            >
              <span className="flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;