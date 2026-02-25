import React, { useState } from 'react'
import {
  FiHome,
  FiCheckCircle,
  FiAlertTriangle,
  FiStar,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiBarChart2,
  FiTrendingUp,
  FiBell,
  FiSend,
  FiShield
} from 'react-icons/fi'
import './RealEstateAgentDashboard.css'

const agent = {
  name: 'Hassan Ali',
  profession: 'Real Estate Agent',
  agency: 'Property Vision',
  license: 'Not Registered',
  experience: '6 Years',
  rating: 4.8,
  totalProperties: 42,
  verified: false,
  contact: '0302-5567891',
  areas: ['DHA Phase 5', 'Clifton Block 8', 'Bahria Town Karachi'],
  bio: 'Specialist in prime Karachi neighborhoods with a focus on premium residential and investment properties.'
}

const properties = [
  { title: '500 sq yd House (Clifton)', type: 'House', purpose: 'For Sale', location: 'Karachi > Clifton > Block 5', size: '500 sq yd', price: 'PKR 185,000,000', beds: 5, baths: 6, amenities: ['Basement', 'Lift', 'Parking'], status: 'Active' },
  { title: '3-Bed Apartment (DHA Phase 6)', type: 'Apartment', purpose: 'For Rent', location: 'Karachi > DHA Phase 6 > Bukhari', size: '2,100 sq ft', price: 'PKR 320,000 / month', beds: 3, baths: 3, amenities: ['Generator', 'Parking', 'Security'], status: 'Active' },
  { title: '120 sq yd Residential Plot (Bahria Town P12)', type: 'Plot', purpose: 'For Sale', location: 'Karachi > Bahria Town > Precinct 12', size: '120 sq yd', price: 'PKR 8,200,000', beds: '-', baths: '-', amenities: ['Corner', 'Park Facing'], status: 'Active' }
]

const leads = [
  { client: 'Ali Raza', contact: '0301-1112233', interest: '500 sq yd House (Clifton)', stage: 'New Lead', notes: 'Wants evening viewing' },
  { client: 'Sara Khan', contact: '0321-5556677', interest: '3-Bed Apartment (DHA Phase 6)', stage: 'Scheduled Visit', notes: 'Visit on Friday 5pm' },
  { client: 'Imran Qureshi', contact: '0300-9988776', interest: '120 sq yd Plot (BTK P12)', stage: 'Offer Received', notes: 'Offer near ask' },
  { client: 'Zeeshan Malik', contact: '0312-3344556', interest: 'Clifton House', stage: 'Deal Closed', notes: 'Finalize papers' }
]

const visits = {
  upcoming: [
    { client: 'Sara Khan', property: '3-Bed Apartment (DHA Phase 6)', time: 'Fri 5:00 PM', status: 'Scheduled' },
    { client: 'Ali Raza', property: '500 sq yd House (Clifton)', time: 'Sat 11:30 AM', status: 'Scheduled' }
  ],
  past: [
    { client: 'Imran Qureshi', property: '120 sq yd Plot (BTK P12)', summary: 'Viewed plot, positive', feedback: 'Wants price flex', followup: 'Call Monday' },
    { client: 'Nida Faisal', property: 'Apartment DHA', summary: 'Liked layout', feedback: 'Needs parking confirmation', followup: 'Send parking details' }
  ]
}

const featured = properties

const reviews = [
  { client: 'Hamza J.', rating: 5, comment: 'Very professional, handled Clifton deal smoothly.', date: 'Nov 2024' },
  { client: 'Kiran S.', rating: 4.7, comment: 'Great follow-up and transparent communication.', date: 'Oct 2024' },
  { client: 'Bilal R.', rating: 4.8, comment: 'Helped us close in DHA quickly.', date: 'Sep 2024' }
]

const notifications = [
  { title: 'New lead assigned', detail: 'Lead for Clifton House from web form.', time: 'Just now' },
  { title: 'Visit reminder', detail: 'Visit with Sara Khan today 5:00 PM.', time: '2h ago' },
  { title: 'Price drop alert', detail: 'Seller reduced price for DHA Apartment.', time: '1d ago' },
  { title: 'Verification update', detail: 'Submit license for verification.', time: '2d ago' }
]

const analytics = {
  monthlyEarnings: 'PKR 2,800,000',
  dealsClosed: 18,
  conversionRate: '32%',
  avgSellingTime: '27 days',
  activeAreas: ['DHA Phase 6', 'Clifton', 'BTK P12'],
  topCategories: ['Houses', 'Apartments', 'Plots']
}

const RealEstateAgentDashboard = () => {
  const [testMode] = useState(true)
  const [leadFilter, setLeadFilter] = useState('all')
  const [reviewFilter, setReviewFilter] = useState('all')

  const filteredLeads = leads.filter((l) => {
    if (leadFilter === 'new') return l.stage === 'New Lead'
    if (leadFilter === 'contacted') return l.stage === 'Contacted'
    if (leadFilter === 'visit') return l.stage === 'Scheduled Visit'
    if (leadFilter === 'offer') return l.stage === 'Offer Received'
    if (leadFilter === 'closed') return l.stage === 'Deal Closed'
    return true
  })

  const filteredReviews = reviews.filter((r) => {
    if (reviewFilter === '5') return r.rating >= 4.9
    if (reviewFilter === '4') return r.rating >= 4.0
    return true
  })

  const handleMock = (label) => console.log(`Action simulated — Test Mode: ${label}`)

  return (
    <div className="rea-dashboard">
      <div className="rea-topbar">
        <div>
          <h1>Real Estate Agent Dashboard</h1>
          <p>Test/Preview Mode – all actions are mock only.</p>
        </div>
        <div className="pill">Test Mode Enabled</div>
      </div>

      <div className="rea-grid two">
        <div className="card">
          <div className="overview">
            <div className="avatar">HA</div>
            <div>
              <h2>{agent.name}</h2>
              <p className="muted">{agent.profession} • {agent.agency}</p>
              <p className="muted">Experience: {agent.experience}</p>
              <p className="muted">License: {agent.license}</p>
              <p className="muted">Contact: {agent.contact}</p>
              <p className="muted">Service Areas: {agent.areas.join(', ')}</p>
              <p className="muted">Bio: {agent.bio}</p>
              <button className="btn ghost" onClick={() => handleMock('Preview Public Profile')}>Preview Public Profile</button>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <FiStar />
              <div>
                <p className="stat-value">{agent.rating}</p>
                <p className="stat-label">Rating</p>
              </div>
            </div>
            <div className="stat">
              <FiHome />
              <div>
                <p className="stat-value">{agent.totalProperties}</p>
                <p className="stat-label">Listings</p>
              </div>
            </div>
            <div className="stat">
              {agent.verified ? <FiCheckCircle className="success" /> : <FiAlertTriangle className="warn" />}
              <div>
                <p className="stat-value">{agent.verified ? 'Verified' : 'Not Verified'}</p>
                <p className="stat-label">Verification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Earnings & Performance</h3>
            <span className="badge">Placeholder Data</span>
          </div>
          <div className="analytics-grid">
            <div>
              <p className="label">Monthly Earnings</p>
              <p className="value">{analytics.monthlyEarnings}</p>
            </div>
            <div>
              <p className="label">Deals Closed</p>
              <p className="value">{analytics.dealsClosed}</p>
            </div>
            <div>
              <p className="label">Lead Conversion</p>
              <p className="value">{analytics.conversionRate}</p>
            </div>
            <div>
              <p className="label">Avg Selling Time</p>
              <p className="value">{analytics.avgSellingTime}</p>
            </div>
            <div>
              <p className="label">Active Areas</p>
              <p className="value">{analytics.activeAreas.join(', ')}</p>
            </div>
            <div>
              <p className="label">Top Categories</p>
              <p className="value">{analytics.topCategories.join(', ')}</p>
            </div>
          </div>
          <div className="chart-placeholder"><FiBarChart2 /> Monthly earnings chart (mock)</div>
          <div className="chart-placeholder"><FiTrendingUp /> Performance trends (mock)</div>
        </div>
      </div>

      <div className="rea-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Property Management</h3>
            <div className="actions">
              <button className="btn" onClick={() => handleMock('Add Property')}><FiPlus /> Add Property</button>
            </div>
          </div>
          <div className="property-list">
            {properties.map((p, idx) => (
              <div key={idx} className="property-item">
                <div>
                  <h4>{p.title}</h4>
                  <p className="muted small">{p.type} • {p.purpose} • {p.location}</p>
                  <p className="muted small">Size: {p.size} • Price: {p.price}</p>
                  <p className="muted small">Beds/Baths: {p.beds}/{p.baths} • Amenities: {p.amenities.join(', ')}</p>
                  <p className="muted small">Status: {p.status}</p>
                </div>
                <div className="property-actions">
                  <button className="btn ghost" onClick={() => handleMock(`Edit ${p.title}`)}><FiEdit /> Edit</button>
                  <button className="btn ghost danger" onClick={() => handleMock(`Delete ${p.title}`)}><FiTrash2 /> Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="muted small">Image upload disabled in Test Mode. Saving shows mock notification only.</div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Client Leads Management</h3>
            <div className="pill-group">
              <button className={`pill ${leadFilter === 'all' ? 'active' : ''}`} onClick={() => setLeadFilter('all')}>All</button>
              <button className={`pill ${leadFilter === 'new' ? 'active' : ''}`} onClick={() => setLeadFilter('new')}>New</button>
              <button className={`pill ${leadFilter === 'visit' ? 'active' : ''}`} onClick={() => setLeadFilter('visit')}>Visit</button>
              <button className={`pill ${leadFilter === 'offer' ? 'active' : ''}`} onClick={() => setLeadFilter('offer')}>Offer</button>
              <button className={`pill ${leadFilter === 'closed' ? 'active' : ''}`} onClick={() => setLeadFilter('closed')}>Closed</button>
            </div>
          </div>
          <div className="leads">
            {filteredLeads.map((lead, idx) => (
              <div key={idx} className="lead-card" onClick={() => handleMock(`Open lead: ${lead.client}`)}>
                <div>
                  <h4>{lead.client}</h4>
                  <p className="muted small">{lead.contact}</p>
                  <p className="muted small">Interest: {lead.interest}</p>
                  <p className="muted small">Notes: {lead.notes}</p>
                </div>
                <span className="status-chip">{lead.stage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rea-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Bookings & Property Visits</h3>
          </div>
          <div className="visits">
            <h4>Upcoming Visits</h4>
            {visits.upcoming.map((v, idx) => (
              <div key={idx} className="visit-card" onClick={() => handleMock(`Open visit: ${v.client}`)}>
                <div>
                  <p className="muted small">{v.client} • {v.property}</p>
                  <p className="muted small">{v.time}</p>
                </div>
                <span className="status-chip">{v.status}</span>
              </div>
            ))}
            <h4>Past Visits</h4>
            {visits.past.map((v, idx) => (
              <div key={idx} className="visit-card" onClick={() => handleMock(`Open past visit: ${v.client}`)}>
                <div>
                  <p className="muted small">{v.client} • {v.property}</p>
                  <p className="muted small">Summary: {v.summary}</p>
                  <p className="muted small">Feedback: {v.feedback}</p>
                  <p className="muted small">Follow-up: {v.followup}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Portfolio / Featured Properties</h3>
            <span className="badge">Mock</span>
          </div>
          <div className="featured-grid">
            {featured.map((p, idx) => (
              <div key={idx} className="featured-card" onClick={() => handleMock(`Open listing: ${p.title}`)}>
                <div className="featured-thumb">Image Placeholder</div>
                <h4>{p.title}</h4>
                <p className="muted small">{p.location}</p>
                <p className="muted small">{p.price}</p>
                <button className="btn ghost" onClick={(e) => { e.stopPropagation(); handleMock(`Open listing: ${p.title}`) }}>Open Listing</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rea-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Reviews & Ratings</h3>
            <div className="pill-group">
              <button className={`pill ${reviewFilter === 'all' ? 'active' : ''}`} onClick={() => setReviewFilter('all')}>All</button>
              <button className={`pill ${reviewFilter === '5' ? 'active' : ''}`} onClick={() => setReviewFilter('5')}>5★</button>
              <button className={`pill ${reviewFilter === '4' ? 'active' : ''}`} onClick={() => setReviewFilter('4')}>4★+</button>
            </div>
          </div>
          <div className="reviews">
            {filteredReviews.map((r, idx) => (
              <div key={idx} className="review-card">
                <div>
                  <h4>{r.client}</h4>
                  <p className="muted">{r.comment}</p>
                  <p className="muted small">{r.date}</p>
                </div>
                <div className="review-actions">
                  <span className="rating-chip"><FiStar /> {r.rating}</span>
                  <button className="btn ghost" onClick={() => handleMock(`Reply to ${r.client}`)}><FiSend /> Reply</button>
                  <button className="btn ghost danger" onClick={() => handleMock(`Report review ${r.client}`)}>Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Document & License Management</h3>
            <span className="badge">Preview Only</span>
          </div>
          <div className="settings-grid">
            <div className="setting-item">
              <p className="label">License Number</p>
              <input type="text" defaultValue={agent.license} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">CNIC Upload</p>
              <input type="text" placeholder="Upload CNIC" disabled={testMode} />
              <button className="btn ghost" disabled={testMode}>Upload (Disabled)</button>
            </div>
            <div className="setting-item">
              <p className="label">Agency Agreement</p>
              <button className="btn ghost" disabled={testMode}>Upload Agreement (Mock)</button>
            </div>
            <div className="setting-item">
              <p className="label">Request Verification</p>
              <button className="btn" onClick={() => handleMock('Request Verification')}><FiShield /> Request Verification</button>
            </div>
          </div>
        </div>
      </div>

      <div className="rea-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Settings</h3>
            <span className="badge">Test Mode</span>
          </div>
          <div className="settings-grid">
            <div className="setting-item">
              <p className="label">Name</p>
              <input type="text" defaultValue={agent.name} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Contact</p>
              <input type="text" defaultValue={agent.contact} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Service Areas</p>
              <input type="text" defaultValue={agent.areas.join(', ')} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Payment Withdrawal</p>
              <input type="text" placeholder="Add bank/IBAN" disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Password & Security</p>
              <button className="btn ghost" disabled={testMode}>Change Password (Mock)</button>
            </div>
            <div className="setting-item">
              <p className="label">Notification Preferences</p>
              <button className="btn ghost" onClick={() => handleMock('Update Notification Prefs')}>Update Preferences</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Notification Center</h3>
            <span className="badge">Test Mode</span>
          </div>
          <div className="notifications">
            {notifications.map((n, idx) => (
              <div key={idx} className="notification" onClick={() => handleMock(`Open notification: ${n.title}`)}>
                <div className="notification-icon"><FiBell /></div>
                <div>
                  <h4>{n.title}</h4>
                  <p className="muted small">{n.time}</p>
                  <p className="muted">{n.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealEstateAgentDashboard
