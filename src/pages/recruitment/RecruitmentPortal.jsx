import React from 'react'
import CompanyMarquee from '../../components/common/CompanyMarquee'
import RecruitmentKeyboard from '../../components/recruitment/RecruitmentKeyboard'

const RecruitmentPortal = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100 px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl shadow-xl mb-8 py-6 px-6 text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-bold">Careers at CR Cyber Crime Foundation</h1>
            <p className="text-blue-100 text-lg mt-2">
              Join our mission to build a safer and more aware digital society.
              Explore job opportunities, internships, and apply easily to be part of a purpose-driven team in cyber awareness and digital safety.
            </p>
          </div>

          <div className="mb-6">
            <CompanyMarquee direction="right" />   {/* Top Marquee - moves left to right */}
          </div>

          <RecruitmentKeyboard />

          <div className="mt-6">
            <CompanyMarquee direction="left" />   {/* Bottom Marquee - moves right to left */}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecruitmentPortal
