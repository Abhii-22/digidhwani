import { useState } from "react"
import { Link } from "react-router-dom"
import image1 from "@/assets/IMAGES/getty-images-ItieuN1ec0k-unsplash.jpg"
import image2 from "@/assets/IMAGES/getty-images-qk02f4TFFC4-unsplash.jpg"
import image3 from "@/assets/IMAGES/andrej-lisakov-AdZ7XYvqCn8-unsplash.jpg"
import image4 from "@/assets/IMAGES/osman-talha-dikyar-PomM7aa5m18-unsplash.jpg"

function ServicessSection() {
  const [activeTab, setActiveTab] = useState("autodesk")

  const tabs = [
    { id: "autodesk", label: "Autodesk" },
    { id: "bentley", label: "Bentley" },
    { id: "dassault", label: "Dassault" },
    { id: "manufacturing", label: "Manufacturing" },
  ]

  const tabContent = {
    autodesk: {
      title: "Autodesk Courses",
      description:
      "Our Autodesk courses provide in-depth training on industry-standard design and engineering software like AutoCAD, Revit, and Fusion 360. Whether you're in architecture, mechanical design, or 3D modeling, our courses help you master cutting-edge tools to streamline workflows and enhance creativity.",
      image: `${image1}?height=500&width=700`,
      features: [
        "AutoCAD",
        "Revit Architecture, Revit MEP",
        "Revit Structure, Revit Precast",
        "Navisworks, Infraworks",
        "Civil 3D, 3DS Max , Vehicle Tracking"
      ],
    },
    bentley: {
      title: "Bentley Systems",
      description:
      "Our Bentley Systems courses equip professionals with the expertise to design, analyze, and manage infrastructure projects using industry-leading software like MicroStation, OpenRoads, and STAAD.Pro. Gain hands-on experience in civil engineering, structural analysis, and BIM workflows to drive efficiency in large-scale projects.",
      image: `${image2}?height=500&width=700`,
      features: [
        "MicroStation",
        "Staad.Pro",
        "OpenRoads",
        "WaterGems",
        "Sewer Gems"
      ],
    },
    dassault: {
      title: "Dassault",
      description:
        "Dassault provides cutting-edge aerospace, defense, and industrial solutions, leveraging advanced engineering, digital design, and simulation technologies to drive innovation and efficiency in complex industries.",
      image: `${image3}?height=500&width=700`,
      features: [
        "Aerospace engineering and digital twin simulations",
        "Defense and security solutions for mission-critical operations",
        "3D modeling and product lifecycle management (PLM) software",
        "Advanced manufacturing and automation technologies",
      ],
    },
    
    manufacturing: {
      title: "Manufacturing Solutions",
      description:
        "Our advanced manufacturing technology solutions empower businesses to enhance production efficiency, optimize supply chains, and implement smart automation to drive innovation and competitiveness in a rapidly evolving industry.",
      image: `${image4}?height=500&width=700`,
      features: [
        "AutoCAD Mechanical",
        "AutoCAD Electrical",
        "Fusion",
        "Inventor"
      ],
    },
    
  }

  const content = tabContent[activeTab]

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Official Training Partner for Industry-Leading Software</h2>
          <p className="text-muted-foreground">
              Gain expertise with Autodesk and Bentley Systems through our popular courses, designed to elevate your skills in design, engineering and infrastructure.
          </p>
        </div>

        <div className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <div className="inline-flex items-center justify-center rounded-lg bg-muted p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-full h-auto" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{content.title}</h3>
                <p className="text-muted-foreground">{content.description}</p>
                <ul className="space-y-3">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <div className="rounded-full bg-customBlue w-1.5 h-1.5"></div>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services#${activeTab}`}
                  className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-amber-100 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicessSection

