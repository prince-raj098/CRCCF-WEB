import React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../components/ContactUs/Sidebar";
import FloatingBackground from "../../components/ContactUs/FloatingBackground";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import {
  Headset,
  Share2,
  MapPin,
  BadgeCent,
  Users,
  BookOpen,
  Mic,
  Scale,
  Gavel,
  UserCheck,
  UserPlus,
  Star,
  MessageSquare,
  Bot,
} from "lucide-react";

const categories = [
  { id: "help-desk", title: "Help Desk", icon: Headset },
  { id: "follow-apps", title: "Follow Apps", icon: Share2 },
  { id: "branch-details", title: "Branch Details", icon: MapPin },
  { id: "officer", title: "Officer", icon: BadgeCent },
  { id: "employee", title: "Employee", icon: Users },
  { id: "teacher", title: "Teacher", icon: BookOpen },
  { id: "reporter", title: "Reporter", icon: Mic },
  { id: "advocate", title: "Advocate", icon: Scale },
  { id: "legal-advisor", title: "Legal Advisor", icon: Gavel },
  { id: "board-of-director", title: "Board of Director", icon: UserCheck },
  { id: "board-of-member", title: "Board of Member", icon: UserPlus },
  { id: "ai-chat", title: "AI Chat", icon: Bot },
  { id: "review", title: "Review", icon: Star },
  { id: "feedback", title: "Feedback", icon: MessageSquare },
];

const LaptopLayout = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setHoveredCardId(null);
  }, [location.pathname]);

  const sidebarScrollRef = useRef(null);
  const mainScrollRef = useRef(null);
  const isScrolling = useRef(null);

  const handleSidebarScroll = () => {
    if (isScrolling.current === "main") return;
    isScrolling.current = "sidebar";

    const sidebar = sidebarScrollRef.current;
    const main = mainScrollRef.current;

    if (sidebar && main && main.scrollHeight > main.clientHeight) {
      const percentage = sidebar.scrollTop / (sidebar.scrollHeight - sidebar.clientHeight);
      main.scrollTop = percentage * (main.scrollHeight - main.clientHeight);
    }

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => { isScrolling.current = null; }, 50);
  };

  const handleMainScroll = () => {
    if (isScrolling.current === "sidebar") return;
    isScrolling.current = "main";

    const sidebar = sidebarScrollRef.current;
    const main = mainScrollRef.current;

    if (sidebar && main && sidebar.scrollHeight > sidebar.clientHeight) {
      const percentage = main.scrollTop / (main.scrollHeight - main.clientHeight);
      sidebar.scrollTop = percentage * (sidebar.scrollHeight - sidebar.clientHeight);
    }

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => { isScrolling.current = null; }, 50);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <TopBar />
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative bg-[#F8FAFC] overflow-hidden min-h-[90vh]">
        <FloatingBackground />

        <div className="relative w-full max-w-[1200px] z-10">
          {/* Screen Bezel */}
          <div className="relative bg-[#121212] p-2 sm:p-4 md:p-5 rounded-xl sm:rounded-t-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-800 rounded-full"></div>

            {/* Screen Content */}
            <div className="bg-white h-[80vh] sm:h-[75vh] w-full rounded-sm sm:rounded-md overflow-hidden flex flex-col md:flex-row relative shadow-inner">
              {/* Mobile Header */}
              <div className="md:hidden bg-navBg text-white px-5 py-4 shrink-0 shadow-md z-20 flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-bold tracking-wider">ContactHub</h1>
                  <p className="text-[10px] text-lightBlue mt-0.5 opacity-80 uppercase tracking-widest">Smart Dashboard</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="hidden md:block h-full z-10 relative">
                <Sidebar
                  categories={categories}
                  hoveredCardId={hoveredCardId}
                  sidebarRef={sidebarScrollRef}
                  onScroll={handleSidebarScroll}
                />
              </div>

              {/* Main Content */}
              <div
                ref={mainScrollRef}
                onScroll={handleMainScroll}
                className="flex-1 h-full overflow-y-auto custom-scrollbar relative bg-[#F1F5F9]"
              >
                <main className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <Outlet context={{ categories, setHoveredCardId }} />
                </main>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="hidden md:flex relative bg-gradient-to-b from-[#e5e7eb] to-[#9ca3af] h-3 sm:h-5 md:h-7 rounded-b-lg sm:rounded-b-3xl w-[104%] -left-[2%] shadow-[0_15px_25px_-5px_rgba(0,0,0,0.5)] z-10 border-t border-[#f3f4f6] justify-center">
            <div className="w-16 sm:w-24 md:w-32 h-1.5 sm:h-2 bg-[#9ca3af] rounded-b shadow-inner mt-0 border-x border-b border-[#6b7280]"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LaptopLayout;
