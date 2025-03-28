
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "./ThemeProvider"
import logo from "@/assets/Logos/Medini_logo.png"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen)
  }

  const courses = [
    {
      name: "Auto-CAD",
      description: "Precision 2D and 3D computer-aided design",
      href: "/courses/autocad",
    },
    {
      name: "Revit Architecture",
      description: "Advanced BIM architectural design",
      href: "/courses/revit-architecture",
    },
    {
      name: "Revit MEP",
      description: "Mechanical, Electrical, Plumbing systems",
      href: "/courses/revit-mep",
    },
    {
      name: "Revit Structure",
      description: "Structural engineering tools",
      href: "/courses/revit-structure",
    },
    {
      name: "Revit Precast",
      description: "Precast concrete design and fabrication",
      href: "/courses/revit-precast",
    },
    {
      name: "Revit Steel Design",
      description: "Steel structure modeling and detailing",
      href: "/courses/revit-steel",
    },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isScrolled
          ? theme === "dark"
            ? "bg-black/90 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-white/90 backdrop-blur-md shadow-lg shadow-black/5"
          : theme === "dark"
            ? "bg-transparent"
            : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="flex flex-col gap-4 pt-2">
         {!isScrolled && (
          <div
          className={`container mx-auto flex h-20 items-center justify-between px-4 py-2 transition-all duration-700 ease-in-out `}
        >
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className={`rounded-lg p-1 transition-all duration-300 ${theme === "light" ? "bg-gray-800" : ""}`}>
                <img src={`${logo}?height=80&width=120`} alt="Medini Logo" className="w-auto h-20" />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                to="/contact"
                className="relative overflow-hidden inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-500 hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:shadow-lg dark:shadow-blue-700/30 group"
              >
                <span className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
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
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-background shadow-md dark:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></div>
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></div>
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></div>
            </button>
          </div>
        </div>
        )} 
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden"
                onClick={toggleCoursesDropdown}
                // onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              >
                Courses
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
                  className={`h-4 w-4 transition-transform duration-500 ${isCoursesDropdownOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
              </button>
              {isCoursesDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 rounded-xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 transform origin-top transition-all duration-300 ease-out"
                  style={{
                    animation: "dropdownFadeIn 0.3s ease forwards",
                    opacity: 0,
                    transform: "translateY(-10px)",
                  }}
                  onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                >
                  <div
                    className={`py-4 px-4 rounded-xl ${theme === "dark" ? "bg-black" : "bg-white"} backdrop-blur-lg border border-gray-200 dark:border-gray-800`}
                  >
                    <div className="grid grid-cols-2 gap-4 w-[600px]">
                      {courses.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.href}
                          className="group"
                          style={{
                            animation: `serviceItemFadeIn 0.5s ease forwards ${serviceIndex * 0.05}s`,
                            opacity: 0,
                            transform: "translateY(10px)",
                          }}
                        >
                          <div
                            className="
                            p-4 
                            rounded-xl 
                            border 
                            border-transparent 
                            hover:border-gray-200 
                            dark:hover:border-gray-700
                            hover:shadow-md 
                            transition-all 
                            duration-300 
                            ease-in-out
                            bg-gray-50 
                            dark:bg-gray-900
                            hover:bg-white 
                            dark:hover:bg-gray-800
                            transform hover:scale-105 hover:-translate-y-1
                          "
                          >
                            <div className="flex items-center">
                              <div className="mr-3 text-blue-600 dark:text-blue-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-5 w-5"
                                >
                                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
                                  {service.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-primary relative group overflow-hidden"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            </Link>
          </nav>

          {isScrolled && (
            <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                to="/contact"
                className="relative overflow-hidden inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-500 hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:shadow-lg dark:shadow-blue-700/30 group"
              >
                <span className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center">
                  Get Started
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
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-background shadow-md dark:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></div>
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></div>
              <div
                className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></div>
            </button>
          </div>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t dark:border-gray-800"
          style={{
            animation: "mobileMenuSlideDown 0.5s ease forwards",
          }}
        >
          <div className="container mx-auto py-4 flex flex-col gap-4 px-4">
            <Link
              to="/"
              className="px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.1s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.2s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.3s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.4s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 text-sm font-medium hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.5s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              Contact
            </Link>
            <div
              className="flex items-center justify-between pt-4 border-t dark:border-gray-800"
              style={{
                animation: "menuItemSlideIn 0.3s ease forwards 0.6s",
                opacity: 0,
                transform: "translateX(-20px)",
              }}
            >
              <ThemeToggle />
              <Link
                to="/contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center">
                  Get Started
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
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

