import React from 'react'
import TeamCard from '../components/TeamCard'
import { FiTarget, FiEye, FiHeart, FiAward } from 'react-icons/fi'
import './About.css'

// Import team images
import manzarImage from '../data/images/manzar.jpeg'
import sughandImage from '../data/images/sughand.jpeg'
import zeeshanImage from '../data/images/zeeshan.jpeg'
import afifaImage from '../data/images/afifa.jpeg'
import aishaImage from '../data/images/aisha.jpeg'
import aqsaImage from '../data/images/aqsa.jpeg'

const About = () => {
  const teamMembers = [
    {
      name: 'Manzar Abbas',
      role: 'Team Lead',
      description: 'Leading the vision and strategy of Fixora360',
      image: manzarImage
    },
    {
      name: 'Sughand Batra',
      role: 'Co-ordinator',
      description: 'Ensuring seamless operations and coordination',
      image: sughandImage
    },
    {
      name: 'Zeeshan Hyder',
      role: 'Co-ordinator',
      description: 'Managing operations and partnerships',
      image: zeeshanImage
    },
    {
      name: 'Afifa Qazi',
      role: 'CTO',
      description: 'Driving technological innovation and development',
      image: afifaImage
    },
    {
      name: 'Aisha Khan',
      role: 'Head of Marketing',
      description: 'Building brand awareness and customer engagement',
      image: aishaImage
    },
    {
      name: 'Aqsa Shafique',
      role: 'Head of UX/UI',
      description: 'Creating exceptional user experiences',
      image: aqsaImage
    }
  ]

  const values = [
    {
      icon: <FiTarget />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in construction technology'
    },
    {
      icon: <FiHeart />,
      title: 'Trust',
      description: 'Building trust through transparency and verified professionals'
    },
    {
      icon: <FiAward />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality service'
    },
    {
      icon: <FiEye />,
      title: 'Vision',
      description: 'Transforming Pakistan\'s construction ecosystem'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content fade-in-up">
            <h1 className="about-title">About Fixora360</h1>
            <p className="about-subtitle">
              Transforming Pakistan's construction and real estate ecosystem, one project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card fade-in-up">
              <h2 className="card-title">Our Vision</h2>
              <p className="card-text">
                To become Pakistan's leading integrated platform that revolutionizes how people 
                buy, build, and design homes by connecting all stakeholders in one trusted ecosystem.
              </p>
            </div>
            <div className="mission-card fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="card-title">Our Mission</h2>
              <p className="card-text">
                To simplify and streamline the entire home journey—from property search to 
                construction completion—by providing verified professionals, quality materials, 
                and AI-powered guidance all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="section importance-section">
        <div className="container">
          <h2 className="section-title">Why Fixora360 Matters</h2>
          <div className="importance-content fade-in-up">
            <p className="importance-text">
              Pakistan's construction and real estate industry has long been fragmented, with 
              buyers, builders, and designers struggling to find reliable partners and resources. 
              Fixora360 bridges this gap by creating Pakistan's first all-in-one digital platform 
              that brings together:
            </p>
            <ul className="importance-list">
              <li>Verified real estate agents and property listings</li>
              <li>Trusted construction professionals (architects, engineers, contractors)</li>
              <li>Quality material suppliers and marketplace</li>
              <li>Expert interior designers with portfolio showcases</li>
              <li>AI-powered consultancy for 24/7 guidance</li>
            </ul>
            <p className="importance-text">
              By centralizing these services, we're not just building a platform—we're building 
              trust, transparency, and efficiency in an industry that touches every Pakistani's life.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the passionate individuals driving Fixora360 forward
          </p>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About

