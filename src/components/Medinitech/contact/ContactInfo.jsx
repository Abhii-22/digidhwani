import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-8">
          Have questions or ready to start your next project? Reach out to our team through any of the channels below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Our Headquarters</h3>
            <p className="text-muted-foreground">
            No. 2943/E, 3rd Floor, 40, Service Rd, <br />
            opposite Shri Maruthi Mandira, Hosahalli Extension, <br />
            Vijayanagar, Bengaluru, Karnataka 560040
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-muted-foreground">
              Main: +91 9900081006 
              <br />
              Support: +1 (555) 987-6543
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">
              General Inquiries: info@medini.in
              <br />
              Connect: connect@medinitechnologies.in
              <br />
              {/* Sales: sales@medinitech.com */}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM PST
              <br />
              Saturday - Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

