import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] overflow-x-hidden">
      <TopBar />
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AboutLayout
