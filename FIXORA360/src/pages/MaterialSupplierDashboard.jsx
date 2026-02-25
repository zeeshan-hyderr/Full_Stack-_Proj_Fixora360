import React, { useState } from 'react'
import {
  FiBox,
  FiCheckCircle,
  FiAlertTriangle,
  FiStar,
  FiEye,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiTag,
  FiMapPin,
  FiTruck,
  FiDollarSign,
  FiBarChart2,
  FiTrendingUp,
  FiBell,
  FiSend,
  FiSettings,
  FiShield
} from 'react-icons/fi'
import './MaterialSupplierDashboard.css'

const supplier = {
  name: 'Karachi Build Supplies',
  category: 'Multi-category (Cement, Steel, Tiles, Electrical, Plumbing, Paint)',
  verified: false,
  rating: 4.8,
  totalProducts: 72,
  warehouse: 'Korangi Industrial Area, Karachi',
  contact: '+92 313 1396386',
  bio: 'Trusted construction materials supplier serving Karachi with quality cement, steel, tiles, electrical, plumbing, and paint products.'
}

const products = [
  { name: 'Premium Cement (50kg)', category: 'Cement', supplier: 'Lucky Cement', rating: 4.8, price: 'PKR 1,200 / bag', spec: '50kg bag', inventory: 240, bulk: 'Yes' },
  { name: 'Steel Rebar (Grade 60)', category: 'Steel', supplier: 'Agha Steel', rating: 4.9, price: 'PKR 280,000 / ton', spec: 'Grade 60', inventory: 55, bulk: 'Yes' },
  { name: 'Ceramic Tiles (2x2)', category: 'Tiles', supplier: 'Master Tiles', rating: 4.7, price: 'PKR 450 / sq ft', spec: '2x2 ft', inventory: 1800, bulk: 'Yes' },
  { name: 'PVC Pipes (4 inch)', category: 'Plumbing', supplier: 'Sufi Pipes', rating: 4.6, price: 'PKR 850 / meter', spec: '4 inch', inventory: 640, bulk: 'Yes' },
  { name: 'Electrical Wires (Copper)', category: 'Electrical', supplier: 'Pak Elektron', rating: 4.8, price: 'PKR 1,500 / meter', spec: 'Copper', inventory: 900, bulk: 'Yes' },
  { name: 'Premium Paint', category: 'Paint', supplier: 'ICI Paints', rating: 4.9, price: 'PKR 3,500 / gallon', spec: 'Interior/Exterior', inventory: 320, bulk: 'Yes' }
]

const inventoryLog = [
  { item: 'Premium Cement (50kg)', action: 'Stock In', qty: 200, time: 'Today, 10:15 AM' },
  { item: 'Steel Rebar (Grade 60)', action: 'Stock Out', qty: 5, time: 'Today, 09:40 AM' },
  { item: 'PVC Pipes (4 inch)', action: 'Stock In', qty: 120, time: 'Yesterday, 05:30 PM' },
  { item: 'Ceramic Tiles (2x2)', action: 'Stock Out', qty: 200, time: 'Yesterday, 01:20 PM' }
]

const orders = {
  active: [
    { customer: 'Imran Builders', items: '80 bags Premium Cement', qty: 80, total: 'PKR 96,000', status: 'Pending' },
    { customer: 'Skyline Developers', items: '12 tons Steel Rebar', qty: 12, total: 'PKR 3,360,000', status: 'Ready' },
    { customer: 'Modern Homes', items: '1,200 sq ft Ceramic Tiles', qty: 1200, total: 'PKR 540,000', status: 'Shipped' }
  ],
  completed: [
    { customer: 'Al-Noor Contractors', items: '400 bags Cement', earning: 'PKR 480,000', rating: 4.9 },
    { customer: 'City Housing', items: '8 tons Steel Rebar', earning: 'PKR 2,240,000', rating: 4.8 },
    { customer: 'ABC Interiors', items: '900 sq ft Tiles', earning: 'PKR 405,000', rating: 4.7 }
  ]
}

const reviews = [
  { customer: 'Al-Noor Contractors', product: 'Premium Cement (50kg)', rating: 5, comment: 'Consistent quality, timely delivery.', date: 'Nov 2024' },
  { customer: 'Modern Homes', product: 'Ceramic Tiles (2x2)', rating: 4.7, comment: 'Good finish, minor color variation.', date: 'Oct 2024' },
  { customer: 'Skyline Developers', product: 'Steel Rebar (Grade 60)', rating: 4.9, comment: 'Authentic Grade 60, reliable supply.', date: 'Sep 2024' }
]

const notifications = [
  { title: 'New order received', detail: 'Imran Builders placed an order for Premium Cement.', time: 'Just now' },
  { title: 'Low stock alert', detail: 'Steel Rebar inventory below threshold.', time: '1h ago' },
  { title: 'Price alert', detail: 'Market price update for cement.', time: '1d ago' },
  { title: 'Verification update', detail: 'Submit NTN for verification.', time: '2d ago' }
]

const analytics = {
  monthly: 'PKR 3,200,000',
  totalOrders: 128,
  topProducts: ['Premium Cement', 'Steel Rebar', 'Ceramic Tiles'],
  repeatRate: '38%',
  avgRating: 4.8
}

const MaterialSupplierDashboard = () => {
  const [testMode] = useState(true)
  const [orderTab, setOrderTab] = useState('active')
  const [reviewFilter, setReviewFilter] = useState('all')

  const filteredReviews = reviews.filter((r) => {
    if (reviewFilter === '5') return r.rating >= 4.9
    if (reviewFilter === '4.5') return r.rating >= 4.5
    return true
  })

  const handleMock = (label) => console.log(`Mock Action Triggered: ${label}`)

  const ordersToShow = orderTab === 'active' ? orders.active : orders.completed

  return (
    <div className="ms-dashboard">
      <div className="ms-topbar">
        <div>
          <h1>Material Supplier Dashboard</h1>
          <p>Test/Preview Mode – all actions are mock only.</p>
        </div>
        <div className="pill">Test Mode Enabled</div>
      </div>

      <div className="ms-grid two">
        <div className="card">
          <div className="overview">
            <div className="avatar">MS</div>
            <div>
              <h2>{supplier.name}</h2>
              <p className="muted">{supplier.category}</p>
              <p className="muted">Warehouse: {supplier.warehouse}</p>
              <p className="muted">Contact: {supplier.contact}</p>
              <p className="muted">Bio: {supplier.bio}</p>
              <button className="btn ghost" onClick={() => handleMock('Preview Storefront')}>Preview Storefront</button>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <FiStar />
              <div>
                <p className="stat-value">{supplier.rating}</p>
                <p className="stat-label">Rating</p>
              </div>
            </div>
            <div className="stat">
              <FiBox />
              <div>
                <p className="stat-value">{supplier.totalProducts}</p>
                <p className="stat-label">Products</p>
              </div>
            </div>
            <div className="stat">
              {supplier.verified ? <FiCheckCircle className="success" /> : <FiAlertTriangle className="warn" />}
              <div>
                <p className="stat-value">{supplier.verified ? 'Verified Supplier' : 'Not Verified'}</p>
                <p className="stat-label">Verification</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Earnings & Analytics</h3>
            <span className="badge">Placeholder Data</span>
          </div>
          <div className="analytics-grid">
            <div>
              <p className="label">This Month</p>
              <p className="value">{analytics.monthly}</p>
            </div>
            <div>
              <p className="label">Total Orders</p>
              <p className="value">{analytics.totalOrders}</p>
            </div>
            <div>
              <p className="label">Repeat Customers</p>
              <p className="value">{analytics.repeatRate}</p>
            </div>
            <div>
              <p className="label">Average Rating</p>
              <p className="value">{analytics.avgRating}</p>
            </div>
          </div>
          <div className="chart-placeholder"><FiBarChart2 /> Monthly earnings chart (mock)</div>
          <div className="chart-placeholder"><FiTrendingUp /> Market trend comparison (mock)</div>
        </div>
      </div>

      <div className="ms-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Product Management</h3>
            <div className="actions">
              <button className="btn" onClick={() => handleMock('Add Product')}><FiPlus /> Add Product</button>
            </div>
          </div>
          <div className="product-list">
            {products.map((p, idx) => (
              <div key={idx} className="product-item">
                <div>
                  <h4>{p.name}</h4>
                  <p className="muted small">{p.category} • {p.supplier} • Spec: {p.spec}</p>
                  <p className="muted small">Price: {p.price} • Inventory: {p.inventory} • Bulk: {p.bulk}</p>
                </div>
                <div className="product-actions">
                  <button className="btn ghost" onClick={() => handleMock(`Edit ${p.name}`)}><FiEdit /> Edit</button>
                  <button className="btn ghost danger" onClick={() => handleMock(`Delete ${p.name}`)}><FiTrash2 /> Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="muted small">Image upload disabled in Test Mode. Availability toggle mock-only.</div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Inventory Tracking</h3>
            <span className="badge">Test Mode</span>
          </div>
          <div className="inventory-forms">
            <button className="btn ghost" onClick={() => handleMock('Stock In form')}>Stock In (Mock)</button>
            <button className="btn ghost" onClick={() => handleMock('Stock Out form')}>Stock Out (Mock)</button>
          </div>
          <div className="inventory-log">
            {inventoryLog.map((log, idx) => (
              <div key={idx} className="log-item">
                <div>
                  <h4>{log.item}</h4>
                  <p className="muted small">{log.action} • Qty: {log.qty}</p>
                </div>
                <span className="muted small">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ms-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Orders Management</h3>
            <div className="pill-group">
              <button className={`pill ${orderTab === 'active' ? 'active' : ''}`} onClick={() => setOrderTab('active')}>Active</button>
              <button className={`pill ${orderTab === 'completed' ? 'active' : ''}`} onClick={() => setOrderTab('completed')}>Completed</button>
            </div>
          </div>
          <div className="orders">
            {ordersToShow.map((o, idx) => (
              <div key={idx} className="order-card" onClick={() => handleMock(`Open order: ${o.customer}`)}>
                <div>
                  <h4>{o.customer}</h4>
                  <p className="muted small">{o.items}</p>
                </div>
                <div className="order-meta">
                  {'qty' in o && <span><FiBox /> {o.qty}</span>}
                  {'total' in o && <span><FiDollarSign /> {o.total}</span>}
                  {'status' in o && <span className="status-chip">{o.status}</span>}
                  {'earning' in o && <span><FiDollarSign /> {o.earning}</span>}
                  {'rating' in o && <span className="rating-chip"><FiStar /> {o.rating}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Pricing Dashboard</h3>
            <span className="badge">Mock Only</span>
          </div>
          <div className="pricing-block">
            <p className="muted">Bulk pricing and promotional discounts (mock controls)</p>
            <button className="btn ghost" onClick={() => handleMock('Add Bulk Pricing')}>Add Bulk Pricing</button>
            <button className="btn ghost" onClick={() => handleMock('Add Promotion')}>Add Promotion</button>
          </div>
          <div className="chart-placeholder"><FiTrendingUp /> Market trend comparison (dummy)</div>
        </div>
      </div>

      <div className="ms-grid two">
        <div className="card">
          <div className="card-header">
            <h3>Reviews Management</h3>
            <div className="pill-group">
              <button className={`pill ${reviewFilter === 'all' ? 'active' : ''}`} onClick={() => setReviewFilter('all')}>All</button>
              <button className={`pill ${reviewFilter === '5' ? 'active' : ''}`} onClick={() => setReviewFilter('5')}>4.9 - 5 ⭐</button>
              <button className={`pill ${reviewFilter === '4.5' ? 'active' : ''}`} onClick={() => setReviewFilter('4.5')}>4.5 - 4.8 ⭐</button>
            </div>
          </div>
          <div className="reviews">
            {filteredReviews.map((r, idx) => (
              <div key={idx} className="review-card">
                <div>
                  <h4>{r.customer}</h4>
                  <p className="muted">{r.product}</p>
                  <p className="muted small">{r.comment}</p>
                  <p className="muted small">{r.date}</p>
                </div>
                <div className="review-actions">
                  <span className="rating-chip"><FiStar /> {r.rating}</span>
                  <button className="btn ghost" onClick={() => handleMock(`Reply to ${r.customer}`)}><FiSend /> Reply</button>
                  <button className="btn ghost danger" onClick={() => handleMock(`Report review from ${r.customer}`)}>Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>Settings & Verification</h3>
            <span className="badge">Preview Only</span>
          </div>
          <div className="settings-grid">
            <div className="setting-item">
              <p className="label">Business Name</p>
              <input type="text" defaultValue={supplier.name} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Warehouse Address</p>
              <input type="text" defaultValue={supplier.warehouse} disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">CNIC / NTN</p>
              <input type="text" placeholder="Upload CNIC/NTN" disabled={testMode} />
              <button className="btn ghost" disabled={testMode}>Upload (Disabled)</button>
            </div>
            <div className="setting-item">
              <p className="label">Payment Method</p>
              <input type="text" placeholder="Add payment method" disabled={testMode} />
            </div>
            <div className="setting-item">
              <p className="label">Password & Security</p>
              <button className="btn ghost" disabled={testMode}>Change Password (Mock)</button>
            </div>
            <div className="setting-item">
              <p className="label">Request Verification</p>
              <button className="btn" onClick={() => handleMock('Request Verification')}><FiShield /> Request Verification</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ms-grid two">
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

        <div className="card">
          <div className="card-header">
            <h3>Inventory & Stock Health</h3>
            <span className="badge">Placeholder</span>
          </div>
          <div className="stock-health">
            <div className="stock-chip">Low Stock Alerts: Steel Rebar</div>
            <div className="stock-chip">Reorder Suggestion: PVC Pipes</div>
            <div className="stock-chip">Safe Stock: Cement, Tiles</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialSupplierDashboard
