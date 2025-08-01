import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"
import logo from "@/assets/Logos/Medini_logo.png"

const Header = () => {
  const location = useLocation()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showLinks, setShowLinks] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToServices = (e) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToHome = (e) => {
    e.preventDefault()
    window.scrollTo({ 
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToAbout = (e) => {
    e.preventDefault()
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Remove scroll-based visibility changes to keep header fixed
  useEffect(() => {
    // Keep header always visible
    setShowLinks(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      <motion.nav
        className="bg-customBlue text-white"
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex items-center justify-between p-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Medini" className="h-14 mr-2" />
          </Link>

                     {/* Desktop Navigation */}
           <div className="hidden md:flex items-center space-x-4">
             
             <a
               href="https://wa.me/919686311005?text=Hi! I'm interested in your digital marketing services. Can you help me get started?"
               target="_blank"
               rel="noopener noreferrer"
               className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
             >
               Get Started
             </a>
           </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
                <div
                  className={`absolute w-5 h-0.5 bg-current transition-all duration-500 ${
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></div>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" onInteractOutside={() => setIsMobileMenuOpen(false)}>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
                             <div className="space-y-4 mt-4">
                 <Button variant="outline" className="w-full">
                   <SheetTrigger asChild className="md:hidden">
                     <button onClick={scrollToHome}>Home</button>
                   </SheetTrigger>
                 </Button>
                 <Button variant="outline" className="w-full">
                   <SheetTrigger asChild className="md:hidden">
                     <button onClick={scrollToServices}>Services</button>
                   </SheetTrigger>
                 </Button>
                 <Button variant="outline" className="w-full">
                   <SheetTrigger asChild className="md:hidden">
                     <button onClick={scrollToAbout}>About</button>
                   </SheetTrigger>
                 </Button>
                 <Button variant="outline" className="w-full">
                   <SheetTrigger asChild className="md:hidden">
                     <button onClick={scrollToContact}>Contact</button>
                   </SheetTrigger>
                 </Button>
                 <a
                   href="https://wa.me/919686311005?text=Hi! I'm interested in your digital marketing services. Can you help me get started?"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center block"
                 >
                   Get Started
                 </a>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

             {/* Links */}
       <div className="hidden bg-[#406d6e] text-white shadow-md md:flex">
         <div className="container mx-auto overflow-x-auto hide-scrollbar">
           <div className="flex items-center gap-6 py-3 px-4 min-w-max">
             <div className="nav-item">
               <button onClick={scrollToHome}>Home</button>
             </div>
             <div className="nav-item">
               <button onClick={scrollToServices}>Services</button>
             </div>
             <div className="nav-item">
               <button onClick={scrollToAbout}>About</button>
             </div>
             <div className="nav-item">
               <button onClick={scrollToContact}>Contact</button>
             </div>
           </div>
         </div>
       </div>

             {/* Spacer to push content below the header */}
       <div className="h-28"></div>
    </header>
  )
}

export default Header
