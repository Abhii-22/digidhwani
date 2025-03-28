export function AboutHero() {
    return (
      <section className="relative overflow-hidden">
        {/* <div className="hero-gradient absolute inset-0 z-0"></div> */}
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-primary">About Us</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Our Story</span>
            </div>
            <h1 className="text-4xl font-playfair md:text-5xl lg:text-6xl font-bold tracking-tight">
              Innovating <span className="text-customBlue font-serif">Technology</span> Solutions Since 2010
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Medini Technologies has been a trusted partner for businesses seeking to leverage technology for growth. For over a decade, we have continued to innovate and deliver exceptional solutions, driven by a commitment to our client's long-term success.  
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </section>
    )
  }
  
  