import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import '../../pages/Gallery.css'

export default function GalleryFooterQuote() {
  return (
    <section className="gallery-quote-section">
      <motion.div
        className="gallery-quote-box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="gallery-quote-dots">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="gallery-quote-dot" />
          ))}
        </div>

        <Quote className="w-8 h-8 text-white rotate-180 shrink-0" color="white" size={32} />
        
        <p className="gallery-quote-text">
          Every picture tells a story, every story builds <span style={{fontWeight: 'bold'}}>our legacy.</span>
        </p>

        <Quote className="w-8 h-8 text-white shrink-0" color="white" size={32} />
      </motion.div>
    </section>
  )
}
