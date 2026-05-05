import { useState, useRef, useEffect } from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import './Footer.css'

const cols = {
  'Quick Links': [
    { label:'Home', href:'#home' },
    { label:'About Us', href:'#about' },
    { label:'Our Services', href:'#services' },
    { label:'Skill Development', href:'#skill' },
    { label:'Insights', href:'#insights' },
    { label:'Careers', href:'#careers' },
    { label:'Gallery', href:'#gallery' },
    { label:'Contact', href:'#contact' },
  ],
  'Our Services': [
    { label:'Cybersecurity Awareness', href:'#services' },
    { label:'Digital Investigation', href:'#services' },
    { label:'Software Development', href:'#services' },
    { label:'Professional Training', href:'#services' },
    { label:'IT Consulting', href:'#services' },
    { label:'Mobile Apps', href:'#services' },
  ],
  'Resources': [
    { label:'Cyber Safety Tips', href:'#' },
    { label:'Report Cyber Crime', href:'#contact' },
    { label:'Privacy Policy', href:'#' },
    { label:'Terms of Service', href:'#' },
    { label:'RTI Information', href:'#' },
    { label:'Annual Report', href:'#' },
  ],
}

export default function Footer() {
  const triggerRef = useRef(null)
  const isInView = useInView(triggerRef, { amount: 0.01 })
  const [isOpen, setIsOpen] = useState(false)

  // Sync scroll position with open state
  useEffect(() => {
    setIsOpen(isInView)
  }, [isInView])

  const go = (href) => {
    if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior:'smooth' })
    setIsOpen(false)
  }

  // Animation configuration for inner elements (triggers once)
  const animProps = (delay) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut", delay }
  })

  return (
    <>
      {/* 
        This invisible spacer sits at the normal end of the document.
        When it enters the viewport, it triggers the footer to slide up. 
      */}
      <div ref={triggerRef} className="footer-scroll-trigger" />

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="footer-overlay-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Dark overlay backdrop with blur */}
            <div className="footer-backdrop" onClick={() => setIsOpen(false)} />

            {/* The Footer Panel itself */}
            <motion.footer 
              className="footer fixed-footer-panel"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="footer-grid-bg" />

              <div className="container footer-top">
                {/* BRAND */}
                <div className="footer-brand">
                  <motion.div className="footer-logo" {...animProps(0.1)}>
                    <img src="/Logo.png" alt="CRCCF Logo" className="footer-logo-img" />
                    <div>
                      <div className="footer-logo-name">CRCCF</div>
                      <div className="footer-logo-sub">CR CYBER CRIME FOUNDATION</div>
                    </div>
                  </motion.div>

                  <motion.p className="footer-tagline" {...animProps(0.2)}>
                    India's trusted cybersecurity and IT solutions organisation — protecting citizens 
                    and empowering businesses with 24/7 digital security and innovation.
                  </motion.p>

                  {/* NEWSLETTER */}
                  <motion.div className="footer-news" {...animProps(0.3)}>
                    <p className="footer-news-label">Subscribe for updates</p>
                    <div className="footer-news-row">
                      <input type="email" placeholder="Enter your email" />
                      <button><ArrowRight size={15} /></button>
                    </div>
                  </motion.div>

                  {/* CONTACT QUICK */}
                  <motion.div className="footer-quick-contacts" {...animProps(0.4)}>
                    <a href="tel:1930" className="footer-qc">
                      <Phone size={14} /> 1930
                    </a>
                    <a href="mailto:info@crccf.in" className="footer-qc">
                      <Mail size={14} /> info@crccf.in
                    </a>
                    <div className="footer-qc footer-qc-addr">
                      <MapPin size={14} /> Bhubaneshwar, Odisha, India
                    </div>
                  </motion.div>
                </div>

                {/* COLS */}
                {Object.entries(cols).map(([col, links], idx) => {
                  const colDelay = 0.2 + (idx * 0.1);
                  return (
                    <div key={col} className="footer-col">
                      <motion.h4 className="footer-col-h" {...animProps(colDelay)}>
                        {col}
                      </motion.h4>
                      <motion.ul className="footer-col-ul" {...animProps(colDelay + 0.1)}>
                        {links.map(l => (
                          <li key={l.label}>
                            <a href={l.href} onClick={e => { e.preventDefault(); go(l.href) }}>
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM */}
              <motion.div 
                className="footer-bottom"
                {...animProps(0.6)}
              >
                <div className="container footer-bottom-inner">
                  <p>© {new Date().getFullYear()} CR Cyber Crime Foundation. All rights reserved. | Government Recognised Organisation</p>
                  <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Sitemap</a>
                  </div>
                </div>
              </motion.div>
            </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
