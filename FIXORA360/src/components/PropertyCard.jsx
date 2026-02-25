import React from 'react'
import { FiMapPin, FiHome, FiStar, FiCheck } from 'react-icons/fi'
import './PropertyCard.css'

const PropertyCard = ({ title, location, price, type, bedrooms, bathrooms, area, image, rating, verified }) => {
  return (
    <div className="property-card fade-in-up">
      {verified && (
        <div className="verified-badge">
          <FiCheck /> Verified
        </div>
      )}
      <div className="property-image">
        <img 
          src={image || `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop`} 
          alt={title}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop`
          }}
        />
        <div className="property-type-badge">{type}</div>
        <div className="image-overlay"></div>
      </div>
      <div className="property-content">
        <h3 className="property-title">{title}</h3>
        <div className="property-location">
          <FiMapPin />
          <span>{location}</span>
        </div>
        <div className="property-details">
          {bedrooms > 0 && (
            <span className="detail-item">
              <FiHome /> {bedrooms} Bed
            </span>
          )}
          {bathrooms > 0 && (
            <span className="detail-item">{bathrooms} Bath</span>
          )}
          <span className="detail-item">{area}</span>
        </div>
        <div className="property-footer">
          <div className="property-price">{price}</div>
          <div className="property-rating">
            <FiStar className="star-icon" />
            <span>{rating}</span>
          </div>
        </div>
        <button className="btn btn-primary btn-view-details">
          View Details
        </button>
      </div>
    </div>
  )
}

export default PropertyCard

