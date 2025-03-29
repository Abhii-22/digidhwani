import React from 'react';
import BackgroundImage from '@/assets/IMAGES/medini_award.jpeg';

export function TimelineSection() {
    const milestones = [
      {
        year: "FY13",
        title: "Company Founded",
        description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM FY 13"
      },
      {
        year: "FY14",
        title: "Cloud Services Launch",
        description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM."
      },
      {
        year: "FY15 & FY16",
        description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC & AUTODESK CERTIFICATION PROGRAM"
      },
      {
        year: "2017-18",
        description: "AWARDED OUTSTANDING PERFORMANCE & LASTING CONTRIBUTION TO BENTLEY PRODUCT TRAINING PROGRAM YEAR"
      },
      {
        year: "2022-23",
        description: "AWARDED FOR OUTSTANDING PERFORMANCE - TRAINING PARTNER BENTLEY SYSTEMS"
      },
      {
        year: "FY 24",
        description: "AWARDED GOLD MEDAL FOR FY 24 FOR PROMOTING DIGITAL TRANSFORMATION TO ACADEMIA BY AUTODESK & D TECH"
      },
      {
        year: "FY 24",
        description: "AWARDED STAR PERFORMER FOR FY 24 TO TAKE DIGITAL TRANSFORMATION IN MANUFACTURING TO ACADEMIA BY AUTODESK D TECH"
      },
      {
        year: "FY 23 & FY 24",
        description: "AWARDED FOR OUTSTANDING PERFORMANCE - TRAINING PARTNER BENTLEY SYSTEMS FY 23 & FY 24"
      }
    ];

    return (
      <section 
        className="relative py-24 overflow-hidden bg-gray-50 dark:bg-gray-900"
      >
        <div className="container relative z-10 mt-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-black dark:text-white mb-6 leading-tight">
              Celebrating <span className="">Excellence</span>
              <br />
              Our Prestigious <span className="text-amber-600 dark:text-amber-400 font-serif font-bold">
                Awards & Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl shadow-sm">
              A journey of innovation, dedication, and recognition. From our founding to becoming an industry leader, 
              these milestones reflect our commitment to excellence and continuous growth.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line with subtle gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 
              bg-gradient-to-b from-gray-200/30 via-gray-300/50 to-gray-200/30 
              dark:from-gray-700/30 dark:via-gray-600/50 dark:to-gray-700/30 opacity-50">
            </div>

            <div className="space-y-12 relative">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
                    ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}
                    bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm 
                    rounded-xl shadow-lg hover:shadow-xl transition-shadow 
                    border border-gray-200 dark:border-gray-700 p-6`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                    <div className="space-y-3">
                      <div className="inline-block rounded-full 
                        bg-customBlue/10 dark:bg-customBlue/20 
                        px-4 py-1 text-sm font-semibold 
                        text-customBlue dark:text-white">
                        {milestone.year}
                      </div>
                      <p className="text-lg text-gray-900 dark:text-white 
                        font-medium bg-gray-100/50 dark:bg-gray-900/30 
                        p-3 rounded-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`}>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute left-0 right-0 h-px 
                        bg-gray-200 dark:bg-gray-700"></div>
                      <div className="relative z-10 w-12 h-12 rounded-full 
                        bg-customBlue text-white flex items-center 
                        justify-center font-bold shadow-md">
                        {index + 1}
                      </div>
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

export default TimelineSection;