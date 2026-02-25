import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiTool, FiLayers, FiMessageCircle, FiCheck, FiStar, FiArrowRight } from 'react-icons/fi'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import './Home.css'

const Home = () => {
  const services = [
    {
      icon: <FiHome />,
      title: 'Real Estate Services',
      description: 'Verified agents, property listings, legal due diligence, and seamless plot & home purchasing.',
      link: '/marketplace/real-estate'
    },
    {
      icon: <FiTool />,
      title: 'Construction & Materials',
      description: 'Material sourcing marketplace with verified architects, engineers, and contractors.',
      link: '/marketplace/materials'
    },
    {
      icon: <FiLayers />,
      title: 'Interior Design',
      description: 'Portfolio showcase of designers. Hire for consultation or full projects.',
      link: '/services'
    },
    {
      icon: <FiMessageCircle />,
      title: 'AI Consultancy Bot',
      description: '24/7 guidance, budget planning, permit guidance, and FAQs on construction + real estate.',
      link: '/chatbot'
    }
  ]

  const features = [
    'All-in-one platform for real estate, construction, and design',
    'Verified and vetted professionals',
    'AI-powered consultancy available 24/7',
    'Transparent pricing and reviews',
    'Legal due diligence support',
    'Material sourcing marketplace'
  ]

  const steps = [
    { number: '01', title: 'Sign Up', description: 'Create your account in minutes' },
    { number: '02', title: 'Explore', description: 'Browse properties, materials, or professionals' },
    { number: '03', title: 'Connect', description: 'Connect with verified agents and professionals' },
    { number: '04', title: 'Consult AI', description: 'Get instant guidance from our AI consultant' },
    { number: '05', title: 'Complete', description: 'Complete your project with confidence' }
  ]

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Property Buyer',
      rating: 5,
      text: 'Fixora360 made finding my dream home so easy. The verified agents and legal support gave me complete confidence.'
    },
    {
      name: 'Sara Ali',
      role: 'Homeowner',
      rating: 5,
      text: 'The material marketplace saved me so much time and money. Highly recommend for anyone building a home.'
    },
    {
      name: 'Hassan Malik',
      role: 'Business Owner',
      rating: 5,
      text: 'The AI consultant helped me understand construction permits and budgeting. This platform is revolutionary!'
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Fixora<span className="logo-accent">360</span>
            </h1>
            <p className="hero-tagline">Your Home, From Foundation to Finish</p>
            <p className="hero-description">
              Pakistan's first fully integrated platform for real estate, construction materials, 
              architects, engineers, contractors, and interior designers—all in one place.
            </p>
            <div className="hero-cta">
              <Link to="/services" className="btn btn-primary btn-large">
                Get Started
              </Link>
              <Link to="/marketplace/real-estate" className="btn btn-secondary btn-large">
                Explore Services
              </Link>
              <Link to="/chatbot" className="btn btn-secondary btn-large">
                Consult AI Bot
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Why Fixora360 Section */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Fixora360?</h2>
          <p className="section-subtitle">
            We solve the fragmented construction and real estate ecosystem in Pakistan by bringing 
            everything together in one trusted platform.
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FiCheck className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Four powerful pillars that cover every aspect of your home journey
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section how-it-works-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in five simple steps
          </p>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && <div className="step-connector"><FiArrowRight /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by homeowners, buyers, and professionals across Pakistan
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build Your Dream Home?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust Fixora360 for their real estate and construction needs.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Get In Touch
              </Link>
              <Link to="/chatbot" className="btn btn-secondary btn-large">
                Try AI Consultant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

