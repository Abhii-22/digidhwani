import gif from "@/assets/loop_glow.gif"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-32">
      {/* <div className="hero-gradient absolute inset-0 z-0"></div> */}
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/*GIF with reduced height */}
          <div className="rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              src={gif} 
              alt="Medini Technologies Innovation" 
              className="w-full h-96 object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <span className="text-primary">About Us</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">Our Story</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold tracking-tight">
              Innovating <span className="text-customBlue font-serif">Technology</span> Solutions Since 2008
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Medini Technologies has been a trusted partner for businesses seeking to leverage technology for growth. For over a decade, we have continued to innovate and deliver exceptional solutions, driven by a commitment to our client's long-term success.
            </p>
            
            {/* <div className="pt-2">
              <button className="inline-flex items-center justify-center rounded-md bg-customBlue px-5 py-2.5 text-white hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}