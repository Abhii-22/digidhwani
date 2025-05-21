import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header3"
import Footer from "./components/Footer"
import HomePage from "./pages/MediniTech/HomePage"
// import ServicesPage from "./pages/ServicesPage"
// import BlogPage from "./pages/BlogPage"
import ContactPage from "./pages/MediniTech/ContactPage"
import { ThemeProvider } from "./components/ThemeProvider"
import "./index.css"
import AboutPage from "./pages/MediniTech/AboutPage"
import BlogPage from "./pages/MediniTech/BlogPage"
import AwardsPage from "./pages/MediniTech/AwardsPage"
import Home from "./pages/MediniSchool/Home"
import ChatBot from "./components/Chatbot"
import BIMHome from "./pages/BIM/Home"
import TechvrittiHome from "./pages/TechVritti/Home"
import CourseDetailsPage from "./components/MediniSchool/CourseDetailsPage"
import TeamechHome from "./pages/TeaMech/Home"
import EduphygitalHome from "./pages/Eduphygital/Home"
import DigiDhvaniHome from "./pages/DigiDhvani/Home"
import BuilddSpaceHome from "./pages/BuilddSpace/Home"
import BimServicesComponent from "./components/BIM/Services"
import ServicesComponent from "./components/TechVritti/Services"
import TeamechServicesComponent from "./components/Teamech/Services"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 mt-10">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />

              <Route path="/mediniedutech" element={<Home />} />
              <Route path="/mediniedutech/about" element={<AboutPage />} />
              <Route path="/mediniedutech/contact" element={<ContactPage />} />
              <Route path="/mediniedutech/courses/:courseName" element={<CourseDetailsPage />} />
              <Route path="/bim_construct" element={<BIMHome />} />
              <Route path="/bim_construct/about" element={<AboutPage/>} />
              <Route path="/bim_construct/contact" element={<ContactPage/>} />
              <Route path="/bim_construct/services" element={<BimServicesComponent/>} />
              <Route path="/techvritti" element={<TechvrittiHome />} />
              <Route path="/techvritti/services" element={<ServicesComponent />} />
              <Route path="/techvritti/about" element={<AboutPage />} />
              <Route path="/techvritti/contact" element={<ContactPage />} />
              <Route path="/teamech" element={<TeamechHome />} />
              <Route path="/teamech/services" element={<TeamechServicesComponent />} />
              <Route path="/teamech/about" element={<AboutPage />} />
              <Route path="/teamech/contact" element={<ContactPage />} />
              
              <Route path="/eduphygital" element={<EduphygitalHome />} />
              <Route path="/eduphygital/about" element={<AboutPage />} />
              <Route path="/eduphygital/contact" element={<ContactPage />} />
              
              <Route path="/digidhvani" element={<DigiDhvaniHome />} />
              <Route path="/digidhvani/about" element={<AboutPage />} />
              <Route path="/digidhvani/contact" element={<ContactPage />} />
              
              <Route path="/builddspace" element={<BuilddSpaceHome />} />
              <Route path="/builddspace/about" element={<AboutPage />} />
              <Route path="/builddspace/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />

          {/* <ChatBot /> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

