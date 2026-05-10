import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const digitalStats = [
  { val: 500, suffix: '+', label: 'Cyber Defenses', color: '#1A56DB' },
  { val: 120, suffix: '+', label: 'SaaS Products', color: '#7C3AED' },
  { val: 25, suffix: 'M+', label: 'Secure Transactions', color: '#059669' },
  { val: 99.9, suffix: '%', label: 'Uptime', color: '#D97706' },
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
      <section
        className="relative overflow-hidden bg-[#0C1A3A] py-[clamp(40px,7vw,64px)] before:absolute before:inset-0 before:content-[''] before:pointer-events-none before:[background-image:linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] before:[background-size:48px_48px] "
      >
        <div className="container-custom">
          <motion.div
            className="text-center mb-[40px] relative z-[1] flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
          >
            <p className="section-tag" style={{ color: 'rgba(255,255,255,.60)' }}>Digital Footprint</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Our Numbers <span style={{ color: '#60A5FA' }}>Speak</span>
            </h2>
          </motion.div>


          <div className="relative z-[1] grid grid-cols-[repeat(4,1fr)] gap-[20px] max-[900px]:grid-cols-[repeat(2,1fr)] max-[900px]:gap-[12px]">
            {digitalStats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`bg-[rgba(255,255,255,.05)] border border-[rgba(255,255,255,.10)] rounded-[14px] px-[24px] py-[32px] text-center backdrop-blur-[4px] transition-all duration-[280ms] hover:bg-[rgba(255,255,255,.08)] hover:translate-y-[-2px] ${isAutoHovering ? 'bg-[rgba(255,255,255,.08)] translate-y-[-2px]' : ''} max-[640px]:px-[12px] max-[640px]:py-[16px]`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: i * .1 }}
              >
                <div className="font-['Outfit',sans-serif] text-[clamp(26px,3.5vw,48px)] font-[900] leading-[1] tracking-[-.02em] max-[640px]:text-[clamp(18px,5vw,24px)]">
                  <Counter target={s.val} suffix={s.suffix} color={s.color} running={running} decimals={s.val % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="text-[12.5px] text-[rgba(255,255,255,.50)] font-[600] uppercase tracking-[.07em] mt-[10px] max-[640px]:text-[11px] max-[640px]:mt-[8px]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
