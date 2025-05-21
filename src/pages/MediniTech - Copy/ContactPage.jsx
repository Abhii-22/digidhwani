import Contact from "@/components/Medinitech/contact/Contact"
import { ContactForm } from "@/components/Medinitech/contact/ContactForm"
import { ContactHero } from "@/components/Medinitech/contact/ContactHero"
import { ContactInfo } from "@/components/Medinitech/contact/ContactInfo"
import { MapSection } from "@/components/Medinitech/contact/MapSelection"

function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
        <Contact />
      <MapSection />
    </div>
  )
}

export default ContactPage

