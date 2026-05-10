// src/pages/AboutPage.jsx

import React from 'react'
import VirtualKeyboard from '../../components/AboutUs/dashboard/VirtualKeyboard'
// import PartnersSection from '../../components/AboutUs/partners/PartnersSection'
import PageHeader from '../../components/AboutUs/common/PageHeader'
import CompanyMarquee from '../../components/AboutUs/common/CompanyMarquee'

const AboutPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">

        <PageHeader 
          title="About Us — Fighting Cyber Threats with Innovation" 
          description="We empower individuals and organizations by combating cybercrime through awareness, research, and advanced technological solutions, ensuring a secure and trustworthy digital environment"
          icon="🏢"
        />

        {/* Marquee */}
        <div className="w-full overflow-hidden">
          <CompanyMarquee direction="right" />
        </div>

        {/* Keyboard Section */}
        <div className="py-4 w-full overflow-hidden">
          <VirtualKeyboard />
        </div>

        {/* Marquee */}
        <div className="w-full overflow-hidden">
          <CompanyMarquee direction="left" />
        </div>

        {/* <PartnersSection /> */}

      </div>
    </div>
  )
}

export default AboutPage