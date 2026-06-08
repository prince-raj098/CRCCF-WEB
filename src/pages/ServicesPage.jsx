import CompanyMarquee from '../components/Service/common/CompanyMarquee'
import ServicesKeyboard from '../components/Service/services/ServicesKeyboard'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A56DB] via-[#1e429f] to-[#111827]"></div>

          {/* Cyber Grid Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl sm:text-5xl font-bold mb-6"
            >
              Cyber Security & Software Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-blue-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              We provide a powerful combination of cyber security services and
              software solutions designed to address modern digital challenges.
              Our goal is to create secure, efficient, and future-ready digital environments.
            </motion.p>
          </div>
        </div>

        <CompanyMarquee direction="right" />

        <div className="py-12">
          <ServicesKeyboard />
        </div>

        <CompanyMarquee direction="left" />

      </main>
    </div>
  )
}

export default ServicesPage
