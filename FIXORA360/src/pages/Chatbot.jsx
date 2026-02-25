import React, { useState, useRef, useEffect } from 'react'
import { FiSend, FiMessageCircle, FiHome, FiDollarSign, FiUser, FiLayers } from 'react-icons/fi'
import './Chatbot.css'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Hello! I\'m Fixora360 AI Consultant. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickActions = [
    { icon: <FiHome />, label: 'Ask About Property', query: 'Tell me about property buying process' },
    { icon: <FiDollarSign />, label: 'Estimate Material Cost', query: 'Help me estimate construction material costs' },
    { icon: <FiUser />, label: 'Consult Architect', query: 'I need to consult with an architect' },
    { icon: <FiLayers />, label: 'Interior Advice', query: 'Give me interior design advice' }
  ]

  const handleQuickAction = (query) => {
    setInput(query)
    handleSend(query)
  }

  const handleSend = (text = input) => {
    if (!text.trim()) return

    // Add user message
    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(text)
      setMessages(prev => [...prev, {
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      }])
      setIsTyping(false)
    }, 1000)
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('property') || input.includes('buy') || input.includes('home')) {
      return 'Great question! For property buying in Pakistan, I recommend: 1) Verify property documents through our legal due diligence service, 2) Use our verified real estate agents, 3) Check property listings on our marketplace. Would you like me to connect you with a verified agent?'
    } else if (input.includes('material') || input.includes('cost') || input.includes('price')) {
      return 'I can help with material cost estimation! Our platform offers: 1) Material sourcing marketplace with competitive prices, 2) Cost calculators for different construction phases, 3) Verified suppliers. What type of materials are you looking for? (cement, steel, tiles, etc.)'
    } else if (input.includes('architect') || input.includes('design') || input.includes('plan')) {
      return 'Excellent! We have verified architects on our platform. I can help you: 1) Find architects based on your project type, 2) View their portfolios, 3) Connect you for consultations. What type of project are you planning? (residential, commercial, renovation)'
    } else if (input.includes('interior') || input.includes('decoration') || input.includes('furniture')) {
      return 'Interior design is exciting! Our platform offers: 1) Portfolio showcase of professional designers, 2) 3D visualization services, 3) Material sourcing for interiors. Are you looking for full design services or consultation?'
    } else if (input.includes('permit') || input.includes('legal') || input.includes('document')) {
      return 'Legal matters are crucial! We provide: 1) Legal due diligence support, 2) Permit guidance for construction, 3) Documentation assistance. Which permits or documents do you need help with?'
    } else if (input.includes('budget') || input.includes('estimate') || input.includes('planning')) {
      return 'Budget planning is essential! I can help you: 1) Create a construction budget breakdown, 2) Estimate costs for different phases, 3) Find cost-effective solutions. What\'s your project scope?'
    } else {
      return 'Thank you for your question! As Fixora360 AI Consultant, I can help with: property buying, material sourcing, finding professionals (architects, engineers, contractors), interior design, budget planning, and permit guidance. What specific area would you like to explore?'
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chatbot-page">
      {/* Hero Section */}
      <section className="chatbot-hero">
        <div className="container">
          <div className="chatbot-hero-content fade-in-up">
            <FiMessageCircle className="chatbot-hero-icon" />
            <h1 className="chatbot-title">Fixora360 AI Consultant</h1>
            <p className="chatbot-subtitle">
              Get instant, intelligent guidance for all your real estate, construction, and design questions
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot Interface */}
      <section className="section chatbot-section">
        <div className="container">
          <div className="chatbot-container">
            {/* Quick Actions */}
            <div className="quick-actions fade-in-up">
              <h3 className="quick-actions-title">Quick Actions</h3>
              <div className="quick-actions-grid">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className="quick-action-btn"
                    onClick={() => handleQuickAction(action.query)}
                  >
                    {action.icon}
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="chat-window">
              <div className="chat-header">
                <div className="chat-header-content">
                  <div className="bot-avatar">
                    <FiMessageCircle />
                  </div>
                  <div>
                    <h3 className="bot-name">Fixora360 AI Consultant</h3>
                    <p className="bot-status">Online • 24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.type}`}>
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="message-time">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="message bot">
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Type your message here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isTyping}
                />
                <button
                  className="send-button"
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                >
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Chatbot

