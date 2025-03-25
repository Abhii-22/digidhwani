"use client"
import { Link } from "react-router-dom"
import { useTheme } from "../ThemeProvider"
import image from "@/assets/IMAGES/getty-images-6GuiqlhtJFE-unsplash.jpg";

export function CtaSection() {
  const { theme } = useTheme()

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl animated-gradient">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-70"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-100 neon-text">
                  Ready to Transform Your Business with Cutting-Edge Technology?
                </h2>
                <p className="text-gray-300 text-lg max-w-md">
                  Partner with Medini Technologies to unlock innovation, drive growth, and stay ahead of the competition
                  in today's digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group relative inline-flex h-12 items-center justify-center rounded-full bg-blue-700 text-gray-300 px-8 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:shadow-white/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    <span className="absolute -z-10 inset-0 rounded-full bg-blue-900 blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></span>
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  >
                    Explore Solutions
                  </Link>
                </div>
              </div>
              <div className="relative scale-in">
                <div className="relative z-10 rounded-lg glass p-1 shadow-2xl border border-white/10">
                  <div className="rounded-md overflow-hidden">
                  <img
                    src={`${image}?height=400&width=600`}
                    alt="Technology Dashboard"
                    className="w-full h-auto"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// export default CtaSection

