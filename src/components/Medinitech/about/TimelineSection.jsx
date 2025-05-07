import React, { useState } from 'react';
import { ChevronRight, Award, Calendar, Info } from 'lucide-react';

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const milestones = [
    {
      year: "FY13",
      title: "Company Founded",
      description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM FY 13",
      icon: "award"
    },
    {
      year: "FY14",
      title: "Cloud Services Launch",
      description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM.",
      icon: "cloud"
    },
    {
      year: "FY15 & FY16",
      title: "Dual Excellence Recognition",
      description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC & AUTODESK CERTIFICATION PROGRAM",
      icon: "award"
    },
    {
      year: "2017-18",
      title: "Bentley Systems Honor",
      description: "AWARDED OUTSTANDING PERFORMANCE & LASTING CONTRIBUTION TO BENTLEY PRODUCT TRAINING PROGRAM YEAR",
      icon: "star"
    },
    {
      year: "2022-23",
      title: "Training Excellence",
      description: "AWARDED FOR OUTSTANDING PERFORMANCE - TRAINING PARTNER BENTLEY SYSTEMS",
      icon: "award"
    },
    {
      year: "FY 24",
      title: "Digital Transformation Gold",
      description: "AWARDED GOLD MEDAL FOR FY 24 FOR PROMOTING DIGITAL TRANSFORMATION TO ACADEMIA BY AUTODESK & D TECH",
      icon: "medal"
    },
    {
      year: "FY 24",
      title: "Manufacturing Excellence",
      description: "AWARDED STAR PERFORMER FOR FY 24 TO TAKE DIGITAL TRANSFORMATION IN MANUFACTURING TO ACADEMIA BY AUTODESK D TECH",
      icon: "star"
    },
    {
      year: "FY 23 & FY 24",
      title: "Consecutive Excellence",
      description: "AWARDED FOR OUTSTANDING PERFORMANCE - TRAINING PARTNER BENTLEY SYSTEMS FY 23 & FY 24",
      icon: "award"
    }
  ];

  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'award':
        return <Award className="w-6 h-6" />;
      case 'star':
        return <Award className="w-6 h-6" />;
      case 'medal':
        return <Award className="w-6 h-6" />;
      case 'cloud':
        return <Info className="w-6 h-6" />;
      default:
        return <Calendar className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute top-1/2 -right-16 w-80 h-80 rounded-full bg-amber-400 blur-3xl"></div>
        <div className="absolute -bottom-16 left-1/3 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium tracking-wider uppercase">
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of innovation, dedication, and recognition in the industry. These milestones reflect our commitment to excellence and continuous growth.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-amber-500 rounded-full"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg z-20 flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                  <div className="text-white text-xs font-bold"></div>
                </div>
                
                {/* Content card */}
                <div 
                  className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} transition-all duration-300 ease-in-out ${activeIndex === index ? "scale-105" : "scale-100"}`}
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all p-6 border-l-4 ${activeIndex === index ? "border-amber-500" : "border-blue-500"}`}>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                          {renderIcon(milestone.icon)}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                          {milestone.title || `Achievement ${index + 1}`}
                        </h3>
                      </div>
                      <div className="flex items-center px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-semibold">
                        {milestone.year}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300">
                      {milestone.description}
                    </p>
                    
                    {activeIndex === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                        <button 
                          className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                          onClick={() => setActiveIndex(null)}
                        >
                          Close <ChevronRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default TimelineSection