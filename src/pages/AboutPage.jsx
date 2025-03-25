import { AboutHero } from "@/components/about/AboutHero"
import { MissionSection } from "@/components/about/MissionSection"
import { PartnersSection } from "@/components/about/PartnersSection"
import { TeamSection } from "@/components/about/TeamSection"
import { TimelineSection } from "@/components/about/TimelineSection"

function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <TimelineSection />
      <PartnersSection />
    </div>
  )
}

export default AboutPage

