import { AboutHero } from "@/components/Medinitech/about/AboutHero"
import { MissionSection } from "@/components/Medinitech/about/MissionSection"
import { PartnersSection } from "@/components/Medinitech/about/PartnersSection"
import { TimelineSection } from "@/components/Medinitech/about/TimelineSection"

function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <MissionSection />
      {/* <TimelineSection /> */}
      <PartnersSection />
    </div>
  )
}

export default AboutPage

