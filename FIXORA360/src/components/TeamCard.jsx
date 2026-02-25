import React from 'react'
import './TeamCard.css'

const TeamCard = ({ name, role, description, image, delay = 0 }) => {
  const initials = name.split(' ').map(n => n[0]).join('')

  return (
    <div 
      className="team-card fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="team-avatar">
        {image ? (
          <img src={image} alt={name} className="team-avatar-image" />
        ) : (
          <span className="team-initials">{initials}</span>
        )}
      </div>
      <h3 className="team-name">{name}</h3>
      <p className="team-role">{role}</p>
      <p className="team-description">{description}</p>
    </div>
  )
}

export default TeamCard

