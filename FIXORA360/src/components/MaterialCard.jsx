import React from 'react'
import { FiPackage, FiStar, FiCheck, FiShoppingCart } from 'react-icons/fi'
import './MaterialCard.css'

const MaterialCard = ({ name, category, price, unit, supplier, rating, image, verified, inStock }) => {
  return (
    <div className="material-card fade-in-up">
      {verified && (
        <div className="verified-badge">
          <FiCheck /> Verified Supplier
        </div>
      )}
      <div className="material-image">
        <img 
          src={image || `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop`} 
          alt={name}
          onError={(e) => {
            e.target.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop`
          }}
        />
        {!inStock && <div className="out-of-stock">Out of Stock</div>}
        <div className="image-overlay"></div>
      </div>
      <div className="material-content">
        <div className="material-category">{category}</div>
        <h3 className="material-name">{name}</h3>
        <div className="material-supplier">
          <span>Supplier: {supplier}</span>
        </div>
        <div className="material-rating">
          <FiStar className="star-icon" />
          <span>{rating}</span>
        </div>
        <div className="material-footer">
          <div className="material-price">
            <span className="price">{price}</span>
            <span className="unit">{unit}</span>
          </div>
          <button className="btn btn-primary btn-add-to-cart" disabled={!inStock}>
            <FiShoppingCart /> {inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard

