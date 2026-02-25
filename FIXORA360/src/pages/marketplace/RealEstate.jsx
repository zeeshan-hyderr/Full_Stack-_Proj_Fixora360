import React, { useState } from 'react'
import { FiSearch, FiFilter, FiMapPin, FiHome, FiStar, FiChevronDown } from 'react-icons/fi'
import PropertyCard from '../../components/PropertyCard'
import './Marketplace.css'

const RealEstate = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    location: 'all',
    bedrooms: 'all'
  })

  const properties = [
    {
      id: 1,
      title: 'Modern 3-Bedroom House',
      location: 'Karachi, Sindh',
      price: 'PKR 45,000,000',
      type: 'House',
      bedrooms: 3,
      bathrooms: 2,
      area: '2500 sq ft',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
      rating: 4.8,
      verified: true
    },
    {
      id: 2,
      title: 'Luxury Apartment',
      location: 'Lahore, Punjab',
      price: 'PKR 25,000,000',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: '1800 sq ft',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      rating: 4.9,
      verified: true
    },
    {
      id: 3,
      title: 'Plot for Sale',
      location: 'Islamabad',
      price: 'PKR 8,500,000',
      type: 'Plot',
      bedrooms: 0,
      bathrooms: 0,
      area: '500 sq yards',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      rating: 4.7,
      verified: true
    },
    {
      id: 4,
      title: 'Spacious Villa',
      location: 'Karachi, Sindh',
      price: 'PKR 75,000,000',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4500 sq ft',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop',
      rating: 5.0,
      verified: true
    },
    {
      id: 5,
      title: 'Studio Apartment',
      location: 'Lahore, Punjab',
      price: 'PKR 12,000,000',
      type: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      area: '800 sq ft',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
      rating: 4.6,
      verified: true
    },
    {
      id: 6,
      title: 'Commercial Plot',
      location: 'Sukkur, Sindh',
      price: 'PKR 15,000,000',
      type: 'Plot',
      bedrooms: 0,
      bathrooms: 0,
      area: '1000 sq yards',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      rating: 4.5,
      verified: true
    }
  ]

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filters.type === 'all' || property.type === filters.type
    const matchesLocation = filters.location === 'all' || property.location.includes(filters.location)
    
    return matchesSearch && matchesType && matchesLocation
  })

  return (
    <div className="marketplace-page">
      {/* Hero Section */}
      <section className="marketplace-hero">
        <div className="container">
          <div className="marketplace-hero-content fade-in-up">
            <FiHome className="marketplace-hero-icon" />
            <h1 className="marketplace-title">Real Estate Marketplace</h1>
            <p className="marketplace-subtitle">
              Find your dream property from verified listings across Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section marketplace-search-section">
        <div className="container">
          <div className="search-filters-container">
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search properties by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <button 
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter /> Filters <FiChevronDown className={showFilters ? 'rotated' : ''} />
            </button>
          </div>

          {showFilters && (
            <div className="filters-panel fade-in">
              <div className="filter-group">
                <label>Property Type</label>
                <select 
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Location</label>
                <select 
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Sukkur">Sukkur</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Price Range</label>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under PKR 20M</option>
                  <option value="mid">PKR 20M - 50M</option>
                  <option value="high">Above PKR 50M</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section marketplace-content-section">
        <div className="container">
          <div className="results-header">
            <h2 className="results-count">
              {filteredProperties.length} Properties Found
            </h2>
          </div>
          <div className="marketplace-grid">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealEstate

