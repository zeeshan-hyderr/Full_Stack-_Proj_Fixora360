import React, { useState } from 'react'
import { FiSearch, FiFilter, FiUser, FiChevronDown } from 'react-icons/fi'
import ProfessionalCard from '../../components/ProfessionalCard'
import baharImg from '../../data/images/bahar.jpeg'
import zubairImg from '../../data/images/zubair.svg'
import './Marketplace.css'

const Professionals = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    profession: 'all',
    location: 'all',
    rating: 'all'
  })

  const professionals = [
    {
      id: 1,
      name: 'Maria Memon',
      profession: 'Architect',
      location: 'Karachi, Sindh',
      rating: 4.8,
      reviews: 112,
      experience: '4 years',
      image: 'https://i.pravatar.cc/300?img=47',
      verified: false,
      specialties: ['Working Drawings', '3D Modeling', 'Visualization'],
      projects: 35,
      hourlyRate: 'PKR 30,000',
      cnic: '41306-1391664-8',
      license: 'Not Registered',
      contact: '0313-1396386'
    },
    {
      id: 2,
      name: 'Umair Ameer',
      profession: '3D Visualization Specialist',
      location: 'Karachi, Sindh',
      rating: 4.7,
      reviews: 89,
      experience: '3 years',
      image: 'https://i.pravatar.cc/300?img=33',
      verified: false,
      specialties: ['3D Visualization', '3D Modeling'],
      projects: 28,
      hourlyRate: 'PKR 5,000-10,000',
      cnic: '45403-3055093-5',
      license: 'No',
      contact: '0341-9695556'
    },
    {
      id: 3,
      name: 'Maryam',
      profession: 'Architect & Interior Designer',
      location: 'Karachi, Sindh',
      rating: 4.9,
      reviews: 134,
      experience: '5 years',
      image: 'https://i.pravatar.cc/300?img=20',
      verified: true,
      specialties: ['Architecture', 'Interior Design'],
      projects: 40,
      hourlyRate: 'PKR 5,000',
      contact: '0305-2901761'
    },
    {
      id: 4,
      name: 'Saweera Shaikh',
      profession: 'CAD Designer & 3D Specialist',
      location: 'Karachi, Sindh',
      rating: 4.8,
      reviews: 121,
      experience: '4 years',
      image: 'https://i.pravatar.cc/300?img=45',
      verified: false,
      specialties: ['2D CAD Planning', '3D Modeling', 'Visualization'],
      projects: 32,
      hourlyRate: 'PKR 30,000',
      cnic: '41302-2076752-4',
      license: 'Not Registered',
      contact: '0323-3257896'
    },
    {
      id: 5,
      name: 'Salman Mehmood',
      profession: 'Architect',
      location: 'Karachi, Sindh',
      rating: 4.9,
      reviews: 150,
      experience: '5 years',
      image: 'https://i.pravatar.cc/300?img=15',
      verified: true,
      specialties: ['Architecture', 'Interior Design', 'Project Management'],
      projects: 45,
      hourlyRate: 'PKR 90/sq ft',
      cnic: '15502-0766814-3',
      studio: 'InspireLine Architects',
      portfolio: 'Behance (InspireLineArchitect)',
      contact: '+92 473 909301'
    }
    ,
    {
      id: 6,
      name: 'Bahar Hee',
      profession: 'Civil Engineer',
      location: 'Karachi, Sindh',
      rating: 4.6,
      reviews: 48,
      experience: '6 years',
      image: baharImg,
      verified: false,
      specialties: ['Structural Design', 'Site Supervision', 'Quality Control'],
      projects: 22,
      hourlyRate: 'PKR 40,000',
      cnic: '42101-1234567-1',
      license: 'PE Registered',
      contact: '0300-1122334',
      bio: 'Experienced civil engineer focusing on structural integrity, site coordination and quality assurance for residential and commercial builds.'
    }
    ,
    {
      id: 7,
      name: 'Zubair Ahmed',
      profession: 'Civil Engineer',
      location: 'Karachi, Sindh',
      rating: 4.6,
      reviews: 48,
      experience: '6 years',
      image: zubairImg,
      verified: false,
      specialties: ['Structural Design', 'Site Supervision', 'Quality Control'],
      projects: 22,
      hourlyRate: 'PKR 40,000',
      cnic: '42101-1234567-2',
      license: 'PE Registered',
      contact: '0300-1122335',
      bio: 'Experienced civil engineer focusing on structural integrity, site coordination and quality assurance for residential and commercial builds.'
    }
  ]

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         professional.profession.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesProfession = filters.profession === 'all' || professional.profession === filters.profession
    const matchesLocation = filters.location === 'all' || professional.location.includes(filters.location)
    
    return matchesSearch && matchesProfession && matchesLocation
  })

  return (
    <div className="marketplace-page">
      <section className="marketplace-hero">
        <div className="container">
          <div className="marketplace-hero-content fade-in-up">
            <FiUser className="marketplace-hero-icon" />
            <h1 className="marketplace-title">Hire Professionals</h1>
            <p className="marketplace-subtitle">
              Connect with verified architects, engineers, contractors, and designers
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
                placeholder="Search professionals by name or profession..."
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
                <label>Profession</label>
                <select 
                  value={filters.profession}
                  onChange={(e) => handleFilterChange('profession', e.target.value)}
                >
                  <option value="all">All Professions</option>
                  <option value="Architect">Architect</option>
                  <option value="Interior Designer">Interior Designer</option>
                  <option value="Civil Engineer">Civil Engineer</option>
                  <option value="Contractor">Contractor</option>
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
                <label>Minimum Rating</label>
                <select 
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                >
                  <option value="all">All Ratings</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.7">4.7+ Stars</option>
                  <option value="4.9">4.9+ Stars</option>
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
              {filteredProfessionals.length} Professionals Available
            </h2>
          </div>
          <div className="marketplace-grid">
            {filteredProfessionals.map(professional => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Professionals

