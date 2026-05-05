import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Rocket, Globe, Trophy } from 'lucide-react'
import './ProjectsPortfolio.css'

const statsData = [
  { val: 70, suffix: '+', label: 'Total Projects', color: '#1A56DB' },
  { val: 4,  suffix: '+', label: 'Ongoing Projects', color: '#059669' },
  { val: 27, suffix: '+', label: 'Completed This Year', color: '#7C3AED' },
  { val: 39, suffix: '+', label: 'Pending Projects', color: '#D97706' },
]

function Counter({ target, suffix, color, running }) {
  const [count, setCount] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!running) return
    const duration = 2000
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * target))
      if (p < 1) raf.current = requestAnimationFrame(step)
      else setCount(target)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [running, target])

  return <span style={{ color }}>{count}{suffix}</span>
}

export default function ProjectsPortfolio() {
  const [running, setRunning] = useState(false)
  const ref = useRef(null)
  const portInView = useInView(ref, { once: true, amount: 0.3 })
  const [isAutoHovering, setIsAutoHovering] = useState(false)

  useEffect(() => {
    if (portInView) {
      const timer = setTimeout(() => {
        setIsAutoHovering(true)
        setTimeout(() => setIsAutoHovering(false), 1200)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [portInView])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRunning(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects-portfolio" className="portfolio-section" ref={ref}>
      <div className="container">
        {/* Header & Overview Section */}
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="portfolio-badge">
            <Briefcase size={14} style={{ color: '#8B5CF6' }} /> Projects & Portfolio
          </div>
          <h2 className="portfolio-title">
            Our <span>Projects</span> & Portfolio 🧪🌐
          </h2>
          
          <div className="portfolio-overview">
            <p>At CR Cyber Crime Foundation (Cyber Revolution), we actively engage in the development of innovative, impactful, and technology-driven projects across multiple domains.</p>
            <p>Our projects reflect our commitment to cybersecurity, digital transformation, and advanced IT solutions.</p>
            <p>We have successfully undertaken projects at national, government, and international levels, showcasing our capability to deliver reliable and scalable solutions.</p>
            <p>All projects are original products developed by CRCCF, highlighting our focus on innovation, research, and real-world problem-solving.</p>
          </div>
        </motion.div>

        {/* Project Statistics (Impact Section Style) */}
        <div className="portfolio-stats-container">
          <motion.div
            className="stats-proj-header"
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.5 }}
          >
            <h3 className="stats-proj-title">Project Statistics 📊</h3>
          </motion.div>

          <div className="port-stats-grid">
            {statsData.map((s, i) => (
              <motion.div
                key={s.label}
                className={`proj-stat-card ${isAutoHovering ? 'auto-hover' : ''}`}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.45, delay: i*.1 }}
              >
                <div className="proj-stat-val">
                  <Counter target={s.val} suffix={s.suffix} color={s.color} running={running} />
                </div>
                <div className="proj-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="portfolio-grid">
          {/* Card 1: Our Approach */}
          <motion.div 
            className={`portfolio-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="portfolio-card-inner">
              <div className="portfolio-card-icon"><Rocket size={32} /></div>
              <h3>Our Approach</h3>
              <ul className="portfolio-list">
                <li>Innovative and solution-oriented 💡</li>
                <li>Secure and technology-driven 🔐</li>
                <li>Scalable and future-ready 🚀</li>
                <li>Aligned with real-world requirements 🌐</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Our Commitment */}
          <motion.div 
            className={`portfolio-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="portfolio-card-inner">
              <div className="portfolio-card-icon"><Trophy size={32} /></div>
              <h3>Our Commitment</h3>
              <p className="portfolio-card-text">
                Through continuous research, development, and innovation, CR Cyber Crime Foundation aims to deliver high-quality projects that contribute to digital advancement and cybersecurity growth.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Project Scope */}
          <motion.div 
            className={`portfolio-card ${isAutoHovering ? 'auto-hover' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="portfolio-card-inner">
              <div className="portfolio-card-icon"><Globe size={32} /></div>
              <h3>Project Scope</h3>
              <ul className="portfolio-list">
                <li>National-level initiatives 🇮🇳</li>
                <li>Government-related projects 🏛️</li>
                <li>International collaborations 🌍</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
