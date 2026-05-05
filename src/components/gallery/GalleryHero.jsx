import { motion } from 'framer-motion'
import '../../pages/Gallery.css'

export default function GalleryHero() {
  const heroImage = "https://media.base44.com/images/public/69e89f547154ba3350c8414c/331be5aa7_generated_3c3cb018.png"

  return (
    <section className="gallery-hero">
      <motion.div
        className="gallery-hero-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="gallery-hero-title-bg"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: [-200, 0, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 3.5, times: [0, 0.9, 1], ease: "easeOut" }}
        >
          GALLERY
        </motion.h1>

        <div className="gallery-hero-card">
          <h2>Gallery</h2>
          <p>Explore moments that inspire,<br/>work that makes an impact.</p>
          <div className="gallery-hero-line" />
        </div>
      </motion.div>

      <motion.div
        className="gallery-hero-right"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={heroImage} alt="Gallery hero" className="gallery-hero-img" />
      </motion.div>
    </section>
  )
}
