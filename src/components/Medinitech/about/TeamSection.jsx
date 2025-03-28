import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Github } from "lucide-react"
import { Link } from "react-router-dom"

export function TeamSection() {
  const team = [
    {
      name: "Alex Morgan",
      title: "CEO & Founder",
      bio: "With over 20 years of experience in technology leadership, Alex founded Medini Technologies with a vision to transform how businesses leverage technology.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Samantha Chen",
      title: "CTO",
      bio: "Samantha leads our technical strategy and innovation initiatives, bringing extensive experience in cloud architecture and enterprise solutions.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Wilson",
      title: "VP of Engineering",
      bio: "David oversees our engineering teams, ensuring we deliver high-quality solutions that meet our clients' complex technical requirements.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Priya Sharma",
      title: "Director of AI & ML",
      bio: "Priya leads our artificial intelligence and machine learning initiatives, helping clients leverage data-driven insights for business growth.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Leadership Team</h2>
          <p className="text-muted-foreground">
            Our diverse team of experts brings together decades of experience in technology, business strategy, and
            industry-specific knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-card border shadow-sm overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <Link href={member.social.linkedin} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href={member.social.twitter} className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href={member.social.github} className="text-muted-foreground hover:text-primary">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

