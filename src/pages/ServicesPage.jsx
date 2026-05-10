import React from 'react'
import CompanyMarquee from '../components/Service/common/CompanyMarquee'
import ServicesKeyboard from '../components/Service/services/ServicesKeyboard'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      
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

        {/* Feature Section */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Investigation",
              desc: "Deep-dive analysis and forensic support for cyber crime incidents.",
              icon: "🔍"
            },
            {
              title: "Secure Development",
              desc: "Building robust software solutions with security-first architecture.",
              icon: "💻"
            },
            {
              title: "Proactive Defense",
              desc: "Continuous monitoring and threat intelligence to prevent attacks.",
              icon: "🛡️"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#0C1A3A] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage
