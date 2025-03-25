export function PartnersSection() {
    return (
      <section className="py-20 bg-muted/50 mx-auto">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Technology Partners</h2>
            <p className="text-muted-foreground">
              We collaborate with leading technology providers to deliver comprehensive solutions that meet our clients'
              needs.
            </p>
          </div>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-card rounded-lg border shadow-sm">
                <img
                  src="/placeholder.svg?height=60&width=120"
                  alt={`Partner ${index + 1}`}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  