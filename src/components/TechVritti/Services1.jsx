import React from 'react';
import {CodeIcon,SmartphoneIcon , ServerIcon , ChartBarIcon , DatabaseIcon, Cuboid} from "lucide-react"

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:-translate-y-2 hover:shadow-xl">
    <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
      <Icon className="h-10 w-10 text-blue-600" />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-blue-500" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <a 
      href="#contact" 
      className="block w-full text-center bg-customBlue text-white py-2 rounded-lg  transition-colors"
    >
      Get Started
    </a>
  </div>
);

const ServicesPage = () => {
  const services = [
    {
      icon: CodeIcon,
      title: 'Web Development',
      description: 'Responsive, scalable web solutions that drive your online presence.',
      features: [
        'Custom Website Design',
        'Full-Stack Development',
        'E-commerce Platforms',
        'Performance Optimization'
      ]
    },
    {
      icon: SmartphoneIcon,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile apps that engage and delight your users.',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'UI/UX Design',
        'App Store Deployment'
      ]
    },
    {
      icon: ServerIcon,
      title: 'Enterprise Solutions',
      description: 'Robust software that streamlines your business operations.',
      features: [
        'Custom Enterprise Software',
        'Cloud Integration',
        'Scalable Architecture',
        'Security Compliance'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'CRM Development',
      description: 'Customer relationship management systems tailored to your needs.',
      features: [
        'Sales Tracking',
        'Customer Insights',
        'Workflow Automation',
        'Reporting & Analytics'
      ]
    },
    {
      icon: DatabaseIcon,
      title: 'ERP Solutions',
      description: 'Comprehensive enterprise resource planning systems.',
      features: [
        'Financial Management',
        'Inventory Control',
        'HR & Payroll',
        'Supply Chain Management'
      ]
    },
    {
      icon: Cuboid,
      title: 'Custom Software',
      description: 'Unique software solutions built from the ground up.',
      features: [
        'Tailored Development',
        'Integration Services',
        'Ongoing Support',
        'Scalable Solutions'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Comprehensive Software Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end software solutions that transform your business vision into reality, leveraging cutting-edge technologies and innovative approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;