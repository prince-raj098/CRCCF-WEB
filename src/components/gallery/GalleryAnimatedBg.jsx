import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Camera, Sparkles, Image as ImageIcon, Film, Aperture } from 'lucide-react'
import '../../pages/Gallery.css'

export default function GalleryAnimatedBg() {
  const iconList = [Camera, Sparkles, ImageIcon, Film, Aperture]
  
  const iconsData = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      IconComponent: iconList[i % iconList.length],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
    }))
  }, []) // iconList is static here

  return (
    <div className="gallery-bg">
      {iconsData.map((data, i) => {
        const { IconComponent, left, top, duration, delay } = data

        return (
          <motion.div
            key={i}
            className="gallery-bg-icon"
            style={{ left, top }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <IconComponent strokeWidth={1.5} size={40} />
          </motion.div>
        )
      })}
    </div>
  )
}
