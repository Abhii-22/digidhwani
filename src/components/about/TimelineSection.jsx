export function TimelineSection() {
    const milestones = [
      {
        year: "2010",
        title: "Company Founded",
        description:
          "Medini Technologies was established with a focus on custom software development for enterprise clients.",
      },
      {
        year: "2013",
        title: "Cloud Services Launch",
        description: "Expanded our offerings to include cloud migration and infrastructure management services.",
      },
      {
        year: "2015",
        title: "International Expansion",
        description: "Opened offices in Europe and Asia to better serve our growing global client base.",
      },
      {
        year: "2018",
        title: "AI & ML Division",
        description:
          "Launched our dedicated artificial intelligence and machine learning division to meet increasing demand.",
      },
      {
        year: "2020",
        title: "Digital Transformation Focus",
        description: "Shifted strategic focus to comprehensive digital transformation solutions for enterprise clients.",
      },
      {
        year: "2023",
        title: "Industry Recognition",
        description: "Recognized as a leader in technology innovation by multiple industry analysts and publications.",
      },
    ]
  
    return (
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
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
                      <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
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
  
  