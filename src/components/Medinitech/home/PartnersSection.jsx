import React, { useEffect, useState } from "react";

// Import actual partner logos
import autodeskLogo from "@/assets/Logos/autodesk-learning-partner-logo-rgb-black.png";
import bentleyLogo from "@/assets/Logos/Bentley-Training-Partner-Logo.png";
import sketchUpLogo from "@/assets/Logos/Sketchup_Colour.png";
import chaosLogo from "@/assets/Logos/Chaos_idHNVPKG7k_0.svg";
import ptcLogo from "@/assets/Logos/ptc_logo.jpeg";

// Import new partner logos
import bmsLogo from "@/assets/Logos/BMS.jpg";
import jdschoolLogo from "@/assets/Logos/JDSCHOOL.jpg";
import pesitLogo from "@/assets/Logos/PESIT.jpg";
import ramaiaLogo from "@/assets/Logos/RAMAIAH-INSTITUTE-OF-TECHNOLOGY.png";

function PartnersSection() {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [scrollPosition3, setScrollPosition3] = useState(0);
  const [scrollPosition4, setScrollPosition4] = useState(0);

  // Partner data for column 1 (moving up)
  const partnersColumn1 = [
    {
      id: 1,
      name: "Autodesk",
      logo: autodeskLogo,
    },
    {
      id: 2,
      name: "Bentley Systems",
      logo: bentleyLogo,
    },
    {
      id: 3,
      name: "SketchUp",
      logo: sketchUpLogo,
    },
    {
      id: 4,
      name: "Chaos",
      logo: chaosLogo,
    },
    {
      id: 5,
      name: "PTC",
      logo: ptcLogo,
    },
    // Duplicate to create a continuous scroll effect
    {
      id: 6,
      name: "Autodesk",
      logo: autodeskLogo,
    },
    {
      id: 7,
      name: "Bentley Systems",
      logo: bentleyLogo,
    }
  ];

  // Partner data for column 2 (moving down)
  const partnersColumn2 = [
    {
      id: 8,
      name: "SketchUp",
      logo: sketchUpLogo,
    },
    {
      id: 9,
      name: "Chaos",
      logo: chaosLogo,
    },
    {
      id: 10,
      name: "PTC",
      logo: ptcLogo,
    },
    {
      id: 11,
      name: "Autodesk",
      logo: autodeskLogo,
    },
    {
      id: 12,
      name: "Bentley Systems",
      logo: bentleyLogo,
    },
    // Duplicate to create a continuous scroll effect
    {
      id: 13,
      name: "SketchUp",
      logo: sketchUpLogo,
    },
    {
      id: 14,
      name: "Chaos",
      logo: chaosLogo,
    }
  ];
  
  // Partner data for column 3 (moving up) - New educational partners
  const partnersColumn3 = [
    {
      id: 15,
      name: "BMS College of Engineering",
      logo: bmsLogo,
    },
    {
      id: 16,
      name: "JD School of Design",
      logo: jdschoolLogo,
    },
    {
      id: 17,
      name: "PES Institute of Technology",
      logo: pesitLogo,
    },
    {
      id: 18,
      name: "Ramaiah Institute of Technology",
      logo: ramaiaLogo,
    },
    // Duplicate to create a continuous scroll effect
    {
      id: 19,
      name: "BMS College of Engineering",
      logo: bmsLogo,
    },
    {
      id: 20,
      name: "JD School of Design",
      logo: jdschoolLogo,
    }
  ];

  // Partner data for column 4 (moving down) - New educational partners
  const partnersColumn4 = [
    {
      id: 21,
      name: "PES Institute of Technology",
      logo: pesitLogo,
    },
    {
      id: 22,
      name: "Ramaiah Institute of Technology",
      logo: ramaiaLogo,
    },
    {
      id: 23,
      name: "BMS College of Engineering",
      logo: bmsLogo,
    },
    {
      id: 24,
      name: "JD School of Design",
      logo: jdschoolLogo,
    },
    // Duplicate to create a continuous scroll effect
    {
      id: 25,
      name: "PES Institute of Technology",
      logo: pesitLogo,
    },
    {
      id: 26,
      name: "Ramaiah Institute of Technology",
      logo: ramaiaLogo,
    }
  ];

  // Create continuous vertical scrolling effects in opposite directions
  useEffect(() => {
    // Column 1 scrolling up continuously
    const scrollInterval1 = setInterval(() => {
      setScrollPosition1((prevPosition) => {
        const newPosition = prevPosition + 0.02; // Much slower scrolling speed
        // When reaching threshold, reset position but maintain smooth transition
        return newPosition > 100 ? 0 : newPosition;
      });
    }, 16); // Using 16ms for smoother animation

    // Column 2 scrolling down continuously
    const scrollInterval2 = setInterval(() => {
      setScrollPosition2((prevPosition) => {
        const newPosition = prevPosition + 0.02; // Much slower scrolling speed
        // When reaching threshold, reset position but maintain smooth transition
        return newPosition > 100 ? 0 : newPosition;
      });
    }, 16); // Using 16ms for smoother animation

    // Column 3 scrolling up continuously
    const scrollInterval3 = setInterval(() => {
      setScrollPosition3((prevPosition) => {
        const newPosition = prevPosition + 0.02; // Much slower scrolling speed
        // When reaching threshold, reset position but maintain smooth transition
        return newPosition > 100 ? 0 : newPosition;
      });
    }, 16); // Using 16ms for smoother animation

    // Column 4 scrolling down continuously
    const scrollInterval4 = setInterval(() => {
      setScrollPosition4((prevPosition) => {
        const newPosition = prevPosition + 0.02; // Much slower scrolling speed
        // When reaching threshold, reset position but maintain smooth transition
        return newPosition > 100 ? 0 : newPosition;
      });
    }, 16); // Using 16ms for smoother animation

    return () => {
      clearInterval(scrollInterval1);
      clearInterval(scrollInterval2);
      clearInterval(scrollInterval3);
      clearInterval(scrollInterval4);
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-12">
          {/* Left side: Title and description */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Trusted by 100+ Leaders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
              At Medini Technologies, we thrive through strong alliances with technology partners, strategic collaborators, and leading institutes. Together, we drive digital transformation in construction—optimizing operations, enhancing customer experiences, and accelerating innovation.
            </p>
          </div>
          
          {/* Right side: Four columns of vertically scrolling logos in opposite directions */}
          <div className="md:w-1/2">
            <div className="flex gap-2">
              {/* Column 1 - Moving Up Continuously */}
              <div className="w-1/4 overflow-hidden relative h-[400px] bg-white dark:bg-gray-900">
                {/* First set of logos */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(-${scrollPosition1}%)` }}
                >
                  {partnersColumn1.map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${100 - scrollPosition1}%)` }}
                >
                  {partnersColumn1.map((partner) => (
                    <div
                      key={`dup-${partner.id}`}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 2 - Moving Down Continuously */}
              <div className="w-1/4 overflow-hidden relative h-[400px] bg-white dark:bg-gray-900">
                {/* First set of logos */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${scrollPosition2}%)` }}
                >
                  {partnersColumn2.map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${-100 + scrollPosition2}%)` }}
                >
                  {partnersColumn2.map((partner) => (
                    <div
                      key={`dup-${partner.id}`}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 3 - Moving Up Continuously - Educational Partners */}
              <div className="w-1/4 overflow-hidden relative h-[400px] bg-white dark:bg-gray-900">
                {/* First set of logos */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(-${scrollPosition3}%)` }}
                >
                  {partnersColumn3.map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${100 - scrollPosition3}%)` }}
                >
                  {partnersColumn3.map((partner) => (
                    <div
                      key={`dup-${partner.id}`}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Column 4 - Moving Down Continuously - Educational Partners */}
              <div className="w-1/4 overflow-hidden relative h-[400px] bg-white dark:bg-gray-900">
                {/* First set of logos */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${scrollPosition4}%)` }}
                >
                  {partnersColumn4.map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-400 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Duplicate set for seamless looping */}
                <div 
                  className="flex flex-col gap-4 absolute w-full transition-transform duration-1000 ease-linear" 
                  style={{ transform: `translateY(${-100 + scrollPosition4}%)` }}
                >
                  {partnersColumn4.map((partner) => (
                    <div
                      key={`dup-${partner.id}`}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg border border-amber-300 dark:border-amber-700 transition-all duration-300 w-full h-32 mx-auto my-4"
                    >
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-16 max-w-[80%] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;