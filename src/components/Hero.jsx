import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Shield, CheckCircle } from 'lucide-react'
import './Hero.css'

const slides = [
  { img: '/CR1.jpg', line1: "Securing India's",    line2: 'Digital Future,',        accent: 'One Step Ahead' },
  { img: '/CR2.jpg', line1: 'Building Trust in',     line2: 'a Digital-First',         accent: 'World' },
  { img: '/CR3.jpg', line1: 'Defending India',        line2: 'Against',                accent: 'Cyber Threats' },
  { img: '/CR4.jpg', line1: 'Empowering a Safer',    line2: '',                        accent: 'Digital Tomorrow' },
  { img: '/CR5.jpg', line1: 'Leading the Fight',     line2: 'Against',                accent: 'Cyber Crime' },
  { img: '/CR6.jpg', line1: "Future-Ready ",      line2: 'Cyber Protection',        accent: 'Starts Here' },
]

const stats = [
  { val: '10K+', label: 'Cases Resolved' },
  { val: '24/7', label: 'Support' },
  { val: '15+',  label: 'States' },
]

const trust = [
  { icon: <Shield size={14}/>,       text: 'Govt. Recognised' },
  { icon: <CheckCircle size={14}/>,  text: 'ISO Certified' },
  { icon: <Star size={14}/>,         text: '4.9 / 5 Rating' },
]

const containerV = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const itemV = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4,0,0.2,1] } },
}

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="hero">

      {/* ── BACKGROUND SLIDESHOW (CR1–CR6) ── */}
      <div className="hero-bg-img">
        {slides.map((slide, i) => (
          <img
            key={slide.img}
            src={slide.img}
            alt={`Hero background ${i + 1}`}
            className={`hero-slide ${i === current ? 'hero-slide--active' : ''}`}
          />
        ))}
        {/* gradient overlay so left text is readable */}
        <div className="hero-gradient" />
      </div>

      {/* ── SLIDE DOTS ── */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'hero-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="container hero-content">
        <motion.div
          className="hero-left"
          variants={containerV}
          initial="hidden"
          animate="visible"
        >

          {/* TAG + STARS */}
          <motion.div variants={itemV} className="hero-tag-row">
            <span className="hero-tag">CR Cyber Crime Foundation</span>
            <span className="hero-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B"/>)}
            </span>
          </motion.div>

          {/* HEADING — synced with slide */}
          <motion.div variants={itemV} className="hero-heading-wrap">
            <AnimatePresence mode="wait">
              <motion.h1
                key={current}
                className="hero-heading"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              >
                {slides[current].line1}<br />
                {slides[current].line2 && <>{slides[current].line2}<br /></>}
                <span className="hero-accent">{slides[current].accent}</span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          {/* SUB */}
          <motion.p variants={itemV} className="hero-sub">
            India's premier cybersecurity and IT solutions organization — 
            fighting cyber crime, building safe software, and empowering citizens 24/7.
          </motion.p>

          {/* STATS PILLS */}
          <motion.div variants={itemV} className="hero-stats">
            {stats.map((s, i) => (
              <div key={s.label} className="hero-stat">
                <span className="hs-val">{s.val}</span>
                <span className="hs-label">{s.label}</span>
                {i < stats.length - 1 && <div className="hs-sep" />}
              </div>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div variants={itemV} className="hero-btns">
            <button className="hero-btn-primary" onClick={() => go('#contact')}>
              Report Crime
              <ArrowRight size={15} />
            </button>
            <button className="hero-btn-ghost" onClick={() => go('#services')}>
              Our Services
            </button>
          </motion.div>

          {/* TRUST BAR */}
          <motion.div variants={itemV} className="hero-trust">
            <div className="trust-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2z" fill="#1A56DB" opacity=".15" stroke="#1A56DB" strokeWidth="1.5"/>
                <path d="M9 12l2 2 4-4" stroke="#1A56DB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Trusted by
            </div>
            <span className="trust-num">10,000+</span>
            <span className="trust-label">clients across India</span>
            <div className="trust-divider" />
            {trust.map(t => (
              <div key={t.text} className="trust-item">
                <span className="trust-icon">{t.icon}</span>
                {t.text}
              </div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="scroll-mouse">
          <div className="scroll-dot" />
        </div>
      </motion.div>

    </section>
  )
}
