import Contact from "@/components/Medinitech/contact/Contact"
import { ContactHero } from "@/components/Medinitech/contact/ContactHero"

function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <ContactHero />
        <Contact />
      {/* <MapSection /> */}
    </div>
  )
}

export default ContactPage

