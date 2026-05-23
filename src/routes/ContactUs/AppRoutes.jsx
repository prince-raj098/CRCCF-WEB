import { Routes, Route } from "react-router-dom";

// --- COMPONENTS & LAYOUTS ---
import LaptopLayout from "../../layouts/ContactUs/LaptopLayout";
import PageWrapper from "../../components/ContactUs/PageWrapper";
import DirectorySection from "../../pages/ContactUs/DirectorySection";

// --- PAGES & SECTIONS ---
import Dashboard from "../../pages/ContactUs/Dashboard";
import HelpDesk from "../../sections/ContactUs/HelpDesk";;
import BranchDetails from "../../sections/ContactUs/BranchDetails";
import AIChat from "../../sections/ContactUs/AIChat";
import Review from "../../sections/ContactUs/Review";
import Feedback from "../../sections/ContactUs/Feedback";
import Announcements from "../../sections/ContactUs/Announcements";


// --- DATA ---
import { employees } from "../../data/contactUs/employeesData";
import { officers } from "../../data/contactUs/officersData";
import { teachers } from "../../data/contactUs/teachersData";
import { reporters } from "../../data/contactUs/reportersData";
import { advocates } from "../../data/contactUs/advocatesData";
import { legalAdvisors } from "../../data/contactUs/legalAdvisorsData";
import { directors } from "../../data/contactUs/directorsData";
import { members } from "../../data/contactUs/membersData";


// --- ICONS ---
import {
  BadgeCent,
  Users,
  BookOpen,
  Mic,
  Scale,
  Gavel,
  UserCheck,
  UserPlus,
  Headset,
  LifeBuoy,
  MessageSquare,
  Ticket,
  MapPin,
  Building,
  Globe,
  Navigation,
  User,
  Briefcase,
  FileText,
  Star,
  ThumbsUp,
  MessageCircle,
  Bot,
  Megaphone,
  Sparkles,
} from "lucide-react";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Dashboard */}
      <Route path="/" element={<LaptopLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Help Desk */}
      <Route
        path="/help-desk"
        element={
          <PageWrapper bgIcons={[Headset, LifeBuoy, MessageSquare, Ticket]}>
            <HelpDesk />
          </PageWrapper>
        }
      />

      {/* Follow Apps */}
      <Route
        path="/follow-apps"
      />

      {/* Branch Details */}
      <Route
        path="/branch-details"
        element={
          <PageWrapper bgIcons={[MapPin, Building, Globe, Navigation]}>
            <BranchDetails />
          </PageWrapper>
        }
      />

      {/* ==================== DIRECTORY ROUTES ==================== */}
      <Route
        path="/officer"
        element={
          <PageWrapper
            bgIcons={[User, Users, Briefcase, BadgeCent]}
            transparentBg={true}
          >
            <DirectorySection
              title="Officer"
              Icon={BadgeCent}
              data={officers}
            />
          </PageWrapper>
        }
      />

      <Route
        path="/employee"
        element={
          <PageWrapper bgIcons={[User, Users, Briefcase]} transparentBg={true}>
            <DirectorySection title="Employee" Icon={Users} data={employees} />
          </PageWrapper>
        }
      />

      <Route
        path="/teacher"
        element={
          <PageWrapper
            bgIcons={[User, BookOpen, FileText]}
            transparentBg={true}
          >
            <DirectorySection title="Teacher" Icon={BookOpen} data={teachers} />
          </PageWrapper>
        }
      />

      <Route
        path="/reporter"
        element={
          <PageWrapper bgIcons={[Mic, User, FileText]} transparentBg={true}>
            <DirectorySection title="Reporter" Icon={Mic} data={reporters} />
          </PageWrapper>
        }
      />

      <Route
        path="/advocate"
        element={
          <PageWrapper bgIcons={[Scale, Gavel, User]} transparentBg={true}>
            <DirectorySection title="Advocate" Icon={Scale} data={advocates} />
          </PageWrapper>
        }
      />

      <Route
        path="/legal-advisor"
        element={
          <PageWrapper bgIcons={[Gavel, Scale, Briefcase]} transparentBg={true}>
            <DirectorySection
              title="Legal Advisor"
              Icon={Gavel}
              data={legalAdvisors}
            />
          </PageWrapper>
        }
      />

      <Route
        path="/board-of-director"
        element={
          <PageWrapper
            bgIcons={[UserCheck, Users, Briefcase]}
            transparentBg={true}
          >
            <DirectorySection
              title="Board of Director"
              Icon={UserCheck}
              data={directors}
            />
          </PageWrapper>
        }
      />

      <Route
        path="/board-of-member"
        element={
          <PageWrapper
            bgIcons={[UserPlus, Users, Briefcase]}
            transparentBg={true}
          >
            <DirectorySection
              title="Board of Member"
              Icon={UserPlus}
              data={members}
            />
          </PageWrapper>
        }
      />

      {/* ==================== OTHER SECTIONS ==================== */}
      <Route
        path="/ai-chat"
        element={
          <PageWrapper bgIcons={[Bot]}>
            <AIChat />
          </PageWrapper>
        }
      />

      <Route
        path="/review"
        element={
          <PageWrapper bgIcons={[Star, ThumbsUp]}>
            <Review />
          </PageWrapper>
        }
      />

      <Route
        path="/feedback"
        element={
          <PageWrapper bgIcons={[MessageCircle, MessageSquare]}>
            <Feedback />
          </PageWrapper>
        }
      />

      <Route
        path="/announcements"
        element={
          <PageWrapper bgIcons={[Megaphone, Sparkles]} iconCount={10} transparentBg={true}>
            <Announcements />
          </PageWrapper>
        }
      />
    </Routes>

  );
};



export default AppRoutes;
