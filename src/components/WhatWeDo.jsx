import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Settings, Puzzle, Megaphone, Laptop, FlaskConical } from 'lucide-react'
import './WhatWeDo.css'

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isAutoHovering, setIsAutoHovering] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsAutoHovering(true)
        setTimeout(() => setIsAutoHovering(false), 1200)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section id="what-we-do" className="wwd-section">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="wwd-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="wwd-badge">
            <Settings size={14} style={{ color: '#F59E0B' }} /> What We Do
          </div>
          <h2 className="wwd-title">
            Our Core <span>Domains</span> ⚙️
          </h2>
          <p className="wwd-desc">
            We work across multiple domains including cybersecurity awareness 🛡️, digital investigation support 🔍, software and IT development 💻, and professional training 🎓.<br/><br/>
            Through structured programs, workshops 📢, and initiatives, we provide practical exposure, technical guidance, and real-world learning opportunities 🌐.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="wwd-grid" ref={ref}>
          {/* Card 1: Services */}
          <motion.div 
            className={`wwd-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="wwd-card-image">
              <Puzzle size={48} />
              <h3 className="card-front-title">Services</h3>
            </div>
            <div className="wwd-card-description">
              <h3 className="text-title">Services 🧩</h3>
              <div className="text-body">
                <ul>
                  <li>Cybersecurity awareness 🛡️</li>
                  <li>Digital investigation 🔍</li>
                  <li>IT & Software solutions 💻</li>
                  <li>Training & Internships 🎓</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Activities */}
          <motion.div 
            className={`wwd-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="wwd-card-image">
              <Megaphone size={48} />
              <h3 className="card-front-title">Activities</h3>
            </div>
            <div className="wwd-card-description">
              <h3 className="text-title">Activities 📢</h3>
              <div className="text-body">
                <ul>
                  <li>Cyber awareness campaigns 📢</li>
                  <li>Training sessions & workshops 🎓</li>
                  <li>Research initiatives 📚</li>
                  <li>Technology projects 💻</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Software Development */}
          <motion.div 
            className={`wwd-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="wwd-card-image">
              <Laptop size={48} />
              <h3 className="card-front-title">Innovation</h3>
            </div>
            <div className="wwd-card-description">
              <h3 className="text-title">Software & Innovation 💻🤖</h3>
              <p className="text-body">
                We design advanced software solutions 💻 that are practical, user-friendly, and aligned with real-world needs 🌐.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Projects & Solutions */}
          <motion.div 
            className={`wwd-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="wwd-card-image">
              <FlaskConical size={48} />
              <h3 className="card-front-title">Solutions</h3>
            </div>
            <div className="wwd-card-description">
              <h3 className="text-title">Projects & Solutions 🧪🌐</h3>
              <p className="text-body">
                Innovative 💡 and unique projects tailored for government bodies 🏛️, institutions 🏫 and various sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
