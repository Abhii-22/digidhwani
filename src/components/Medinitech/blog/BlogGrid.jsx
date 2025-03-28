import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function BlogGrid() {
  const posts = [
    {
      title: "The Future of BIM: How Digital Twins Are Transforming Construction",
      excerpt: "Explore how Building Information Modeling (BIM) and digital twins are enhancing efficiency, reducing costs, and improving project management in modern construction.",
      category: "BIM for Construction",
      date: "March 26, 2025",
      author: "John Anderson",
      image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg",
    },
    {
      title: "Revit vs. AutoCAD: Which One Should You Learn for AEC?",
      excerpt: "A comparison of Revit and AutoCAD, their use cases in architecture, engineering, and construction, and how professionals can leverage them for better design workflows.",
      category: "AEC",
      date: "March 18, 2025",
      author: "Sophia Lee",
      image: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg",
    },
    {
      title: "How SOLIDWORKS and Fusion 360 Are Revolutionizing Product Design",
      excerpt: "A deep dive into SOLIDWORKS vs. Fusion 360, their strengths in product design, and which one suits your manufacturing needs.",
      category: "Product Design",
      date: "March 10, 2025",
      author: "David Martinez",
      image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
    },
    {
      title: "Smart Cities: How Civil 3D and InfraWorks Are Shaping Urban Development",
      excerpt: "Learn how Civil 3D and InfraWorks are transforming urban planning, transportation networks, and smart city development.",
      category: "Infrastructure",
      date: "March 5, 2025",
      author: "Emma Wilson",
      image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg",
    },
    {
      title: "Water Infrastructure Planning with Bentley’s WaterGEMS & SewerGEMS",
      excerpt: "How WaterGEMS and SewerGEMS help engineers design efficient water distribution and wastewater management systems.",
      category: "Water Services",
      date: "February 28, 2025",
      author: "Liam Patel",
      image: "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg",
    },
    {
      title: "The Rise of BIM for Construction: Why It’s a Game-Changer",
      excerpt: "Learn how BIM for Construction is improving collaboration, cost estimation, and risk management on large construction sites.",
      category: "BIM for Construction",
      date: "February 20, 2025",
      author: "Olivia Chen",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
    }
  ];
  

  return (
    <section className="py-20 bg-gray-300 bg-gradient-to-br dark:from-slate-700 dark:to-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="bg-card border shadow-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">By {post.author}</span>
                  <Button asChild variant="ghost" size="sm" className="gap-1">
                    <Link href="/blog/post">
                      Read More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div> */}
      </div>
    </section>
  )
}


export default BlogGrid;