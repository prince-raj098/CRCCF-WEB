import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Routes, Route } from 'react-router-dom'

import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
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
import Activities from './components/Activities'
import Footer from './components/Footer'
import GalleryPage from './pages/GalleryPage'
import CategoryPage from './pages/CategoryPage'
import ReachUsPage from './pages/ReachUsPage'
import ServicesPage from './pages/ServicesPage'
import ServiceRouter from './pages/Service/ServiceRouter'
import LaptopLayout from './layouts/ContactUs/LaptopLayout'
import Dashboard from './pages/ContactUs/Dashboard'
import DirectoryWrapper from './pages/ContactUs/DirectoryWrapper'
import PageWrapper from './components/ContactUs/PageWrapper'
import AboutLayout from './layouts/AboutLayout'
import AboutPage from './pages/AboutUs/AboutPage'
import OurIdentity from './pages/AboutUs/OurIdentity'
import IntroductionOfCRCCF from './pages/AboutUs/IntroductionOfCRCCF'
import WhatWeDoAbout from './pages/AboutUs/WhatWeDo'
import MissionVision from './pages/AboutUs/MissionVision'
import OurActivity from './pages/AboutUs/OurActivity'
import Purpose from './pages/AboutUs/Purpose'
import Objective from './pages/AboutUs/Objective'
import Achievement from './pages/AboutUs/Achievement'
import LegalCompliance from './pages/AboutUs/LegalCompliance'
import PrivacyPolicy from './pages/AboutUs/PrivacyPolicy'
import DataProtection from './pages/AboutUs/DataProtection'
import TermsConditions from './pages/AboutUs/TermsConditions'
import RulesRegulation from './pages/AboutUs/RulesRegulation'
import Instruction from './pages/AboutUs/Instruction'
import LegalDisclaimer from './pages/AboutUs/LegalDisclaimer'
import CopyrightRegistration from './pages/AboutUs/CopyrightRegistration'
import PartnershipCollaboration from './pages/AboutUs/PartnershipCollaboration'
import History from './pages/AboutUs/History'

// Recruitment Pages
import RecruitmentPortal from './pages/recruitment/RecruitmentPortal'
import JobVacancy from './pages/recruitment/JobVacancy'
import PostVacancyMembersOnly from './pages/recruitment/PostVacancyMembersOnly'
import OnlineApplicationPortal from './pages/recruitment/OnlineApplicationPortal'
import RecruitmentAdvertisements from './pages/recruitment/RecruitmentAdvertisements'
import PressReleaseNotices from './pages/recruitment/PressReleaseNotices'
import ApplicationStatus from './pages/recruitment/ApplicationStatus'
import SubmitResume from './pages/recruitment/SubmitResume'
import CourseMaterials from './pages/Resources/CourseMaterials'
import PracticalTraining from './pages/Resources/PracticalTraining'
import MentorshipEvaluation from './pages/Resources/MentorshipEvaluation'
import LearningEnvironment from './pages/Resources/LearningEnvironment'



