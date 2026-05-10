import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, GraduationCap, Newspaper, Video, Users, Award, Monitor, BookOpen, ShieldCheck, Bell, Search, FlaskConical, Briefcase, Palette, Presentation } from 'lucide-react'

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
    <section className="p-[40px_24px] max-w-[1400px] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[20px]">
        {categories.map((cat, idx) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              onClick={() => navigate(`/gallery/category/${idx}`)}
              whileHover={{ y: -5 }}
              className="bg-[#fff] rounded-[12px] overflow-hidden border border-solid border-[#E2E8F0] cursor-pointer transition-all duration-[0.3s] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] group"
            >
              <div className="relative">
                <img
                  src={images[idx] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"}
                  alt={cat.title}
                  className="w-full h-[144px] object-cover transition-transform duration-[0.3s] group-hover:scale-[1.05]"
                />
                <div 
                  className="absolute top-[8px] left-[8px] w-[32px] h-[32px] rounded-[50%] flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-transform duration-[0.5s] hover:rotate-[360deg]"
                  style={{ backgroundColor: cat.iconBg }}
                >
                  <Icon color="white" size={16} />
                </div>
              </div>

              <div className="p-[12px] flex justify-between items-center">
                <h3 className="text-[14px] font-[600] text-[#0F172A] m-0">{cat.title}</h3>
                <div className="w-[28px] h-[28px] rounded-[50%] bg-[#E2E8F0] flex items-center justify-center transition-all duration-[0.2s] text-[#64748B] group-hover:bg-[#2563EB] group-hover:text-[#fff]">
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

