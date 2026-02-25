import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiTool, FiLayers, FiMessageCircle, FiCheck, FiArrowRight } from 'react-icons/fi'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: <FiHome />,
      title: 'Real Estate Marketplace',
      description: 'Comprehensive real estate services with verified agents and property listings.',
      features: [
        'Verified real estate agents',
        'Extensive property listings',
        'Legal due diligence support',
        'Plot & home purchasing assistance',
        'Property verification & documentation'
      ],
      link: '/marketplace/real-estate'
    },
    {
      icon: <FiTool />,
      title: 'Construction Hub',
      description: 'Find and hire trusted construction professionals and source quality materials.',
      features: [
        'Material sourcing marketplace',
        'Find architects & civil engineers',
        'Verified contractors',
        'Professional vetting system',
        'Project management tools'
      ],
      link: '/marketplace/materials'
    },
    {
      icon: <FiLayers />,
      title: 'Interior Design Studio',
      description: 'Connect with talented interior designers for consultation or full projects.',
      features: [
        'Portfolio showcase of designers',
        'Hire for consultation',
        'Full project management',
        '3D visualization',
        'Material sourcing integration'
      ],
      link: '/marketplace/professionals'
    },
    {
      icon: <FiMessageCircle />,
      title: 'AI Consultancy Bot',
      description: 'Get instant, intelligent guidance for all your construction and real estate questions.',
      features: [
        '24/7 availability',
        'Budget planning assistance',
        'Permit guidance',
        'Construction FAQs',
        'Real estate advice'
      ],
      link: '/chatbot'
    }
  ]

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content fade-in-up">
            <h1 className="services-title">Our Services</h1>
            <p className="services-subtitle">
              Comprehensive solutions for your entire home journey, from property search to final touches.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-content-section">
        <div className="container">
          <div className="services-detailed-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-detail-icon">{service.icon}</div>
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FiCheck className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="service-detail-link">
                  Explore Service <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2 className="services-cta-title">Ready to Get Started?</h2>
            <p className="services-cta-description">
              Choose a service that fits your needs, or consult our AI bot for personalized recommendations.
            </p>
            <div className="services-cta-buttons">
              <Link to="/chatbot" className="btn btn-primary btn-large">
                Consult AI Bot
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

