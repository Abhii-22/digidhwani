import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header3.jsx"
import Footer from "./components/Footer.jsx"
import { ThemeProvider } from "./components/ThemeProvider.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import "./index.css"

// DigiDhvani Pages
import DigiDhvaniHome from "./pages/DigiDhvani/Home.jsx"
import AboutPage from "./pages/DigiDhvani/AboutPage.jsx"
import ContactPage from "./pages/DigiDhvani/ContactPage.jsx"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 mt-10">
            <ScrollToTop />
            <Routes>
              {/* DigiDhvani Routes */}
              <Route path="/" element={<DigiDhvaniHome />} />
              <Route path="/digidhvani" element={<DigiDhvaniHome />} />
              <Route path="/digidhvani/about" element={<AboutPage />} />
              <Route path="/digidhvani/contact" element={<ContactPage />} />
              
              {/* Redirect any unknown routes to DigiDhvani home */}
              <Route path="*" element={<DigiDhvaniHome />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

