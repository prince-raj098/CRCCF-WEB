import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import FloatingBackground from "./FloatingBackground";

// ✨ ADDED: iconCount right here
const PageWrapper = ({ children, bgIcons, transparentBg, iconCount }) => (
  <div className="min-h-screen bg-[#F8FAFC] p-6 sm:p-10 lg:p-16 relative overflow-hidden">
    {/* ✨ ADDED: Passing the count down to the background */}
    <FloatingBackground icons={bgIcons} count={iconCount} />

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="mb-8">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-hoverBlue transition-colors bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-0.5"
        >
          <LayoutDashboard size={18} />
          Back to Dashboard
        </Link>
      </div>

      <div
        className={
          transparentBg
            ? "py-2"
            : "bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100"
        }
      >
        {children}
      </div>
    </div>
  </div>
);

export default PageWrapper;
