import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header2"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
// import ServicesPage from "./pages/ServicesPage"
// import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              {/* <Route path="/blog" element={<BlogPage />} /> */}
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

