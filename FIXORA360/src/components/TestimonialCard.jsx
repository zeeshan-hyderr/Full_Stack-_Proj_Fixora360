import React from 'react'
import { FiStar } from 'react-icons/fi'
import './TestimonialCard.css'

const TestimonialCard = ({ name, role, rating, text }) => {
  return (
    <div className="testimonial-card fade-in-up">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <FiStar key={i} className="star filled" />
        ))}
      </div>
      <p className="testimonial-text">"{text}"</p>
      <div className="testimonial-author">
        <div className="author-avatar">
          {name.charAt(0)}
        </div>
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

