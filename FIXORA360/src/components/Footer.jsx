import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin, FiArrowRight, FiHome, FiTool, FiLayers, FiMessageCircle } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo-wrapper">
              <h3 className="footer-logo">Fixora<span className="logo-accent">360</span></h3>
              <div className="logo-underline"></div>
            </div>
            <p className="footer-tagline">Your Home, From Foundation to Finish</p>
            <p className="footer-description">
              Pakistan's first all-in-one real estate, construction, interior design, and material sourcing digital platform.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FiFacebook />
                <span className="social-tooltip">Facebook</span>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <FiTwitter />
                <span className="social-tooltip">Twitter</span>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FiInstagram />
                <span className="social-tooltip">Instagram</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <FiLinkedin />
                <span className="social-tooltip">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">
              <span>Quick Links</span>
              <div className="heading-underline"></div>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <FiArrowRight className="link-icon" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FiArrowRight className="link-icon" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FiArrowRight className="link-icon" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FiArrowRight className="link-icon" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FiArrowRight className="link-icon" />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">
              <span>Our Services</span>
              <div className="heading-underline"></div>
            </h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/marketplace/real-estate">
                  <FiHome className="link-icon" />
                  <span>Real Estate</span>
                </Link>
              </li>
              <li>
                <Link to="/marketplace/materials">
                  <FiTool className="link-icon" />
                  <span>Construction Materials</span>
                </Link>
              </li>
              <li>
                <Link to="/marketplace/professionals">
                  <FiLayers className="link-icon" />
                  <span>Hire Professionals</span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <FiLayers className="link-icon" />
                  <span>Interior Design</span>
                </Link>
              </li>
              <li>
                <Link to="/chatbot">
                  <FiMessageCircle className="link-icon" />
                  <span>AI Consultancy</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-heading">
              <span>Contact Info</span>
              <div className="heading-underline"></div>
            </h4>
            <ul className="contact-info">
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <FiMapPin className="contact-icon" />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">Sukkur, Sindh, Pakistan</span>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <FiPhone className="contact-icon" />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Phone</span>
                  <a href="tel:+923121340916" className="contact-value">+92 312 1340916</a>
                </div>
              </li>
              <li className="contact-item">
                <div className="contact-icon-wrapper">
                  <FiMail className="contact-icon" />
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:manziabbas512@gmail.com" className="contact-value">manziabbas512@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} <strong>Fixora360</strong>. All rights reserved.</p>
            <p className="copyright-subtext">Transforming Pakistan's construction ecosystem</p>
          </div>
          <div className="footer-legal">
            <Link to="#" className="legal-link">Privacy Policy</Link>
            <span className="legal-separator">•</span>
            <Link to="#" className="legal-link">Terms of Service</Link>
            <span className="legal-separator">•</span>
            <Link to="#" className="legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

