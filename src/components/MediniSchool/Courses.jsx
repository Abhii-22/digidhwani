import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cloud, Database, LineChart, Shield, Cpu } from "lucide-react"
import { Link } from "react-router-dom"

export function Courses() {
  const services = [
    {
      id: "aec",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "AutoCAD",
      description:
        "Expert guidance to align your technology strategy with business objectives and drive digital transformation.",
      features: [
        "Digital transformation roadmaps",
        "Technology stack assessment",
        "Process optimization",
        "IT strategy development",
      ],
    },
    {
      id: "aec",
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Revit Architecture",
      description:
        "Tailored software solutions designed to address your specific business challenges and requirements.",
      features: [
        "Web application development",
        "Mobile app development",
        "Enterprise software solutions",
        "API development and integration",
      ],
    },
    {
      id: "aec",
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Revit MEP",
      description:
        "Comprehensive cloud services to help you migrate, optimize, and manage your infrastructure in the cloud.",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code (IaC)",
        "Cloud-native application development",
        "Managed cloud services",
      ],
    },
    {
      id: "aec",
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Revit Structure	",
      description: "Transform your data into actionable insights that drive better business decisions and outcomes.",
      features: [
        "Data strategy and architecture",
        "Business intelligence solutions",
        "Data warehouse implementation",
        "Predictive analytics",
      ],
    },
    {
      id: "security",
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions designed to address modern threats.",
      features: [
        "Security assessment and planning",
        "Threat detection and response",
        "Compliance and risk management",
        "Security training and awareness",
      ],
    },
    {
      id: "ai",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI & Machine Learning",
      description:
        "Leverage the power of artificial intelligence to automate processes and gain competitive advantages.",
      features: [
        "AI strategy and implementation",
        "Machine learning models",
        "Natural language processing",
        "Computer vision solutions",
      ],
    },
  ]

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="flex justify-center text-4xl p-4 font-bold font-mono text-customBlue">ALL COURSES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="bg-card border shadow-sm">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <div className="rounded-full bg-primary w-1.5 h-1.5"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full gap-2">
                  <Link href={`/services#${service.id}`}>
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

