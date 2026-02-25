import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMapPin, FiStar, FiCheck, FiUser, FiBriefcase } from 'react-icons/fi'
import './ProfessionalCard.css'

const ProfessionalCard = ({ id, name, profession, location, rating, reviews, experience, image, verified, specialties, projects, hourlyRate }) => {
  const navigate = useNavigate()

  const handleViewProfile = () => {
    navigate(`/marketplace/professionals/${id}`)
  }

  return (
    <div className="professional-card fade-in-up">
      {verified && (
        <div className="verified-badge">
          <FiCheck /> Verified
        </div>
      )}
      <div className="professional-header">
        <div className="professional-avatar">
          <img src={image} alt={name} />
        </div>
        <div className="professional-info">
          <h3 className="professional-name">{name}</h3>
          <div className="professional-profession">
            <FiBriefcase />
            <span>{profession}</span>
          </div>
        </div>
      </div>
      <div className="professional-content">
        <div className="professional-location">
          <FiMapPin />
          <span>{location}</span>
        </div>
        <div className="professional-stats">
          <div className="stat-item">
            <FiStar className="stat-icon" />
            <span className="stat-value">{rating}</span>
            <span className="stat-label">({reviews} reviews)</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{experience}</span>
            <span className="stat-label">experience</span>
          </div>
          {projects && (
            <div className="stat-item">
              <span className="stat-value">{projects}+</span>
              <span className="stat-label">projects</span>
            </div>
          )}
        </div>
        {hourlyRate && (
          <div className="professional-rate">
            <span className="rate-label">Starting from:</span>
            <span className="rate-value">{hourlyRate}/hr</span>
          </div>
        )}
        <div className="professional-specialties">
          <span className="specialties-label">Specialties:</span>
          <div className="specialties-tags">
            {specialties.map((specialty, index) => (
              <span key={index} className="specialty-tag">{specialty}</span>
            ))}
          </div>
        </div>
        <button className="btn btn-primary btn-view-profile" onClick={handleViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  )
}

export default ProfessionalCard

