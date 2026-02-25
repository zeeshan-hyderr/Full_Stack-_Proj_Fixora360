import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnimationObserver from './components/AnimationObserver'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import RealEstate from './pages/marketplace/RealEstate'
import Materials from './pages/marketplace/Materials'
import Professionals from './pages/marketplace/Professionals'
import ProfessionalProfile from './pages/marketplace/ProfessionalProfile'
import ProfessionalDashboard from './pages/ProfessionalDashboard'
import MaterialSupplierDashboard from './pages/MaterialSupplierDashboard'
import RealEstateAgentDashboard from './pages/RealEstateAgentDashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import Chatbot from './pages/Chatbot'
import { observeElements } from './utils/scrollAnimation'
import './App.css'

function App() {
  useEffect(() => {
    const observer = observeElements()
    return () => {
      // Cleanup if needed
    }
  }, [])

  try {
    console.log('App component rendering')
    
    return (
      <Router>
        <ScrollToTop />
        <AnimationObserver />
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/marketplace/real-estate" element={<RealEstate />} />
              <Route path="/marketplace/materials" element={<Materials />} />
              <Route path="/marketplace/professionals" element={<Professionals />} />
              <Route path="/marketplace/professionals/:id" element={<ProfessionalProfile />} />
              <Route path="/dashboard/professional" element={<ProfessionalDashboard />} />
              <Route path="/dashboard/material-supplier" element={<MaterialSupplierDashboard />} />
              <Route path="/dashboard/real-estate-agent" element={<RealEstateAgentDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chatbot" element={<Chatbot />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    )
  } catch (error) {
    console.error('Error in App component:', error)
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Error loading app</h1>
        <p>{error.toString()}</p>
      </div>
    )
  }
}

export default App

