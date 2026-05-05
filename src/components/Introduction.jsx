import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, BookOpen, Laptop, Target, Rocket, Zap } from 'lucide-react'
import './Introduction.css'

export default function Introduction() {
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
    <section id="introduction" className="intro-section">
      {/* ── TOP BLUE SECTION ── */}
      <div className="intro-top">
        <div className="intro-bg-grid"></div>
        <div className="container intro-container">
          <div className="intro-split">
            {/* Left Content */}
            <motion.div 
              className="intro-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="intro-badge">
                <Target size={14} style={{ color: '#F59E0B' }} /> Introduction
              </div>
              <h2 className="intro-title">
                Building a <span>Safer Digital</span><br />Future
              </h2>
              <p className="intro-desc">
                CR Cyber Crime Foundation is a forward-thinking non-profit initiative addressing modern digital challenges through: 🛡️ Awareness, 💡 Innovation, and ⚙️ Technology. We provide a platform that enables individuals and organizations to navigate the digital world safely and efficiently.
              </p>
              <div className="intro-tags">
                <span className="intro-tag"><Shield size={14} color="#F59E0B" /> Cybersecurity</span>
                <span className="intro-tag"><BookOpen size={14} color="#10B981" /> Research</span>
                <span className="intro-tag"><Laptop size={14} color="#3B82F6" /> IT Development</span>
              </div>
            </motion.div>
            
            {/* Right Image/Graphic (3D Laptop) */}
            <motion.div 
              className="intro-laptop-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="laptop">
                <div className="screen">
                  <div className="laptop-header"></div>
                  <img src="/Logo.png" alt="CRCCF Logo" className="laptop-logo" />
                </div>
                <div className="keyboard"></div>
              </div>
              <div className="intro-image-glow"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM WHITE SECTION ── */}
      <div className="intro-bottom">
        <div className="container">
          <div className="intro-cards-grid" ref={ref}>
            {/* Card 1: Purpose */}
            <motion.div 
              className={`intro-card ${isAutoHovering ? 'auto-hover' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="intro-card-icon"><Target size={24} /></div>
              <h3>Purpose</h3>
              <p>Our purpose is to enhance digital safety and awareness by bridging the gap between: 📚 Knowledge and ⚠️ Real-world cyber threats. We focus on educating, guiding, and supporting communities to adopt safe and responsible digital practices.</p>
              <div className="intro-card-tags">
                <span>Digital Safety</span>
                <span>Awareness</span>
                <span>Education</span>
              </div>
            </motion.div>

            {/* Card 2: Mission */}
            <motion.div 
              className={`intro-card ${isAutoHovering ? 'auto-hover' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="intro-card-icon"><Rocket size={24} /></div>
              <h3>Mission</h3>
              <p>Our mission is to lead the Cyber Revolution 🚀 by combining: 🔐 Cybersecurity Awareness, ⚙️ Advanced Technology, and 📊 Research-Driven Solutions. We are dedicated to equipping individuals with practical skills, industry knowledge, and ethical values.</p>
              <div className="intro-card-tags">
                <span><BookOpen size={14} /> Research</span>
                <span><Zap size={14} /> Future Ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
