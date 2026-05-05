import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './StatsBar.css'

const digitalStats = [
  { val: 500,  suffix: '+', label: 'Cyber Defenses',       color: '#1A56DB' },
  { val: 120,  suffix: '+', label: 'SaaS Products',        color: '#7C3AED' },
  { val: 25,   suffix: 'M+',label: 'Secure Transactions',  color: '#059669' },
  { val: 99.9, suffix: '%', label: 'Uptime',               color: '#D97706' },
]

function Counter({ target, suffix, color, running, decimals = 0 }) {
  const [count, setCount] = useState(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!running) return
    const duration = 2000
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(parseFloat((ease * target).toFixed(decimals)))
      if (p < 1) raf.current = requestAnimationFrame(step)
      else setCount(target)
    }
    raf.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf.current)
  }, [running, target, decimals])

  return <span style={{ color }}>{count.toFixed(decimals)}{suffix}</span>
}

export default function StatsBar() {
  const [running, setRunning] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isAutoHovering, setIsAutoHovering] = useState(false)

  useEffect(() => {
    if (isInView) {
      setRunning(true)
      const timer = setTimeout(() => {
        setIsAutoHovering(true)
        setTimeout(() => setIsAutoHovering(false), 1200)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={ref}>
      {/* DIGITAL FOOTPRINT — dark section */}
      <section className="stats-digital-section">
        <div className="container">
          <motion.div
            className="stats-dig-header"
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.5 }}
          >
            <p className="section-tag" style={{ color:'rgba(255,255,255,.60)' }}>Digital Footprint</p>
            <h2 className="section-title" style={{ color:'#fff' }}>
              Our Numbers <span style={{ color:'#60A5FA' }}>Speak</span>
            </h2>
          </motion.div>

          <div className="stats-dig-grid">
            {digitalStats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`dig-stat-card ${isAutoHovering ? 'auto-hover' : ''}`}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ duration:.45, delay: i*.1 }}
              >
                <div className="dig-stat-val">
                  <Counter target={s.val} suffix={s.suffix} color={s.color} running={running} decimals={s.val % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="dig-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
