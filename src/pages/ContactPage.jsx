import { ContactForm } from "@/components/contact/ContactForm"
import { ContactInfo } from "@/components/contact/ContactInfo"
import { MapSection } from "@/components/contact/MapSelection"

function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto px-4 py-16 md:py-24 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <MapSection />
    </div>
  )
}

export default ContactPage

