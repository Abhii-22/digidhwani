import { CheckCircleIcon, ServerIcon , LaptopIcon, Smartphone } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100%" 
          height="100%" 
          className="text-blue-200"
        >
          <defs>
            <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M0 0 L100 0 L100 100 L0 100 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Transform Your Business with <span className="text-customBlue font-roboto">Cutting-Edge Software Solutions</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            <span className='font-bold font-roboto text-2xl text-orange-800'>Techvritti</span> delivers comprehensive software services tailored to accelerate your business growth and digital transformation.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: LaptopIcon, text: 'Web Development' },
              { icon: Smartphone, text: 'Mobile Apps' },
              { icon: ServerIcon, text: 'Enterprise Solutions' },
              { icon: CheckCircleIcon, text: 'Custom CRM/ERP' }
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Icon className="h-6 w-6 text-blue-500" />
                <span className="text-gray-700">{text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <a 
              href="#services" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 400 300" 
              className="w-full h-auto"
            >
              <rect x="50" y="50" width="300" height="200" rx="10" fill="#E6F2FF" />
              <rect x="70" y="70" width="260" height="160" fill="white" />
              <circle cx="100" cy="90" r="10" fill="#FF6B6B" />
              <circle cx="120" cy="90" r="10" fill="#4ECDC4" />
              <rect x="90" y="120" width="220" height="80" fill="#F0F4F8" />
              <rect x="110" y="140" width="180" height="40" fill="#CBD5E1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;