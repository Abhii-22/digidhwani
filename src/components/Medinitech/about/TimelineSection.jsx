export function TimelineSection() {
    const milestones = [
      {
        year: "FY13",
        title: "Company Founded",
        description:
          "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM FY 13"
        },
      {
        year: "FY14",
        title: "Cloud Services Launch",
        description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC PROGRAM .",
      },
      {
        year: "FY15 & FY16",
        description: "AWARDED FOR OUTSTANDING AND EXCEPTIONAL INITIATIVES TOWARDS AUTODESK ATC & Autodesk CERTIFICATION PROGRAM"
      },
      {
        year: "2017-18",
        description: "Awarded Outstanding Performance & Lasting Contribution to Bentley Product Training Program Year"
      },
      {
        year: "2022-23",
        description: "Awarded For Outstanding Performance - Training Partner Bentley Systems"
      },
      {
        year: "FY 24",
        description: "Awarded Gold Medal for the FY 24 for Promoting Digital Transformation to Academia by Autodesk & D Tech"
      },
      {
        year: "FY 24",
        description: "Awarded Star performer for FY 24 to take Digital Transformation in Manufacturing to Academia By Autodesk D Tech"
      },
      {
        year: "FY 23 & FY 24",
        description: "Awarded For Outstanding Performance - Training Partner Bentley Systems FY 23 & FY 24"
      }
      
    ]
  
    return (
      <section className="py-20 mx-auto  dark:bg-gray-900 mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Celebrating Excellence <br/> Our <span className="text-customBlue text-5xl font-bold font-serif">Awards & Achievements</span></h2>
            <p className="text-muted-foreground">
              From our humble beginnings to becoming an industry leader, explore the key milestones that have shaped our
              company.
            </p>
          </div>
  
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border"></div>
  
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`${index % 2 === 0 ? "md:text-right" : "md:order-2"}`}>
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {milestone.year}
                      </div>
                      {/* <h3 className="text-xl font-semibold">{milestone.title}</h3> */}
                      <p className="text-xl">{milestone.description}</p>
                    </div>
                  </div>
  
                  <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : ""}`}>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute left-0 right-0 h-px bg-border"></div>
                      <div className="relative z-10 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
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
    )
  }
  
  