// Recruitment Rules & Policies
import RecruitmentRulesPolicies from './pages/recruitment/rules/RecruitmentRulesPolicies'
import RecruitmentPolicyEmploymentOverview from './pages/recruitment/rules/RecruitmentPolicyEmploymentOverview'
import CareerDevelopmentProgress from './pages/recruitment/rules/CareerDevelopmentProgress'
import EmployeeGrowthFutureOpportunity from './pages/recruitment/rules/EmployeeGrowthFutureOpportunity'
import EmploymentEligibilityCriteria from './pages/recruitment/rules/EmploymentEligibilityCriteria'
import RecruitmentSelectionProcess from './pages/recruitment/rules/RecruitmentSelectionProcess'
import RecruitmentInstructions from './pages/recruitment/rules/RecruitmentInstructions'
import RecruitmentGuidelines from './pages/recruitment/rules/RecruitmentGuidelines'
import RecruitmentCalendar from './pages/recruitment/rules/RecruitmentCalendar'
import CodeOfConductProfessionalEthics from './pages/recruitment/rules/CodeOfConductProfessionalEthics'
import TrainingOrientationSkillDevelopment from './pages/recruitment/rules/TrainingOrientationSkillDevelopment'
import PerformanceReviewEvaluationSystem from './pages/recruitment/rules/PerformanceReviewEvaluationSystem'
import EmployeeRightsResponsibilities from './pages/recruitment/rules/EmployeeRightsResponsibilities'
import VolunteerInternshipPolicy from './pages/recruitment/rules/VolunteerInternshipPolicy'
import EmployeeRecognitionAwards from './pages/recruitment/rules/EmployeeRecognitionAwards'

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
        <Activities />
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
            className="fixed bottom-[28px] right-[28px] z-[500] w-[44px] h-[44px] bg-[#1A56DB] text-[#fff] border-none rounded-[50%] flex items-center justify-center cursor-pointer shadow-[0_6px_20px_rgba(26,86,219,0.40)]"
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
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/gallery/category/:id" element={<CategoryPage />} />
      <Route path="/reachus" element={<ReachUsPage />} />
      <Route path="/services/*" element={<ServiceRouter />} />
      <Route path="/resources/course-materials" element={<CourseMaterials />} />
      <Route path="/resources/practical-training" element={<PracticalTraining />} />
      <Route path="/resources/mentorship-evaluation" element={<MentorshipEvaluation />} />
      <Route path="/resources/learning-environment" element={<LearningEnvironment />} />



      {/* Contact Hub Routes */}
      <Route path="/contact" element={<LaptopLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      
      {/* Dynamic Contact Sub-Pages */}
      <Route path="/contact/:type" element={<DirectoryWrapper />} />

      {/* About Section Routes */}
      <Route path="/about" element={<AboutLayout />}>
        <Route index element={<AboutPage />} />
        <Route path="identity" element={<OurIdentity />} />
        <Route path="introduction" element={<IntroductionOfCRCCF />} />
        <Route path="what-we-do" element={<WhatWeDoAbout />} />
        <Route path="mission-vision" element={<MissionVision />} />
        <Route path="activity" element={<OurActivity />} />
        <Route path="purpose" element={<Purpose />} />
        <Route path="objective" element={<Objective />} />
        <Route path="achievement" element={<Achievement />} />
        <Route path="legal-compliance" element={<LegalCompliance />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="data-protection" element={<DataProtection />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="rules-regulation" element={<RulesRegulation />} />
        <Route path="instruction" element={<Instruction />} />
        <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="copyright" element={<CopyrightRegistration />} />
        <Route path="partnership" element={<PartnershipCollaboration />} />
        <Route path="history" element={<History />} />
      </Route>

      {/* Recruitment / Careers Routes */}
      <Route path="/careers" element={<RecruitmentPortal />} />
      <Route path="/recruitment" element={<RecruitmentPortal />} />
      <Route path="/recruitment/job-vacancy" element={<JobVacancy />} />
      <Route path="/recruitment/post-vacancy-members-only" element={<PostVacancyMembersOnly />} />
      <Route path="/recruitment/online-application-portal" element={<OnlineApplicationPortal />} />
      <Route path="/recruitment/advertisements" element={<RecruitmentAdvertisements />} />
      <Route path="/recruitment/press-release-notices" element={<PressReleaseNotices />} />
      <Route path="/recruitment/application-status" element={<ApplicationStatus />} />
      <Route path="/recruitment/submit-resume" element={<SubmitResume />} />

      <Route path="/recruitment/rules-policies" element={<RecruitmentRulesPolicies />} />
      <Route path="/recruitment/rules-policies/employment-overview" element={<RecruitmentPolicyEmploymentOverview />} />
      <Route path="/recruitment/rules-policies/career-development-progress" element={<CareerDevelopmentProgress />} />
      <Route path="/recruitment/rules-policies/employee-growth-future-opportunity" element={<EmployeeGrowthFutureOpportunity />} />
      <Route path="/recruitment/rules-policies/employment-eligibility-criteria" element={<EmploymentEligibilityCriteria />} />
      <Route path="/recruitment/rules-policies/recruitment-selection-process" element={<RecruitmentSelectionProcess />} />
      <Route path="/recruitment/rules-policies/recruitment-instructions" element={<RecruitmentInstructions />} />
      <Route path="/recruitment/rules-policies/recruitment-guidelines" element={<RecruitmentGuidelines />} />
      <Route path="/recruitment/rules-policies/recruitment-calendar" element={<RecruitmentCalendar />} />
      <Route path="/recruitment/rules-policies/code-of-conduct-professional-ethics" element={<CodeOfConductProfessionalEthics />} />
      <Route path="/recruitment/rules-policies/training-orientation-skill-development" element={<TrainingOrientationSkillDevelopment />} />
      <Route path="/recruitment/rules-policies/performance-review-evaluation-system" element={<PerformanceReviewEvaluationSystem />} />
      <Route path="/recruitment/rules-policies/employee-rights-responsibilities" element={<EmployeeRightsResponsibilities />} />
      <Route path="/recruitment/rules-policies/volunteer-internship-policy" element={<VolunteerInternshipPolicy />} />
      <Route path="/recruitment/rules-policies/employee-recognition-awards" element={<EmployeeRecognitionAwards />} />
    </Routes>
    </>
  )
}
