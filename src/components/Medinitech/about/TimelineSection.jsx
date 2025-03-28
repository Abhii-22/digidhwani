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
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 mt-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
              Celebrating <span className="text-gray-200 ">Excellence</span>
              <br />
              Our Prestigious <span className="text-amber-400 text-6xl font-cursive font-bold">Awards & Achievements</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto bg-black/30 p-4 rounded-xl">
              A journey of innovation, dedication, and recognition. From our founding to becoming an industry leader, 
              these milestones reflect our commitment to excellence and continuous growth.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line with subtle gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-white/30 via-white/50 to-white/30 opacity-50"></div>

            <div className="space-y-12 relative">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center 
                    ${index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"}
                    bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-white/20`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                    <div className="space-y-3">
                      <div className="inline-block rounded-full bg-customBlue/20 px-4 py-1 text-sm font-semibold text-white">
                        {milestone.year}
                      </div>
                      <p className="text-lg text-white font-medium bg-black/40 p-3 rounded-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`}>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute left-0 right-0 h-px bg-white/30"></div>
                      <div className="relative z-10 w-12 h-12 rounded-full bg-customBlue flex items-center justify-center text-white font-bold shadow-md">
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