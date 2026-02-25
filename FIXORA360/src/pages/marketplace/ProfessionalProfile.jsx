import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiMapPin, FiStar, FiPhone, FiMail, FiAward, FiBriefcase, FiCheckCircle, FiClock, FiUsers, FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import baharImg from '../../data/images/bahar.jpeg'
import zubairImg from '../../data/images/zubair.svg'
import './ProfessionalProfile.css'

const ProfessionalProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showContactMessage, setShowContactMessage] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const professionals = {
    '1': {
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
      bio: 'Experienced architect specializing in creating precise working drawings, detailed 3D models, and high-quality architectural visualizations. Committed to delivering projects that meet all architectural standards and client requirements.',
      cnic: '41306-1391664-8',
      license: 'Not Registered',
      contact: '0313-1396386',
      pricing: {
        base: 'PKR 30,000+',
        details: 'Starting from PKR 30,000 for complete architectural packages'
      },
      services: [
        { name: 'Working Drawings', description: 'Complete architectural and construction drawings as per standards' },
        { name: '3D Modeling', description: 'Detailed 3D models of residential and commercial projects' },
        { name: 'Architectural Visualization', description: 'High-quality photorealistic renders and walkthroughs' }
      ],
      portfolio: [
        { title: 'DHA Phase 8 Residential Villa', type: '3D Visualization', description: 'Complete exterior and interior visualization for a modern villa' },
        { title: 'Clifton Block 5 Apartment', type: 'Working Drawings', description: 'Architectural and structural working drawings for 3-bedroom apartment' },
        { title: 'Gulistan-e-Johar House', type: '3D Modeling', description: 'Detailed 3D model and renders for residential house renovation' },
        { title: 'North Nazimabad Commercial', type: 'Visualization', description: 'Commercial plaza exterior and interior visualization' },
        { title: 'Defence View Apartments', type: 'Complete Package', description: 'Working drawings, 3D modeling, and visualization for apartment complex' }
      ],
      pastProjects: [
        { title: 'Malir Cantt Residential Project', description: 'Complete architectural working drawings and 3D visualization for 2-story house', duration: '3 weeks', type: 'Working Drawings + Visualization' },
        { title: 'Gulshan-e-Iqbal Interior Renovation', description: 'Interior layout planning and 3D visualization for apartment renovation', duration: '2 weeks', type: '3D Modeling' },
        { title: 'Saddar Commercial Building', description: 'Architectural elevation design and detailed working drawings', duration: '4 weeks', type: 'Working Drawings' }
      ],
      clientReviews: [
        { client: 'Ahmad Raza', rating: 5, comment: 'Excellent work on our house drawings. Maria delivered everything on time and followed all architectural standards. Highly recommended!', date: 'November 2024' },
        { client: 'Fahad Malik', rating: 4.5, comment: 'Very professional approach. The 3D visualizations were exactly what we needed for our project approval. Will hire again.', date: 'October 2024' },
        { client: 'Sana Khan', rating: 5, comment: 'Great attention to detail in the working drawings. Made our construction process very smooth.', date: 'September 2024' },
        { client: 'Bilal Ahmed', rating: 4.5, comment: 'Good quality 3D models and renders. Communication was clear throughout the project.', date: 'August 2024' }
      ]
    },
    '2': {
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
      bio: 'Specialized 3D visualization artist with expertise in creating photorealistic renders for architectural and interior design projects. Focused on delivering high-quality visualizations that bring designs to life.',
      cnic: '45403-3055093-5',
      license: 'No',
      contact: '0341-9695556',
      pricing: {
        base: 'PKR 5,000-10,000',
        details: 'PKR 5,000-6,000 per visualization | PKR 8,000-10,000 per 3D model + visualization'
      },
      services: [
        { name: '3D Exterior Visualization', description: 'Photorealistic exterior renders with landscaping and environment' },
        { name: '3D Interior Visualization', description: 'Detailed interior renders with furniture, lighting, and materials' },
        { name: '3D Modeling', description: 'Complete 3D modeling services for architectural projects' },
        { name: '360° Virtual Tours', description: 'Interactive virtual walkthroughs for immersive experience' }
      ],
      portfolio: [
        { title: 'Bahria Town Karachi Villa', type: '3D Visualization', description: 'Luxury villa exterior and interior photorealistic renders' },
        { title: 'Clifton Apartment Interior', type: '3D Visualization', description: 'Modern apartment interior visualization with contemporary design' },
        { title: 'DHA Commercial Plaza', type: '3D Model + Visualization', description: 'Complete 3D modeling and visualization for commercial building' },
        { title: 'Gulshan Office Space', type: 'Interior Visualization', description: 'Corporate office interior design visualization' },
        { title: 'Karachi Marina Club', type: 'Exterior Visualization', description: 'Luxury clubhouse exterior renders with waterfront view' },
        { title: 'North Nazimabad Mosque', type: '3D Visualization', description: 'Traditional mosque architecture visualization' }
      ],
      pastProjects: [
        { title: 'DHA Phase 6 Residence', description: 'Complete exterior and interior 3D visualization for modern residence', duration: '1 week', type: '3D Visualization' },
        { title: 'Tariq Road Showroom', description: '3D modeling and visualization for retail showroom design', duration: '10 days', type: '3D Model + Visualization' },
        { title: 'Garden East Farmhouse', description: 'Luxury farmhouse exterior visualization with landscaping', duration: '1 week', type: '3D Visualization' }
      ],
      clientReviews: [
        { client: 'Zain Hassan', rating: 5, comment: 'Outstanding 3D visualization work! Umair created exactly what I envisioned. The renders helped us get client approval immediately.', date: 'November 2024' },
        { client: 'Ayesha Siddiqui', rating: 4.5, comment: 'Very good quality renders at reasonable price. Delivered on time and made revisions quickly.', date: 'October 2024' },
        { client: 'Hamza Ali', rating: 5, comment: 'Excellent 3D modeling and visualization. Very professional and responsive to feedback.', date: 'September 2024' },
        { client: 'Nadia Farooqui', rating: 4.5, comment: 'Great attention to lighting and materials. The visualizations look very realistic.', date: 'August 2024' }
      ]
    },
    '3': {
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
      bio: 'Accomplished architect and interior designer with 5 years of experience creating functional and aesthetically pleasing spaces. Specializing in residential and commercial projects with a focus on modern and contemporary design.',
      contact: '0305-2901761',
      pricing: {
        base: 'PKR 5,000/hour',
        details: 'PKR 5,000 per hour for consultation and design services'
      },
      services: [
        { name: 'Architectural Design', description: 'Complete architectural planning and design for residential and commercial projects' },
        { name: 'Interior Design', description: 'Full interior design services including space planning, material selection, and styling' },
        { name: 'Renovation Planning', description: 'Expert renovation and remodeling design for existing spaces' },
        { name: 'Design Consultation', description: 'Professional consultation for architectural and interior design decisions' }
      ],
      portfolio: [
        { title: 'Clifton Block 2 Penthouse', type: 'Interior Design', description: 'Luxury penthouse interior with modern contemporary theme' },
        { title: 'DHA Phase 7 Villa', type: 'Architecture + Interior', description: 'Complete architectural design and interior for modern villa' },
        { title: 'Zamzama Boulevard Café', type: 'Commercial Interior', description: 'Trendy café interior design with industrial aesthetic' },
        { title: 'Defence Residential House', type: 'Architecture', description: 'Contemporary residential architecture with minimalist approach' },
        { title: 'Gulshan Corporate Office', type: 'Interior Design', description: 'Professional office interior with smart space utilization' },
        { title: 'Bahria Town Apartment', type: 'Interior Renovation', description: 'Complete apartment interior renovation and redesign' }
      ],
      pastProjects: [
        { title: 'PECHS House Renovation', description: 'Complete interior renovation including living, dining, kitchen, and bedrooms', duration: '6 weeks', type: 'Interior Design' },
        { title: 'Saddar Medical Clinic', description: 'Interior design and space planning for modern medical clinic', duration: '4 weeks', type: 'Commercial Interior' },
        { title: 'North Karachi Residence', description: 'New house architectural design with traditional touch', duration: '8 weeks', type: 'Architecture' },
        { title: 'Malir Showroom', description: 'Retail showroom interior design with effective product display', duration: '3 weeks', type: 'Interior Design' }
      ],
      clientReviews: [
        { client: 'Saad Qureshi', rating: 5, comment: 'Maryam transformed our house completely! Her design sense is exceptional and she perfectly understood our requirements. Highly professional.', date: 'December 2024' },
        { client: 'Hina Tariq', rating: 5, comment: 'Best interior designer I have worked with. Creative, professional, and delivers on time. Our office looks amazing!', date: 'November 2024' },
        { client: 'Kamran Sheikh', rating: 4.5, comment: 'Excellent architectural planning. The house design is both beautiful and functional. Worth every rupee.', date: 'October 2024' },
        { client: 'Rabia Jamil', rating: 5, comment: 'Very talented designer with great taste. Made our apartment look like a magazine cover. Highly recommended!', date: 'September 2024' },
        { client: 'Faisal Abbas', rating: 5, comment: 'Professional approach and creative solutions. Delivered exactly what we wanted within budget.', date: 'August 2024' }
      ]
    },
    '4': {
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
      bio: 'Skilled CAD designer and 3D specialist with 4 years of experience in creating detailed 2D plans and 3D visualizations. Expertise in AutoCAD, SketchUp, and rendering software for architectural and interior projects.',
      cnic: '41302-2076752-4',
      license: 'Not Registered',
      contact: '0323-3257896',
      pricing: {
        base: 'PKR 30,000+',
        details: 'Starting from PKR 30,000 for complete CAD planning and visualization packages'
      },
      services: [
        { name: '2D CAD Planning', description: 'Detailed floor plans, elevations, and sections using AutoCAD' },
        { name: '3D Modeling', description: 'Accurate 3D models for architectural and interior projects' },
        { name: '3D Visualization', description: 'Photorealistic renders and presentations' },
        { name: 'As-Built Drawings', description: 'Precise as-built documentation for existing structures' }
      ],
      portfolio: [
        { title: 'Gulshan-e-Iqbal Residence', type: '2D CAD + 3D', description: 'Complete floor plans and 3D visualization for residential project' },
        { title: 'Saddar Commercial Building', type: 'CAD Planning', description: 'Detailed CAD drawings for multi-story commercial building' },
        { title: 'Defence Bungalow', type: '3D Modeling', description: 'Architectural 3D model with landscape for luxury bungalow' },
        { title: 'North Nazimabad Apartment', type: 'Interior CAD', description: 'Interior layout planning and working drawings' },
        { title: 'Clifton Office Tower', type: 'CAD + Visualization', description: 'Commercial tower CAD plans with exterior renders' }
      ],
      pastProjects: [
        { title: 'DHA Phase 5 House', description: '2D CAD floor plans and 3D visualization for residential house', duration: '3 weeks', type: '2D CAD + 3D Modeling' },
        { title: 'Bahadurabad Plaza', description: 'Complete CAD planning and documentation for commercial plaza', duration: '4 weeks', type: '2D CAD Planning' },
        { title: 'Gulshan Shop Interior', description: 'Interior CAD layout and 3D visualization for retail shop', duration: '2 weeks', type: 'CAD + 3D' },
        { title: 'Karachi University Building', description: 'As-built CAD drawings for existing university building', duration: '5 weeks', type: 'As-Built Documentation' }
      ],
      clientReviews: [
        { client: 'Imran Siddiqui', rating: 5, comment: 'Very accurate CAD drawings and beautiful 3D renders. Saweera is highly skilled and professional in her work.', date: 'November 2024' },
        { client: 'Maria Iqbal', rating: 4.5, comment: 'Excellent work on our commercial building plans. All details were perfectly captured in the CAD drawings.', date: 'October 2024' },
        { client: 'Hassan Raza', rating: 5, comment: 'Great 3D modeling and visualization. Helped us understand the design clearly before construction.', date: 'September 2024' },
        { client: 'Fatima Noor', rating: 4.5, comment: 'Professional CAD work with quick turnaround. Very responsive to changes and revisions.', date: 'August 2024' }
      ]
    },
    '5': {
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
      bio: 'Principal Architect at InspireLine Architects with 5 years of professional experience. Specializing in comprehensive architectural services, interior design, and project management for residential and commercial projects.',
      cnic: '15502-0766814-3',
      license: 'Registered Architect',
      studio: 'InspireLine Architects',
      portfolioLink: 'Behance (InspireLineArchitect)',
      contact: '+92 473 909301',
      pricing: {
        base: 'PKR 90-150/sq ft',
        details: 'Architecture: PKR 90/sq ft | Interior Design: PKR 150/sq ft | Project Management: 10% of total project cost'
      },
      services: [
        { name: 'Architectural Design', description: 'Complete architectural design services from concept to construction drawings at PKR 90/sq ft' },
        { name: 'Interior Design', description: 'Full-service interior design including space planning, furniture, and finishes at PKR 150/sq ft' },
        { name: 'Project Management', description: 'End-to-end project management services at 10% of total project cost' },
        { name: 'Consultation Services', description: 'Expert architectural and design consultation for projects' },
        { name: 'Construction Supervision', description: 'On-site supervision and quality control during construction' }
      ],
      portfolio: [
        { title: 'DHA Phase 8 Modern Villa', type: 'Architecture + Interior', description: '8,000 sq ft luxury villa with contemporary design and smart home features' },
        { title: 'Clifton Commercial Tower', type: 'Architecture + PM', description: '12-story commercial building with complete project management' },
        { title: 'Bahria Town Residence', type: 'Architecture', description: 'Traditional Pakistani architecture with modern amenities' },
        { title: 'Defence View Apartments', type: 'Architecture + Interior', description: 'Multi-unit residential complex with full design services' },
        { title: 'Zamzama Restaurant', type: 'Interior Design', description: 'Fine dining restaurant interior with elegant contemporary design' },
        { title: 'Gulshan Corporate Office', type: 'Interior + PM', description: '15,000 sq ft corporate office interior with project management' }
      ],
      pastProjects: [
        { title: 'PECHS Residential Complex', description: 'Complete architectural design and project management for 20-unit residential complex', duration: '12 months', type: 'Architecture + Project Management' },
        { title: 'Saddar Heritage Building Restoration', description: 'Restoration and renovation of historic colonial building with modern upgrades', duration: '8 months', type: 'Architecture + Interior' },
        { title: 'North Nazimabad Medical Center', description: 'Medical facility design with specialized planning for clinical spaces', duration: '6 months', type: 'Architecture + PM' },
        { title: 'Clifton Beach Front Villa', description: 'Luxury beachfront residence with contemporary design and premium finishes', duration: '10 months', type: 'Architecture + Interior + PM' }
      ],
      clientReviews: [
        { client: 'Dr. Asif Mahmood', rating: 5, comment: 'InspireLine Architects delivered exceptional work on our medical center. Salman\'s project management was outstanding, completed on time and within budget.', date: 'December 2024' },
        { client: 'Shahzad Khan', rating: 5, comment: 'Best architectural firm in Karachi! Professional, creative, and reliable. Our villa turned out even better than we imagined.', date: 'November 2024' },
        { client: 'Sadia Tariq', rating: 4.5, comment: 'Excellent interior design work. Salman has great aesthetic sense and attention to detail. Very happy with the results.', date: 'October 2024' },
        { client: 'Rehan Ahmed', rating: 5, comment: 'Highly professional approach to project management. Kept everything on track and handled all challenges smoothly. Highly recommended!', date: 'September 2024' },
        { client: 'Mariam Siddiqui', rating: 5, comment: 'Outstanding architectural design! Creative solutions, excellent communication, and timely delivery. Worth every rupee spent.', date: 'August 2024' }
      ]
    }
    ,
    '6': {
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
      bio: 'Civil engineer with extensive experience in structural detailing, site management and quality control for medium to large residential and commercial projects.',
      cnic: '42101-1234567-1',
      license: 'PE Registered',
      contact: '0300-1122334',
      pricing: {
        base: 'PKR 40,000+',
        details: 'Structural design and supervision packages starting from PKR 40,000'
      },
      services: [
        { name: 'Structural Design', description: 'Complete structural design and reinforcement detailing' },
        { name: 'Site Supervision', description: 'On-site management and contractor coordination' },
        { name: 'Quality Control', description: 'Material testing coordination and QA checks' }
      ],
      portfolio: [
        { title: 'Clifton Residential Structure', type: 'Structural Design', description: 'Detailed structural design for 500 sq yd house' },
        { title: 'DHA Commercial Block', type: 'Site Supervision', description: 'On-site supervision for mid-rise commercial block' }
      ],
      pastProjects: [
        { title: 'Korangi Industrial Shed', description: 'Structural design and project supervision', duration: '6 weeks', type: 'Structural' }
      ],
      clientReviews: [
        { client: 'Asma R.', rating: 5, comment: 'Bahar ensured our building structure met all safety requirements. Excellent supervision.', date: 'October 2024' },
        { client: 'Omar H.', rating: 4.5, comment: 'Good attention to detail and responsive during construction.', date: 'September 2024' }
      ]
    }
    ,
    '7': {
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
      bio: 'Civil engineer with extensive experience in structural detailing, site management and quality control for medium to large residential and commercial projects.',
      cnic: '42101-1234567-2',
      license: 'PE Registered',
      contact: '0300-1122335',
      pricing: {
        base: 'PKR 40,000+',
        details: 'Structural design and supervision packages starting from PKR 40,000'
      },
      services: [
        { name: 'Structural Design', description: 'Complete structural design and reinforcement detailing' },
        { name: 'Site Supervision', description: 'On-site management and contractor coordination' },
        { name: 'Quality Control', description: 'Material testing coordination and QA checks' }
      ],
      portfolio: [
        { title: 'Clifton Residential Structure', type: 'Structural Design', description: 'Detailed structural design for 500 sq yd house' },
        { title: 'DHA Commercial Block', type: 'Site Supervision', description: 'On-site supervision for mid-rise commercial block' }
      ],
      pastProjects: [
        { title: 'Korangi Industrial Shed', description: 'Structural design and project supervision', duration: '6 weeks', type: 'Structural' }
      ],
      clientReviews: [
        { client: 'Asma R.', rating: 5, comment: 'Bahar ensured our building structure met all safety requirements. Excellent supervision.', date: 'October 2024' },
        { client: 'Omar H.', rating: 4.5, comment: 'Good attention to detail and responsive during construction.', date: 'September 2024' }
      ]
    }
  }

  const professional = professionals[id]

  if (!professional) {
    return (
      <div className="professional-profile-page">
        <div className="container">
          <div className="profile-not-found">
            <h2>Professional not found</h2>
            <button className="btn btn-primary" onClick={() => navigate('/marketplace/professionals')}>
              Back to Professionals
            </button>
          </div>
        </div>
      </div>
    )
  }

  const handleContactClick = () => {
    setShowContactMessage(true)
  }

  const contactMessage = `Hello! I viewed your profile on Fixora360 platform and I'm interested in hiring you for an architectural/interior/3D design project. Please let me know your availability and next steps.`

  return (
    <div className="professional-profile-page">
      <button className="back-button" onClick={() => navigate('/marketplace/professionals')}>
        <FiArrowLeft /> Back to Professionals
      </button>

      <section className="profile-header-section">
        <div className="container">
          <div className="profile-header">
            <div className="profile-header-left">
              <div className="profile-avatar-large">
                <img src={professional.image} alt={professional.name} />
                {professional.verified && (
                  <div className="verified-badge-large">
                    <FiCheckCircle /> Verified
                  </div>
                )}
              </div>
              <div className="profile-header-info">
                <h1 className="profile-name">{professional.name}</h1>
                <p className="profile-profession">{professional.profession}</p>
                {professional.studio && (
                  <p className="profile-studio">
                    <FiBriefcase /> {professional.studio}
                  </p>
                )}
                <div className="profile-location">
                  <FiMapPin />
                  <span>{professional.location}</span>
                </div>
                <div className="profile-rating-large">
                  <FiStar className="star-icon" />
                  <span className="rating-value">{professional.rating}</span>
                  <span className="rating-reviews">({professional.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="profile-header-right">
              <div className="profile-stats-grid">
                <div className="stat-box">
                  <FiClock className="stat-icon" />
                  <span className="stat-value">{professional.experience}</span>
                  <span className="stat-label">Experience</span>
                </div>
                <div className="stat-box">
                  <FiCheckCircle className="stat-icon" />
                  <span className="stat-value">{professional.projects}+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-box">
                  <FiUsers className="stat-icon" />
                  <span className="stat-value">{professional.reviews}</span>
                  <span className="stat-label">Reviews</span>
                </div>
              </div>
              <button className="btn btn-primary btn-contact-large" onClick={handleContactClick}>
                <FiPhone /> Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {showContactMessage && (
        <div className="contact-modal-overlay" onClick={() => setShowContactMessage(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contact {professional.name}</h3>
              <button className="modal-close" onClick={() => setShowContactMessage(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="contact-info">
                <p><strong>Phone:</strong> {professional.contact}</p>
                {professional.cnic && <p><strong>CNIC:</strong> {professional.cnic}</p>}
                {professional.license && <p><strong>License:</strong> {professional.license}</p>}
              </div>
              <div className="message-template">
                <label>Pre-filled Message Template:</label>
                <textarea 
                  readOnly 
                  value={contactMessage}
                  rows="5"
                />
                <p className="message-note">Copy this message and contact via phone: {professional.contact}</p>
              </div>
            </div>
            <div className="modal-footer">
              <a href={`tel:${professional.contact}`} className="btn btn-primary">
                <FiPhone /> Call Now
              </a>
              <button className="btn btn-secondary" onClick={() => setShowContactMessage(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="profile-content-section">
        <div className="container">
          <div className="profile-tabs">
            <button 
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          <div className="profile-tab-content">
            {activeTab === 'overview' && (
              <div className="tab-panel">
                <div className="profile-two-column">
                  <div className="profile-main-column">
                    <div className="profile-section">
                      <h2 className="section-title">Professional Summary</h2>
                      <p className="professional-bio">{professional.bio}</p>
                    </div>

                    <div className="profile-section">
                      <h2 className="section-title">Specialties</h2>
                      <div className="specialties-list">
                        {professional.specialties && professional.specialties.map((specialty, index) => (
                          <span key={index} className="specialty-badge">{specialty}</span>
                        ))}
                      </div>
                    </div>

                    <div className="profile-section">
                      <h2 className="section-title">Services Offered</h2>
                      <div className="services-list">
                        {professional.services && professional.services.map((service, index) => (
                          <div key={index} className="service-item">
                            <h4 className="service-name">
                              <FiCheckCircle className="service-icon" />
                              {service.name}
                            </h4>
                            <p className="service-description">{service.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="profile-section">
                      <h2 className="section-title">Previous Projects</h2>
                      <div className="past-projects-list">
                        {professional.pastProjects && professional.pastProjects.map((project, index) => (
                          <div key={index} className="past-project-card">
                            <div className="project-header">
                              <h4 className="project-title">{project.title}</h4>
                              <span className="project-type">{project.type}</span>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-meta">
                              <span className="project-duration">
                                <FiClock /> {project.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="profile-sidebar">
                    <div className="profile-section pricing-section">
                      <h3 className="section-title">Pricing</h3>
                      <div className="pricing-info">
                        <div className="price-main">{professional.pricing.base}</div>
                        <p className="price-details">{professional.pricing.details}</p>
                      </div>
                    </div>

                    <div className="profile-section contact-section">
                      <h3 className="section-title">Contact Information</h3>
                      <div className="contact-details">
                        <div className="contact-item">
                          <FiPhone />
                          <span>{professional.contact}</span>
                        </div>
                        {professional.cnic && (
                          <div className="contact-item">
                            <FiAward />
                            <div>
                              <small>CNIC</small>
                              <span>{professional.cnic}</span>
                            </div>
                          </div>
                        )}
                        {professional.license && (
                          <div className="contact-item">
                            <FiCheckCircle />
                            <div>
                              <small>License</small>
                              <span>{professional.license}</span>
                            </div>
                          </div>
                        )}
                        {professional.portfolioLink && (
                          <div className="contact-item">
                            <FiExternalLink />
                            <div>
                              <small>Portfolio</small>
                              <span>{professional.portfolioLink}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="tab-panel">
                <div className="profile-section">
                  <h2 className="section-title">Portfolio Projects</h2>
                  <div className="portfolio-grid">
                    {professional.portfolio && professional.portfolio.map((item, index) => (
                      <div key={index} className="portfolio-card">
                        <div className="portfolio-image-placeholder">
                          <span className="portfolio-type-badge">{item.type}</span>
                        </div>
                        <div className="portfolio-info">
                          <h4 className="portfolio-title">{item.title}</h4>
                          <p className="portfolio-description">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="tab-panel">
                <div className="profile-section">
                  <h2 className="section-title">Client Reviews</h2>
                  <div className="reviews-list">
                    {professional.clientReviews && professional.clientReviews.map((review, index) => (
                      <div key={index} className="review-card">
                        <div className="review-header">
                          <div className="review-client">
                            <div className="client-avatar">
                              {review.client.charAt(0)}
                            </div>
                            <div>
                              <h4 className="client-name">{review.client}</h4>
                              <span className="review-date">{review.date}</span>
                            </div>
                          </div>
                          <div className="review-rating">
                            {[...Array(5)].map((_, i) => (
                              <FiStar 
                                key={i} 
                                className={i < Math.floor(review.rating) ? 'star-filled' : 'star-empty'}
                              />
                            ))}
                            <span className="rating-number">{review.rating}</span>
                          </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfessionalProfile
