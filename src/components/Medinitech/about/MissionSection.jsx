import image from "@/assets/IMAGES/getty-images-82LbsqatQNA-unsplash.jpg"

export function MissionSection() {
    return (
      <section className="py-20 mx-auto bg-gray-300 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Empowering Businesses Through Innovative Technology</h2>
              <p className="text-muted-foreground">
                  To lead the transformation of individuals, academics, students, and professionals through innovative digital technology. By integrating cutting-edge tools into education and professional development. Our vision is to bridge traditional learning and digital advancements, ensuring that all stakeholders have the skills and knowledge necessary to drive progress and success across diverse industries.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    Our mission is to provide accessible and transformative digital education and professional development solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Our Values</h3>
                  <p className="text-muted-foreground">
                    Innovation, excellence, integrity, collaboration, and client success drive everything we do.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg border bg-card p-1 shadow-xl">
                <div className="rounded-md overflow-hidden">
                  <img src={`${image}?height=500&width=700`} alt="Team Collaboration" className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  