function TestimonialsSection() {
    const testimonials = [
      {
        quote:
          "Medini Technologies transformed our business operations with their innovative solutions. Their team's expertise and dedication exceeded our expectations.",
        author: "Sarah Johnson",
        title: "CTO, Global Enterprises",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "Working with Medini has been a game-changer for our healthcare system. Their solutions have improved patient care and operational efficiency.",
        author: "Dr. Michael Chen",
        title: "Director of IT, Metro Health",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        quote:
          "The cloud migration project delivered by Medini was flawless. Their attention to detail and technical expertise is unmatched in the industry.",
        author: "Robert Williams",
        title: "VP of Engineering, TechFin Solutions",
        image: "/placeholder.svg?height=100&width=100",
      },
    ]
  
    return (
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground">
              Hear what our clients have to say about their experience working with Medini Technologies.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border shadow-sm rounded-lg">
                <div className="p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary/40 mb-4"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                  <p className="mb-6 italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="rounded-full w-12 h-12 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default TestimonialsSection
  
  