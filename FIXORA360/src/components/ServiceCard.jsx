import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import './ServiceCard.css'

const ServiceCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <div 
      className="service-card fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <Link to={link} className="service-link">
        Learn More <FiArrowRight />
      </Link>
    </div>
  )
}

export default ServiceCard

