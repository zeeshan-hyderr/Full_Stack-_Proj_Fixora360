import React, { useState } from 'react'
import { FiSearch, FiFilter, FiPackage, FiChevronDown } from 'react-icons/fi'
import MaterialCard from '../../components/MaterialCard'
import './Marketplace.css'

const Materials = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    supplier: 'all'
  })

  const materials = [
    {
      id: 1,
      name: 'Premium Cement (50kg)',
      category: 'Cement',
      price: 'PKR 1,200',
      unit: 'per bag',
      supplier: 'Lucky Cement',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      verified: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Steel Rebar (Grade 60)',
      category: 'Steel',
      price: 'PKR 280,000',
      unit: 'per ton',
      supplier: 'Agha Steel',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      verified: true,
      inStock: true
    },
    {
      id: 3,
      name: 'Ceramic Tiles (2x2)',
      category: 'Tiles',
      price: 'PKR 450',
      unit: 'per sq ft',
      supplier: 'Master Tiles',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
      verified: true,
      inStock: true
    },
    {
      id: 4,
      name: 'PVC Pipes (4 inch)',
      category: 'Plumbing',
      price: 'PKR 850',
      unit: 'per meter',
      supplier: 'Sufi Pipes',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      rating: 4.6,
      verified: true,
      inStock: true
    },
    {
      id: 5,
      name: 'Electrical Wires (Copper)',
      category: 'Electrical',
      price: 'PKR 1,500',
      unit: 'per meter',
      supplier: 'Pak Elektron',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      verified: true,
      inStock: true
    },
    {
      id: 6,
      name: 'Paint (Premium)',
      category: 'Paint',
      price: 'PKR 3,500',
      unit: 'per gallon',
      supplier: 'ICI Paints',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      verified: true,
      inStock: true
    }
  ]

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filters.category === 'all' || material.category === filters.category
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="marketplace-page">
      <section className="marketplace-hero">
        <div className="container">
          <div className="marketplace-hero-content fade-in-up">
            <FiPackage className="marketplace-hero-icon" />
            <h1 className="marketplace-title">Construction Materials</h1>
            <p className="marketplace-subtitle">
              Source quality construction materials from verified suppliers
            </p>
          </div>
        </div>
      </section>

      <section className="section marketplace-search-section">
        <div className="container">
          <div className="search-filters-container">
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search materials by name or category..."
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
                <label>Category</label>
                <select 
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="Cement">Cement</option>
                  <option value="Steel">Steel</option>
                  <option value="Tiles">Tiles</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Paint">Paint</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Price Range</label>
                <select 
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under PKR 1,000</option>
                  <option value="mid">PKR 1,000 - 5,000</option>
                  <option value="high">Above PKR 5,000</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section marketplace-content-section">
        <div className="container">
          <div className="results-header">
            <h2 className="results-count">
              {filteredMaterials.length} Materials Available
            </h2>
          </div>
          <div className="marketplace-grid">
            {filteredMaterials.map(material => (
              <MaterialCard key={material.id} {...material} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Materials

