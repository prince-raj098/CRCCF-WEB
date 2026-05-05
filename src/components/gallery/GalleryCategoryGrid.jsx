import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Newspaper, Video, Users, Award, Monitor, BookOpen, ShieldCheck, Bell, Search, FlaskConical, Briefcase, Palette, Presentation } from 'lucide-react'
import '../../pages/Gallery.css'

const categories = [
  { title: "Our Student", icon: GraduationCap, iconBg: "#2563EB" },
  { title: "Media & Press", icon: Newspaper, iconBg: "#22c55e" },
  { title: "Events", icon: Video, iconBg: "#ef4444" },
  { title: "Team Moments", icon: Users, iconBg: "#f97316" },
  { title: "Certificates", icon: Award, iconBg: "#8b5cf6" },
  { title: "Client Work", icon: Monitor, iconBg: "#06b6d4" },
  { title: "Training", icon: BookOpen, iconBg: "#22c55e" },
  { title: "Cyber Campaigns", icon: ShieldCheck, iconBg: "#14b8a6" },
  { title: "Product Launches", icon: Bell, iconBg: "#ef4444" },
  { title: "Investigation", icon: Search, iconBg: "#eab308" },
  { title: "R&D", icon: FlaskConical, iconBg: "#6366f1" },
  { title: "Internship", icon: Briefcase, iconBg: "#ec4899" },
  { title: "UI/UX", icon: Palette, iconBg: "#06b6d4" },
  { title: "Seminars", icon: Presentation, iconBg: "#f97316" },
  { title: "Course", icon: Presentation, iconBg: "#f97316" },
]

export default function GalleryCategoryGrid({ images = [] }) {
  const navigate = useNavigate()

  return (
    <section className="gallery-grid-section">
      <div className="gallery-grid">
        {categories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              onClick={() => navigate(`/gallery/category/${idx}`)}
              whileHover={{ y: -5 }}
              className="gallery-card"
            >
              <div className="gallery-card-img-wrap">
                <img
                  src={images[idx] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"}
                  alt={cat.title}
                  className="gallery-card-img"
                />
                <div 
                  className="gallery-card-icon-badge"
                  style={{ backgroundColor: cat.iconBg }}
                >
                  <Icon color="white" size={16} />
                </div>
              </div>

              <div className="gallery-card-bottom">
                <h3 className="gallery-card-title">{cat.title}</h3>
                <div className="gallery-card-arrow">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
