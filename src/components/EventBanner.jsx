import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ArrowRight, X } from 'lucide-react'
import './EventBanner.css'

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="event-banner-wrapper"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden', padding: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container">
            <div className="event-glass-card">
              {/* LEFT SECTION */}
              <div className="event-left">
                <button className="event-close-btn" onClick={() => setIsVisible(false)} aria-label="Close event banner">
                  <X size={14} />
                </button>
                <div className="event-icon-pulse">
                  <Calendar size={14} />
                </div>
                <div className="event-badges">
                  <span className="event-badge-main">Upcoming Event</span>
                  <span className="event-badge-urgent">
                    <span className="urgent-dot" /> Limited Seats
                  </span>
                </div>
              </div>

              {/* CENTER SECTION */}
              <div className="event-center">
                <h3 className="event-title">Company Inauguration</h3>
                <span className="event-sep">&bull;</span>
                <div className="event-details">
                  <MapPin size={12} />
                  <span>May 8th, 2025 &bull; Bubaneshwar, Odisha</span>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="event-right">
                <button className="event-cta-btn">
                  Reserve Your Seat <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
