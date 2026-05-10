import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ categories, hoveredCardId, sidebarRef, onScroll }) => {
  const location = useLocation();

  return (
    <aside className="w-64 h-full bg-navBg text-white shadow-xl flex flex-col shrink-0 relative z-20">
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wider">ContactHub</h1>
        <p className="text-xs text-lightBlue mt-1 opacity-80 uppercase tracking-widest">
          Smart Dashboard
        </p>
      </div>

      <nav
        ref={sidebarRef}
        onScroll={onScroll}
        className="flex-1 overflow-y-auto px-3 py-6 custom-scrollbar"
      >
        <ul className="space-y-1">
          {categories.map((cat) => {
            const isActivePage = location.pathname === `/contact/${cat.id}`;
            const isHoveredCard = hoveredCardId === cat.id;
            const isHighlighted = isActivePage || isHoveredCard;

            return (
              <li key={cat.id}>
                <Link
                  to={`/contact/${cat.id}`}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-hoverBlue hover:text-white hover:translate-x-1 ${
                    isHighlighted
                      ? "bg-primary text-white border-l-4 border-accent shadow-md"
                      : "text-slate-300"
                  }`}
                >
                  <cat.icon
                    size={18}
                    className={isHighlighted ? "opacity-100" : "opacity-80"}
                  />
                  {cat.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
