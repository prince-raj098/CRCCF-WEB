import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import EventBanner from './components/EventBanner'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import Introduction from './components/Introduction'
import WhatWeDo from './components/WhatWeDo'
import TechnologyStack from './components/TechnologyStack'
import ProjectsPortfolio from './components/ProjectsPortfolio'
import InternshipPrograms from './components/InternshipPrograms'
import StatsBar from './components/StatsBar'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import CategoryPage from './pages/CategoryPage'
import ReachUsPage from './pages/ReachUsPage'

function HomePage() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <EventBanner />
      <main>
        <Hero />
        <WhoWeAre />
        <Introduction />
        <WhatWeDo />
        <TechnologyStack />
        <ProjectsPortfolio />
        <InternshipPrograms />
        <WhyChooseUs />
        <Insights />
        <StatsBar />
        <Testimonials />
      </main>
      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className="scroll-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .95 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .scroll-top {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 500;
          width: 44px;
          height: 44px;
          background: #1A56DB;
          color: #fff;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(26,86,219,.40);
        }
      `}</style>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/gallery/category/:id" element={<CategoryPage />} />
      <Route path="/reachus" element={<ReachUsPage />} />
    </Routes>
  )
}
