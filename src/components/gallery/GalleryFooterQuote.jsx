import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function GalleryFooterQuote() {
  return (
    <section className="p-[24px] max-w-[1400px] mx-auto">
      <motion.div
        className="bg-[linear-gradient(90deg,#2563EB,#1D4ED8)] rounded-[16px] p-[32px_40px] flex items-center justify-between relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute right-[64px] top-[50%] translate-y-[-50%] grid grid-cols-5 gap-[6px] opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="w-[6px] h-[6px] rounded-[50%] bg-[#BFDBFE]" />
          ))}
        </div>

        <Quote className="w-8 h-8 text-white rotate-180 shrink-0" color="white" size={32} />
        
        <p className="text-white text-[18px] font-[500] text-center m-[0_32px] flex-1">
          Every picture tells a story, every story builds <span className="font-bold">our legacy.</span>
        </p>

        <Quote className="w-8 h-8 text-white shrink-0" color="white" size={32} />
      </motion.div>
    </section>
  )
}

