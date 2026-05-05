import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, GraduationCap, Brain, Users, Globe, Lock, Rocket, TrendingUp, HeartHandshake } from 'lucide-react'
import './WhyChooseUs.css'

const reasons = [
  {
    icon: <Shield size={26} />,
    title: 'Industry-Focused Cybersecurity Expertise',
    desc: 'We combine deep cybersecurity knowledge with real-world application, focusing on practical solutions to tackle modern cyber threats effectively.',
  },
  {
    icon: <GraduationCap size={26} />,
    title: 'Practical Learning & Real-Time Exposure',
    desc: 'Hands-on experience through live projects, case studies, and real-time problem-solving to build industry-ready skills.',
  },
  {
    icon: <Brain size={26} />,
    title: 'Research-Driven Approach',
    desc: 'Continuous research and analysis to stay updated with evolving cyber trends and deliver future-ready knowledge.',
  },
  {
    icon: <Users size={26} />,
    title: 'Expert Mentorship & Guidance',
    desc: 'Experienced mentors provide continuous support, industry insights, and structured guidance for growth.',
  },
  {
    icon: <Globe size={26} />,
    title: 'Multi-Domain Expertise',
    desc: 'Cybersecurity, digital investigation, software development, and digital marketing under one platform.',
  },
  {
    icon: <Lock size={26} />,
    title: 'Focus on Security & Ethics',
    desc: 'Solutions built on ethical practices, security, privacy, and responsible technology usage.',
  },
  {
    icon: <Rocket size={26} />,
    title: 'Career-Oriented Programs',
    desc: 'Training and internships designed to bridge the gap between academics and industry requirements.',
  },
  {
    icon: <TrendingUp size={26} />,
    title: 'Proven Work & Project Experience',
    desc: 'Multiple national and international projects showcasing reliability and scalability.',
  },
  {
    icon: <HeartHandshake size={26} />,
    title: 'Supportive Learning Environment',
    desc: 'Collaborative ecosystem where learners grow through interaction, mentorship, and continuous improvement.',
  },
]

export default function WhyChooseUs() {
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
    <section className="wcu-section">
      <div className="container">
        {/* HEADER */}
        <div className="wcu-header">
          <div className="wcu-badge">Why Choose Us 🚀</div>
          <h2 className="wcu-main-title">Building Trust Through Expertise & Innovation</h2>
          <p className="wcu-subtitle">
            At CR Cyber Crime Foundation (CRCCF), we go beyond traditional learning by integrating cybersecurity, research, and real-world applications to create impactful solutions.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="wcu-grid" ref={ref}>
          {reasons.map((r, i) => (
            <motion.div 
              key={i} 
              className={`wcu-card-modern ${isAutoHovering ? 'auto-hover' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            >
              <div className="wcu-card-modern-header">
                {r.icon}
                <h3 className="wcu-card-modern-title">{r.title}</h3>
              </div>
              
              <div className="wcu-card-modern-body">
                <p className="wcu-card-modern-desc">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
