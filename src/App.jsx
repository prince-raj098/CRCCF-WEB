import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { Routes, Route } from 'react-router-dom'


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
import GalleryPage from './pages/GalleryPage'
import CategoryPage from './pages/CategoryPage'
import ReachUsPage from './pages/ReachUsPage'
import InsightsPage from './pages/InsightsPage'
import ServiceRouter from './pages/Service/ServiceRouter'
import RootLayout from './layouts/RootLayout'
import LaptopLayout from './layouts/ContactUs/LaptopLayout'
import Dashboard from './pages/ContactUs/Dashboard'
import DirectorySection from './pages/ContactUs/DirectorySection'
import PageWrapper from './components/ContactUs/PageWrapper'

// --- CONTACT HUB SECTIONS ---
import HelpDesk from './sections/ContactUs/HelpDesk'
import BranchDetails from './sections/ContactUs/BranchDetails'
import AIChat from './sections/ContactUs/AIChat'
import Review from './sections/ContactUs/Review'
import Feedback from './sections/ContactUs/Feedback'
import Announcements from './sections/ContactUs/Announcements'

// --- CONTACT HUB DATA ---
import { employees } from './data/contactUs/employeesData'
import { officers } from './data/contactUs/officersData'
import { teachers } from './data/contactUs/teachersData'
import { reporters } from './data/contactUs/reportersData'
import { advocates } from './data/contactUs/advocatesData'
import { legalAdvisors } from './data/contactUs/legalAdvisorsData'
import { directors } from './data/contactUs/directorsData'
import { members } from './data/contactUs/membersData'

// --- CONTACT HUB ICONS ---
import {
  BadgeCent, Users, BookOpen, Mic, Scale, Gavel, UserCheck, UserPlus,
  Headset, LifeBuoy, MessageSquare, Ticket, MapPin, Building, Globe,
  Navigation, User, Briefcase, FileText, Star, ThumbsUp, MessageCircle,
  Bot, Megaphone, Sparkles
} from "lucide-react";
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
import LegalComplianceRouter from './pages/AboutUs/LegalComplianceRouter'
import PrivacyPolicy from './pages/AboutUs/PrivacyPolicy'
import DataProtection from './pages/AboutUs/DataProtection'
import TermsConditions from './pages/AboutUs/TermsConditions'
import RulesRegulation from './pages/AboutUs/RulesRegulation'
import Instruction from './pages/AboutUs/Instruction'
import LegalDisclaimer from './pages/AboutUs/LegalDisclaimer'
import CopyrightRegistration from './pages/AboutUs/CopyrightRegistration'
import PartnershipCollaboration from './pages/AboutUs/PartnershipCollaboration'
import History from './pages/AboutUs/History'
import ReportCrime from './pages/report/ReportCrime'


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

function HomePageContent() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
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
        <Insights limit={3} />
        <StatsBar />
        <Testimonials />

      </main>

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
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/category/:id" element={<CategoryPage />} />
          <Route path="/reachus" element={<ReachUsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/services/*" element={<ServiceRouter />} />
          <Route path="/report-crime" element={<ReportCrime />} />

          <Route path="/resources/course-materials" element={<CourseMaterials />} />
          <Route path="/resources/practical-training" element={<PracticalTraining />} />
          <Route path="/resources/mentorship-evaluation" element={<MentorshipEvaluation />} />
          <Route path="/resources/learning-environment" element={<LearningEnvironment />} />

          {/* Contact Hub Routes */}
          <Route path="/contact" element={<LaptopLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route
            path="/contact/help-desk"
            element={
              <PageWrapper bgIcons={[Headset, LifeBuoy, MessageSquare, Ticket]}>
                <HelpDesk />
              </PageWrapper>
            }
          />
          <Route path="/contact/follow-apps" />
          <Route
            path="/contact/branch-details"
            element={
              <PageWrapper bgIcons={[MapPin, Building, Globe, Navigation]}>
                <BranchDetails />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/officer"
            element={
              <PageWrapper bgIcons={[User, Users, Briefcase, BadgeCent]} transparentBg={true}>
                <DirectorySection title="Officer" Icon={BadgeCent} data={officers} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/employee"
            element={
              <PageWrapper bgIcons={[User, Users, Briefcase]} transparentBg={true}>
                <DirectorySection title="Employee" Icon={Users} data={employees} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/teacher"
            element={
              <PageWrapper bgIcons={[User, BookOpen, FileText]} transparentBg={true}>
                <DirectorySection title="Teacher" Icon={BookOpen} data={teachers} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/reporter"
            element={
              <PageWrapper bgIcons={[Mic, User, FileText]} transparentBg={true}>
                <DirectorySection title="Reporter" Icon={Mic} data={reporters} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/advocate"
            element={
              <PageWrapper bgIcons={[Scale, Gavel, User]} transparentBg={true}>
                <DirectorySection title="Advocate" Icon={Scale} data={advocates} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/legal-advisor"
            element={
              <PageWrapper bgIcons={[Gavel, Scale, Briefcase]} transparentBg={true}>
                <DirectorySection title="Legal Advisor" Icon={Gavel} data={legalAdvisors} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/board-of-director"
            element={
              <PageWrapper bgIcons={[UserCheck, Users, Briefcase]} transparentBg={true}>
                <DirectorySection title="Board of Director" Icon={UserCheck} data={directors} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/board-of-member"
            element={
              <PageWrapper bgIcons={[UserPlus, Users, Briefcase]} transparentBg={true}>
                <DirectorySection title="Board of Member" Icon={UserPlus} data={members} />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/ai-chat"
            element={
              <PageWrapper bgIcons={[Bot]}>
                <AIChat />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/review"
            element={
              <PageWrapper bgIcons={[Star, ThumbsUp]}>
                <Review />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/feedback"
            element={
              <PageWrapper bgIcons={[MessageCircle, MessageSquare]}>
                <Feedback />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/announcements"
            element={
              <PageWrapper bgIcons={[Megaphone, Sparkles]} iconCount={10} transparentBg={true}>
                <Announcements />
              </PageWrapper>
            }
          />

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
            <Route path="legal-compliance/*" element={<LegalComplianceRouter />} />
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
        </Route>
      </Routes>
    </>
  )
}
