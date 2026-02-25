import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiMenu, FiX, FiUsers } from 'react-icons/fi'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userType, setUserType] = useState('client')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const handleUserSwitch = (type) => {
    setUserType(type)
    setIsMobileMenuOpen(false)

    if (type === 'professional') {
      navigate('/dashboard/professional')
    } else if (type === 'material-provider') {
      navigate('/dashboard/material-supplier')
    } else if (type === 'real-estate-agent') {
      navigate('/dashboard/real-estate-agent')
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-container">
              <span className="logo-text">Fixora<span className="logo-accent">360</span></span>
              <span className="logo-tagline">From Foundation To Finish</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <span>Home</span>
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              <span>About</span>
            </Link>
            <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
              <span>Services</span>
            </Link>
            <div className="dropdown">
              <span className="nav-link dropdown-toggle">
                <span>Marketplace</span>
              </span>
              <div className="dropdown-menu">
                <Link to="/marketplace/real-estate"><span>Real Estate</span></Link>
                <Link to="/marketplace/materials"><span>Materials</span></Link>
                <Link to="/marketplace/professionals"><span>Professionals</span></Link>
              </div>
            </div>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
              <span>Contact</span>
            </Link>
            <div className="dropdown">
              <span className="nav-link dropdown-toggle">
                <FiUsers className="user-icon" />
                <span>Switch User</span>
              </span>
              <div className="dropdown-menu user-dropdown">
                <button 
                  className={`dropdown-item ${userType === 'client' ? 'active' : ''}`}
                  onClick={() => handleUserSwitch('client')}
                >
                  <span>Client</span>
                </button>
                <button 
                  className={`dropdown-item ${userType === 'professional' ? 'active' : ''}`}
                  onClick={() => handleUserSwitch('professional')}
                >
                  <span>Professional</span>
                </button>
                <button 
                  className={`dropdown-item ${userType === 'material-provider' ? 'active' : ''}`}
                  onClick={() => handleUserSwitch('material-provider')}
                >
                  <span>Material Provider</span>
                </button>
                <button 
                  className={`dropdown-item ${userType === 'real-estate-agent' ? 'active' : ''}`}
                  onClick={() => handleUserSwitch('real-estate-agent')}
                >
                  <span>Real Estate Agent</span>
                </button>
              </div>
            </div>
            <Link to="/chatbot" className="nav-link nav-cta">
              <span>AI Consultant</span>
            </Link>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

