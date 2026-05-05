import { motion } from 'framer-motion'
import './WhoWeAre.css'

const OrgIcon = () => (
  <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
    {/* Cloud behind */}
    <path d="M26 14 A 5 5 0 0 0 16 10 A 7 7 0 0 0 6 16 A 4 4 0 0 0 10 24 L 28 24 A 6 6 0 0 0 26 14 Z" fill="#DBEAFE" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
    {/* Main Building */}
    <rect x="14" y="16" width="20" height="20" fill="#F8FAFC" stroke="#111827" strokeWidth="2" rx="1" />
    {/* Door */}
    <rect x="20" y="26" width="8" height="10" fill="#FDE047" stroke="#111827" strokeWidth="2" rx="1" />
    {/* Windows */}
    <rect x="17" y="20" width="4" height="4" fill="#60A5FA" stroke="#111827" strokeWidth="2" rx="0.5" />
    <rect x="27" y="20" width="4" height="4" fill="#60A5FA" stroke="#111827" strokeWidth="2" rx="0.5" />
    {/* Roof */}
    <path d="M10 16 L24 6 L38 16" fill="#FCA5A5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ServeIcon = () => (
  <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
    {/* Globe */}
    <circle cx="20" cy="20" r="12" fill="#DBEAFE" stroke="#111827" strokeWidth="2" />
    <path d="M20 8 C 26 8, 26 32, 20 32" stroke="#111827" strokeWidth="2" />
    <path d="M20 8 C 14 8, 14 32, 20 32" stroke="#111827" strokeWidth="2" />
    <path d="M8 20 L 32 20" stroke="#111827" strokeWidth="2" />
    {/* Nodes (Users) */}
    <circle cx="8" cy="10" r="3" fill="#FCA5A5" stroke="#111827" strokeWidth="2" />
    <path d="M10.5 12.5 L 14 15" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="10" r="3" fill="#FDE047" stroke="#111827" strokeWidth="2" />
    <path d="M29.5 12.5 L 26 15" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="36" r="3" fill="#86EFAC" stroke="#111827" strokeWidth="2" />
    <path d="M20 33 L 20 29" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const FocusIcon = () => (
  <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
    {/* Paper/Board */}
    <rect x="6" y="6" width="28" height="28" fill="#F8FAFC" stroke="#111827" strokeWidth="2" rx="2" />
    {/* Header line */}
    <path d="M6 14 L34 14" stroke="#111827" strokeWidth="2" />
    <circle cx="10" cy="10" r="1.5" fill="#FCA5A5" />
    <circle cx="15" cy="10" r="1.5" fill="#FDE047" />
    <circle cx="20" cy="10" r="1.5" fill="#86EFAC" />
    {/* Bar chart */}
    <rect x="10" y="24" width="4" height="6" fill="#60A5FA" stroke="#111827" strokeWidth="2" />
    <rect x="18" y="18" width="4" height="12" fill="#FCA5A5" stroke="#111827" strokeWidth="2" />
    <rect x="26" y="22" width="4" height="8" fill="#FDE047" stroke="#111827" strokeWidth="2" />
    {/* Line graph crossing it */}
    <path d="M8 22 L 16 16 L 24 24 L 32 10" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="10" r="2.5" fill="#86EFAC" stroke="#111827" strokeWidth="2" />
  </svg>
)

const VisionIcon = () => (
  <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
    {/* Document */}
    <path d="M10 6 L22 6 L30 14 L30 34 C30 35 29 36 28 36 L10 36 C9 36 8 35 8 34 L8 8 C8 7 9 6 10 6 Z" fill="#F8FAFC" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
    {/* Fold */}
    <path d="M22 6 L22 14 L30 14" fill="#E2E8F0" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
    {/* Lines of text */}
    <path d="M12 28 L20 28" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 32 L26 32" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    {/* Lightbulb in the center */}
    <path d="M19 13 C 16 13, 14 15, 14 18 C 14 20, 16 21, 16 23 L 16 24 C 16 25, 17 26, 19 26 C 21 26, 22 25, 22 24 L 22 23 C 22 21, 24 20, 24 18 C 24 15, 22 13, 19 13 Z" fill="#FDE047" stroke="#111827" strokeWidth="2" strokeLinejoin="round" />
    <path d="M17 24 L 21 24" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <path d="M18 26 L 20 26" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    {/* Glow rays */}
    <path d="M19 10 L 19 8" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 12 L 11 10" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 12 L 27 10" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const cards = [
  {
    icon: <OrgIcon />,
    color: '#2563EB',
    title: 'About the Organization',
    bg: '/about.png',
    desc: (
      <>
        CR Cyber Crime Foundation (Cyber Revolution) is a non-profit organization committed to advancing cybercrime awareness, supporting digital investigations, and transforming how individuals and organizations interact with the digital world.
      </>
    ),
  },
  {
    icon: <ServeIcon />,
    color: '#3B82F6',
    title: 'Who We Serve',
    bg: '/serve.png',
    desc: (
      <>
        We serve a diverse audience including:<br />
        🎓 Students<br />
        👨‍👩‍👧‍👦 General Public<br />
        🏢 Organizations<br />
        ⚖️ Cybercrime Victims<br /><br />
        Through research-driven insights, practical guidance, and actionable resources, we help them effectively combat evolving cyber threats.
      </>
    ),
  },
  {
    icon: <FocusIcon />,
    color: '#1D4ED8',
    title: 'Our Core Focus',
    bg: '/focus.png',
    desc: (
      <>
        Our key focus areas include:<br /><br />
        🛡️ Cybersecurity Awareness<br />
        💻 Advanced IT & Software Development<br />
        🎓 Industry-Oriented Training & Internship Programs
      </>
    ),
  },
  {
    icon: <VisionIcon />,
    color: '#0F2B5B',
    title: 'Our Vision',
    bg: '/vision.png',
    desc: (
      <>
        We aim to build a secure, innovative, and future-ready digital ecosystem by integrating:<br /><br />
        ⚙️ Technology<br />
        📚 Research<br />
        🧠 Cyber Intelligence<br /><br />
        Our goal is to empower the next generation with essential digital and cybersecurity skills.
      </>
    ),
  },
]

export default function WhoWeAre() {
  return (
    <section id="about" className="section who-section">
      <div className="container">
        <motion.div
          className="who-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
        >
          <p className="section-tag">Who We Are</p>
          <h2 className="section-title">
            About <span className="accent">CR Cyber Crime Foundation</span>
          </h2>
          <p className="section-subtitle">
            A trusted partner in India's cybersecurity ecosystem — combining technology expertise,
            legal knowledge, and community outreach to create a safer digital India.
          </p>
        </motion.div>

        <div className="who-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="who-card-container"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .10 }}
            >
              <div className="who-card-flipper">
                {/* ── FRONT ── */}
                <div
                  className="who-card-front"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${c.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="who-icon-wrapper">
                    <div
                      className="who-icon"
                      style={{ background: `${c.color}14`, color: c.color }}
                    >
                      {c.icon}
                    </div>
                  </div>
                  <h3 className="who-title">{c.title}</h3>
                  <div className="who-divider" style={{ background: c.color }} />
                </div>

                {/* ── BACK ── */}
                <div className="who-card-back">
                  <h3 className="who-title" style={{ color: c.color }}>{c.title}</h3>
                  <p className="who-desc">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
