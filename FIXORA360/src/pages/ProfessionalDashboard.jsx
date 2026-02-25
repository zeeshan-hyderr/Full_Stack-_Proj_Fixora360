import React, { useState } from 'react'
import {
  FiUser,
  FiStar,
  FiCheckCircle,
  FiEye,
  FiEdit,
  FiPlus,
  FiTrash2,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiShield,
  FiBell,
  FiInbox,
  FiBarChart2,
  FiTrendingUp,
  FiAlertTriangle,
  FiSend
} from 'react-icons/fi'
import './ProfessionalDashboard.css'

const professional = {
  name: 'Maria Memon',
  profession: 'Architectural Designer',
  contact: '0313-1396386',
  cnic: '41306-13916648',
  license: 'Not Registered',
  services: ['Working Drawings', '3D Modeling', '3D Visualization'],
  pricing: 'PKR 30,000+ per project',
  experience: '4 Years',
  projects: 38,
  rating: 4.8,
  verified: false,
  bio: 'Architectural designer specializing in working drawings, 3D modeling, and high-quality visualizations. Focused on precise documentation and compelling renders for client approvals.'
}

const servicesData = [
  {
    title: 'Working Drawings',
    pricing: 'PKR 30,000+ / project',
    billingType: 'Per Project',
    description: 'Full architectural and construction drawings with standards compliance.'
  },
  {
    title: '3D Modeling',
    pricing: 'PKR 8,000 - 10,000',
    billingType: 'Per Model',
    description: 'Detailed 3D models for residential and commercial projects.'
  },
  {
    title: '3D Visualization',
    pricing: 'PKR 5,000 - 6,000',
    billingType: 'Per Visualization',
    description: 'Photorealistic renders and walkthrough-ready visuals.'
  }
]

const projectsData = [
  {
    title: 'DHA Karachi Residential Elevation',
    description: 'Modern elevation with warm tones and clean lines for a 500 sq yd plot.',
    cost: 'PKR 1,200,000 (est.)',
    delivery: '3 weeks',
    review: 'Delivered drawings on time with precise detailing.',
    type: 'Elevation + Visualization'
  },
  {
    title: 'Gulshan Apartment Interior Design',
    description: 'Full interior layout, lighting, and material board for a 3-bed apartment.',
    cost: 'PKR 650,000 (est.)',
    delivery: '4 weeks',
    review: 'Great material selection and functional planning.',
    type: 'Interior + 3D'
  },
  {
    title: 'Clifton Office 3D Visualization',
    description: 'Open-plan office visualization with accent walls and custom furniture.',
    cost: 'PKR 450,000 (est.)',
    delivery: '2 weeks',
    review: 'Very good 3D visualization quality, highly recommended.',
    type: '3D Visualization'
  },
  {
    title: 'Bahria Town Villa Working Drawings',
    description: 'Complete working drawings set: plans, elevations, sections, details.',
    cost: 'PKR 900,000 (est.)',
    delivery: '5 weeks',
    review: 'Followed all standards; drawings were construction-ready.',
    type: 'Working Drawings'
  }
]

const reviewsData = [
  {
    client: 'Ahmed Raza',
    rating: 5,
    comment: 'Delivered drawings on time and followed all architectural standards.',
    date: 'Nov 2024'
  },
  {
    client: 'Hina Tariq',
    rating: 4.8,
    comment: 'Great visualization quality and responsive to feedback.',
    date: 'Oct 2024'
  },
  {
    client: 'Faisal Abbas',
    rating: 4.7,
    comment: 'Professional and clear communication throughout.',
    date: 'Sep 2024'
  },
  {
    client: 'Sadia Javed',
    rating: 4.9,
    comment: 'Excellent 3D models that helped us secure approvals quickly.',
    date: 'Aug 2024'
  }
]

const ordersData = {
  active: [
    { title: 'DHA Villa Working Drawings', status: 'In Progress', due: '5 days', budget: 'PKR 180,000' },
    { title: 'Office Visualization', status: 'Awaiting Feedback', due: '8 days', budget: 'PKR 95,000' }
  ],
  completed: [
    { title: 'Apartment Interior 3D', rating: 4.9, earning: 'PKR 120,000' },
    { title: 'Retail Store Layout', rating: 4.8, earning: 'PKR 85,000' },
    { title: 'Facade Redesign', rating: 5.0, earning: 'PKR 140,000' }
  ]
}

