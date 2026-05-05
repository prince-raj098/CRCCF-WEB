import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  GraduationCap, 
  FileText, 
  Briefcase, 
  Globe, 
  Clock, 
  BookOpen, 
  Laptop, 
  BrainCircuit, 
  Network, 
  Target, 
  Award,
  Search,
  Rocket,
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import './InternshipPrograms.css'

const domains = [
  "Software Development Intern",
  "Software Designing Intern",
  "Software Testing Intern",
  "Digital Marketing Intern",
  "SEO Intern",
  "Cyber Law Intern",
  "Cyber Psychology Intern",
  "Cyber Investigation Intern",
  "Cyber Research Intern",
  "Cyber Case Study Intern",
  "Cyber Forensic Intern"
]

export default function InternshipPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [isAutoHovering, setIsAutoHovering] = useState(false)
  const [expandedCards, setExpandedCards] = useState({ mentorship: false, certification: false })

  const toggleCard = (card) => {
    setExpandedCards(prev => ({ ...prev, [card]: !prev[card] }))
  }

  useEffect(() => {
    if (isInView) {
      // Delay before starting to ensure the user has finished scrolling to the section
      const startTimer = setTimeout(() => {
        setIsAutoHovering(true)
        // Keep hover for 1.2 seconds to make it clearly visible
        setTimeout(() => setIsAutoHovering(false), 1200)
      }, 300)
      return () => clearTimeout(startTimer)
    }
  }, [isInView])

  return (
    <section id="internship-programs" className="internship-section">
      <div className="container">
        <motion.div 
          className="internship-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="internship-badge">
            <GraduationCap size={14} style={{ color: '#2563EB' }} /> Internship Programs
          </div>
          
          <h2 className="internship-title">
            Our <span>Internship</span> Programs
          </h2>
          
          <div className="internship-overview">
            <h3 className="overview-title">
              <FileText size={20} className="header-icon" /> Overview
            </h3>
            <p>
              At CR Cyber Crime Foundation (Cyber Revolution), we offer structured and industry-oriented internship programs designed to equip individuals with practical skills, real-time experience, and professional exposure across multiple domains.
            </p>
          </div>
        </motion.div>

        {/* Domains Section */}
        <motion.div 
          className="internship-domains-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="domains-header">
            <h3><Briefcase size={24} className="header-icon" /> Internship Domains</h3>
            <p>We provide internship opportunities in the following areas:</p>
          </div>
          
          <div className="domains-grid">
            {domains.map((domain, index) => (
              <button key={index} className="domain-btn">
                {domain}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Structure Section */}
        <motion.div 
          className="internship-structure"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="structure-content">
            <h3>Program Structure & Learning</h3>
            <p className="structure-subtitle">Our internship programs are designed to bridge the gap between academic knowledge and industry requirements.</p>
            
            <p className="structure-lead">Participants will gain:</p>
            <ul className="structure-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Real-time project exposure</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Industry-relevant skills and practical experience</li>
              <li><CheckCircle2 size={16} className="list-icon" /> A balanced approach of theoretical and practical learning</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Guidance from dedicated and experienced mentors</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Open learning environment with anytime mentor support</li>
            </ul>
          </div>
        </motion.div>

        {/* Duration & Mode Section */}
        <motion.div 
          className="internship-duration-mode"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="duration-mode-grid">
            <div className="dm-card">
              <div className="dm-icon"><Clock size={28} strokeWidth={2.5} /></div>
              <div className="dm-info">
                <h4>Duration</h4>
                <p>3 to 6 Months</p>
              </div>
            </div>
            <div className="dm-card">
              <div className="dm-icon"><Globe size={28} strokeWidth={2.5} /></div>
              <div className="dm-info">
                <h4>Mode</h4>
                <p>Online & Offline Classes Available</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What We Provide Section */}
        <motion.div 
          className="internship-provide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="provide-header">
            <h3>Professional Benefits</h3>
          </div>
          <div className="provide-container-box" ref={ref}>
            <div className="provide-grid">
              {[
                { icon: <BookOpen size={32} />, text: 'Comprehensive course materials' },
                { icon: <Laptop size={32} />, text: 'Hands-on training and practical sessions' },
                { icon: <BrainCircuit size={32} />, text: 'Continuous evaluation and mentorship' },
                { icon: <Network size={32} />, text: 'Professional and structured learning environment' }
              ].map((item, idx) => (
                <div key={idx} className={`provide-neumorphic-card ${isAutoHovering ? 'auto-hover' : ''}`}>
                  <div className="provide-neumorphic-icon">{item.icon}</div>
                  <div className="provide-neumorphic-content">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Support & Certification Cards */}
        <div className="internship-bottom-grid">
          <motion.div 
            className="internship-profile-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="profile-card-top">
              <h4 className="top-label">Mentorship</h4>
              <h3>Training, Mentorship & Placement Support</h3>
              <div className="wave-bg"></div>
            </div>
            <div className="profile-card-avatar">
              <div className="avatar-inner"><Target size={36} color="#1A56DB" /></div>
            </div>
            <div className="profile-card-body">
              <p>We are committed to delivering quality education through our team of experienced professionals.</p>
              
              <AnimatePresence>
                {expandedCards.mentorship && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p>Our mentors ensure that students receive proper guidance, industry insights, and continuous support throughout the program.</p>
                    <p>We also provide placement assistance to eligible candidates <Rocket size={14} className="inline-icon" />, helping them transition into real-world career opportunities based on their performance, skills, and evaluation.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="read-more-btn" onClick={() => toggleCard('mentorship')}>
                {expandedCards.mentorship ? 'Show Less' : 'Read More'}
                {expandedCards.mentorship ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="internship-profile-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="profile-card-top">
              <h4 className="top-label">Certification</h4>
              <h3>Certification & Verification</h3>
              <div className="wave-bg"></div>
            </div>
            <div className="profile-card-avatar">
              <div className="avatar-inner"><Award size={36} color="#1A56DB" /></div>
            </div>
            <div className="profile-card-body">
              <p>Upon successful completion of the internship program, participants will be awarded:</p>
              
              <AnimatePresence>
                {expandedCards.certification && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <ul className="internship-content-list">
                      <li>Digital (Virtual) Certificate <Globe size={14} className="inline-icon" /></li>
                      <li>Physical Hard Copy Certificate <FileText size={14} className="inline-icon" /></li>
                    </ul>
                    <p>These certifications are officially issued by CR Cyber Crime Foundation (CRCCF) and hold professional value in recognizing the candidate’s training and practical experience.</p>
                    <p>To ensure authenticity, each student’s certification details, profile, and photograph will be securely published on the official Student Verification Portal <Search size={14} className="inline-icon" />.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button className="read-more-btn" onClick={() => toggleCard('certification')}>
                {expandedCards.certification ? 'Show Less' : 'Read More'}
                {expandedCards.certification ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
