import { BlogHero } from "@/components/Medinitech/blog/BlogHero"
import BlogGrid from "@/components/Medinitech/blog/BlogGrid"
import NewsletterSection from "@/components/Medinitech/blog/NewsLetter"

function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <BlogHero />
      <BlogGrid />
      <NewsletterSection />
    </div>
  )
}

export default BlogPage

