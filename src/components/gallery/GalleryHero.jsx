import { motion } from 'framer-motion'

export default function GalleryHero() {
  const heroImage = "https://media.base44.com/images/public/69e89f547154ba3350c8414c/331be5aa7_generated_3c3cb018.png"

  return (
    <section className="p-[48px_24px] max-w-[1400px] mx-auto flex items-start gap-[40px] overflow-hidden max-[1024px]:flex-col">
      <motion.div
        className="flex-1 relative w-full"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="absolute text-[clamp(70px,10vw,150px)] font-[800] text-[#BFDBFE] top-[-40px] left-[-20px] z-[-1] opacity-40 whitespace-nowrap pointer-events-none"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: [-200, 0, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 3.5, times: [0, 0.9, 1], ease: "easeOut" }}
        >
          GALLERY
        </motion.h1>

        <div className="bg-[rgba(255,255,255,0.7)] backdrop-blur-[12px] p-[32px] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-solid border-[#DBEAFE] relative z-[10] max-w-[500px]">
          <h2 className="text-[clamp(36px,5vw,48px)] font-[800] text-[#2563EB] m-0 leading-[1.1] font-['Outfit',sans-serif]">Gallery</h2>
          <p className="text-[#475569] text-[18px] mt-[16px] font-[500]">Explore moments that inspire,<br/>work that makes an impact.</p>
          <div className="h-[6px] w-[64px] bg-[#2563EB] rounded-[3px] mt-[20px]" />
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-end w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src={heroImage} alt="Gallery hero" className="w-full max-w-[600px] object-contain transition-transform duration-[0.5s] drop-shadow-[0_20px_13px_rgba(0,0,0,0.03)] hover:scale-[1.05]" />
      </motion.div>
    </section>
  )
}