const notificationsData = [
  { title: 'New inquiry received', time: 'Just now', detail: 'Client requested visualization for Clifton office.' },
  { title: 'Feedback added', time: '1h ago', detail: 'Client left feedback on Gulshan Apartment Interior.' },
  { title: 'Payment processed', time: '1d ago', detail: 'Payment released for Retail Store Layout.' },
  { title: 'Reminder', time: '2d ago', detail: 'Submit revision files for DHA Villa.' }
]

const earningStats = {
  monthly: 'PKR 420,000',
  total: 'PKR 5,800,000',
  avgDelivery: '9.5 days',
  repeatClients: '42%'
}

const ProfessionalDashboard = () => {
  const [testMode] = useState(true)
  const [reviewFilter, setReviewFilter] = useState('all')
  const [orderTab, setOrderTab] = useState('active')

  const filteredReviews = reviewsData.filter((r) => {
    if (reviewFilter === '5') return r.rating >= 4.9
    if (reviewFilter === '4.5') return r.rating >= 4.5
    return true
  })

  const handleTestAction = (label) => {
    // In test mode we simply log the action; no real submissions
    console.log(`Test Mode: ${label}`)
  }

  const ordersToShow = orderTab === 'active' ? ordersData.active : ordersData.completed

  return (
    <div className="pro-dashboard">
      <div className="pro-dashboard__topbar">
        <div>
          <h1>Professional Dashboard</h1>
          <p>Test/Preview Mode – all actions are mock only.</p>
        </div>
        <div className="test-mode-pill">Test Mode Enabled</div>
      </div>

      <div className="pro-grid two">
        <div className="card overview-card">
          <div className="profile">
            <div className="avatar-placeholder">MM</div>
            <div>
              <h2>{professional.name}</h2>
              <p className="muted">{professional.profession}</p>
              <p className="muted">Experience: {professional.experience}</p>
              <p className="muted">Contact: {professional.contact}</p>
              <p className="muted">CNIC: {professional.cnic}</p>
              <p className="muted">License: {professional.license}</p>
              <p className="muted">Bio: {professional.bio}</p>
              <button className="btn ghost" onClick={() => handleTestAction('Preview Profile')}>Preview Profile</button>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <FiStar />
              <div>
                <p className="stat-value">{professional.rating}</p>
                <p className="stat-label">Rating</p>
              </div>
            </div>
            <div className="stat">
              <FiBriefcase />
              <div>
                <p className="stat-value">{professional.projects}</p>
                <p className="stat-label">Projects</p>
              </div>
            </div>
            <div className="stat">
              {professional.verified ? <FiCheckCircle className="success" /> : <FiAlertTriangle className="warn" />}
              <div>
                <p className="stat-value">{professional.verified ? 'Verified' : 'Not Verified'}</p>
                <p className="stat-label">Verification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card earnings-card">
          <div className="card-header">
            <h3>Earnings & Analytics</h3>
            <span className="badge">Placeholder Data</span>
          </div>
          <div className="earnings-grid">
            <div>
              <p className="label">This Month</p>
              <p className="value">{earningStats.monthly}</p>
            </div>
            <div>
              <p className="label">Total Earnings</p>
              <p className="value">{earningStats.total}</p>
            </div>
            <div>
              <p className="label">Avg Delivery</p>
              <p className="value">{earningStats.avgDelivery}</p>
            </div>
            <div>
              <p className="label">Repeat Clients</p>
              <p className="value">{earningStats.repeatClients}</p>
            </div>
          </div>
          <div className="chart-placeholder">
            <FiBarChart2 /> Month-wise chart placeholder (Test Mode)
          </div>
        </div>
      </div>

      <div className="pro-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Services Management</h3>
            <div className="actions">
              <button className="btn" onClick={() => handleTestAction('Add Service')}><FiPlus /> Add Service</button>
            </div>
          </div>
          <div className="service-list">
            {servicesData.map((service, idx) => (
              <div key={idx} className="service-item">
                <div>
                  <h4>{service.title}</h4>
                  <p className="muted">{service.description}</p>
                  <p className="muted small">Pricing: {service.pricing} • {service.billingType}</p>
                </div>
                <div className="service-actions">
                  <button className="btn ghost" onClick={() => handleTestAction(`Edit ${service.title}`)}><FiEdit /> Edit</button>
                  <button className="btn ghost danger" onClick={() => handleTestAction(`Delete ${service.title}`)}><FiTrash2 /> Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Portfolio & Previous Projects</h3>
            <span className="badge">Test Mode</span>
          </div>
          <div className="project-grid">
            {projectsData.map((project, idx) => (
              <div key={idx} className="project-card" onClick={() => handleTestAction(`Open project: ${project.title}`)}>
                <div className="project-thumb">Placeholder Image</div>
                <h4>{project.title}</h4>
                <p className="muted">{project.description}</p>
                <p className="muted small">Type: {project.type}</p>
                <div className="project-meta">
                  <span><FiDollarSign /> {project.cost}</span>
                  <span><FiClock /> {project.delivery}</span>
                </div>
                <p className="project-review">Client review: {project.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pro-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Review Management</h3>
            <div className="pill-group">
              <button className={`pill ${reviewFilter === 'all' ? 'active' : ''}`} onClick={() => setReviewFilter('all')}>All</button>
              <button className={`pill ${reviewFilter === '5' ? 'active' : ''}`} onClick={() => setReviewFilter('5')}>4.9 - 5 ⭐</button>
              <button className={`pill ${reviewFilter === '4.5' ? 'active' : ''}`} onClick={() => setReviewFilter('4.5')}>4.5 - 4.8 ⭐</button>
            </div>
          </div>
          <div className="reviews">
            {filteredReviews.map((review, idx) => (
              <div key={idx} className="review-item">
                <div>
                  <h4>{review.client}</h4>
                  <p className="muted">{review.comment}</p>
                  <p className="muted small">{review.date}</p>
                </div>
                <div className="review-actions">
                  <span className="rating-chip"><FiStar /> {review.rating}</span>
                  <form onSubmit={(e) => { e.preventDefault(); handleTestAction(`Reply to ${review.client}`) }}>
                    <input type="text" placeholder="Write a reply (Test Mode)" />
                    <button type="submit" className="btn ghost"><FiSend /> Reply</button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Order Management</h3>
            <div className="pill-group">
              <button className={`pill ${orderTab === 'active' ? 'active' : ''}`} onClick={() => setOrderTab('active')}>Active</button>
              <button className={`pill ${orderTab === 'completed' ? 'active' : ''}`} onClick={() => setOrderTab('completed')}>Completed</button>
            </div>
          </div>
          <div className="orders">
            {ordersToShow.map((order, idx) => (
              <div key={idx} className="order-item" onClick={() => handleTestAction(`Open order: ${order.title}`)}>
                <div>
                  <h4>{order.title}</h4>
                  {'status' in order && <span className="status-chip">{order.status}</span>}
                  {'rating' in order && <span className="rating-chip"><FiStar /> {order.rating}</span>}
                </div>
                <div className="order-meta">
                  {'due' in order && <span><FiClock /> {order.due}</span>}
                  <span><FiDollarSign /> {order.budget || order.earning}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pro-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Settings & Verification</h3>
            <span className="badge">Preview Only</span>
          </div>
          <div className="settings-grid">
            <div className="setting-item">
              <p className="label">Personal Details</p>
              <input type="text" defaultValue={professional.name} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">CNIC</p>
              <input type="text" defaultValue={professional.cnic} disabled={testMode} />
              <button className="btn ghost" disabled={testMode}>Upload CNIC (Disabled)</button>
            </div>
            <div className="setting-item">
              <p className="label">License</p>
              <input type="text" defaultValue={professional.license} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Payment Method</p>
              <input type="text" placeholder="Add payment method" disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Password & Security</p>
              <button className="btn ghost" disabled={testMode}>Update Password (Preview)</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Notification Center</h3>
            <span className="badge">Test Mode</span>
          </div>
          <div className="notifications">
            {notificationsData.map((note, idx) => (
              <div key={idx} className="notification" onClick={() => handleTestAction(`Open notification: ${note.title}`)}>
                <div className="notification-icon"><FiBell /></div>
                <div>
                  <h4>{note.title}</h4>
                  <p className="muted small">{note.time}</p>
                  <p className="muted">{note.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalDashboard
