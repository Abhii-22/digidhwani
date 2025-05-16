"use client"
import { Link } from "react-router-dom"
import { useTheme } from "../../ThemeProvider"
import image from "@/assets/IMAGES/getty-images-6GuiqlhtJFE-unsplash.jpg";

export function CtaSection() {
  const { theme } = useTheme()

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
          <div className="absolute inset-0 bg-slate-400 dark:bg-slate-600 opacity-20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                  animationDelay: `${Math.random() * 10}s`,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              ></div>
            ))}
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                  Ready to Transform Your Business with us?
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg max-w-md text-justify">
                  Partner with Medini Technologies to unlock innovation, drive growth, and stay ahead of the competition
                  in today's digital landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="group relative inline-flex h-12 items-center justify-center rounded-full bg-slate-500 text-white px-8 py-3 text-base font-medium shadow-lg transition-all duration-300 hover:bg-slate-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute -z-10 inset-0 rounded-full bg-slate-600 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></span>
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
                </div>
              </div>
              <div className="relative scale-in">
                <div className="relative z-10 rounded-lg bg-white/10 p-1 shadow-xl border border-white/5">
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