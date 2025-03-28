import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CourseCard from "./CourseCard"
import coursesData from "./courses.json"

const CoursesSection = () => {
  // State to track active slide indices for each provider and category
  const [activeSlides, setActiveSlides] = useState({})

  // Initialize refs for slider containers
  const sliderRefs = useRef({})

  // Function to navigate slides
  const navigateSlide = (providerId, categoryIndex, direction) => {
    const key = `${providerId}-${categoryIndex}`
    const currentIndex = activeSlides[key] || 0
    const provider = coursesData.courseProviders.find((p) => p.id === providerId)
    const courses = provider.categories[categoryIndex].courses

    // Calculate visible cards based on screen width
    let visibleCards = 4 // default for large screens
    if (window.innerWidth < 1024) visibleCards = 2
    if (window.innerWidth < 640) visibleCards = 1

    const maxIndex = Math.max(0, courses.length - visibleCards)

    let newIndex = currentIndex + direction
    if (newIndex < 0) newIndex = 0
    if (newIndex > maxIndex) newIndex = maxIndex

    setActiveSlides({ ...activeSlides, [key]: newIndex })
  }

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-clip-text text-customBlue font-sans dark:from-blue-400 dark:to-purple-400">
          Our Professional Courses
        </h2>

        <div className="space-y-20">
          {coursesData.courseProviders.map((provider) => (
            <div key={provider.id} className="provider-section">
              <div className="flex items-center gap-4 mb-8">
                {/* {provider.logo && (
                  <img
                    src={provider.logo}
                    alt={`${provider.name || provider.id} logo`}
                    className="h-12 object-contain"
                  />
                )} */}
                <div>
                  <h3 className="text-2xl font-bold">{provider.name || provider.id}</h3>
                </div>
              </div>

              <div className="space-y-12">
                {provider.categories.map((category, categoryIndex) => {
                  const sliderKey = `${provider.id}-${categoryIndex}`
                  const currentIndex = activeSlides[sliderKey] || 0

                  return (
                    <div key={`${provider.id}-${category.name}`} className="category-section">
                      <div className="flex justify-between items-center mb-6">
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{category.name}</h4>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => navigateSlide(provider.id, categoryIndex, -1)}
                            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition ${
                              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={currentIndex === 0}
                            aria-label="Previous courses"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => navigateSlide(provider.id, categoryIndex, 1)}
                            className={`p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition ${
                              currentIndex >= category.courses.length - 4 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            disabled={currentIndex >= category.courses.length - 4}
                            aria-label="Next courses"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="overflow-hidden" ref={(el) => (sliderRefs.current[sliderKey] = el)}>
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                        >
                          {category.courses.map((course) => (
                            <div key={course.id} className="min-w-[25%] sm:min-w-[50%] lg:min-w-[25%] p-3">
                              <CourseCard 
                                course={{
                                  ...course,
                                  provider: provider.name || provider.id
                                }} 
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursesSection