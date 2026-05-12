// src/pages/AboutUs/IntroductionOfCRCCF.jsx
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// !!======================================================================!!
// !!  IMPORT FROM THE DATA DIRECTORY                                      !!
// !!======================================================================!!
import { introductiondata } from '../../data/introductionData';

/* -------------------------------- Motion -------------------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: shouldReduce
        ? { duration: 0 }
        : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 },
    },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

/* -------------------------------- Palette -------------------------------- */
const color = {
  blue50: "#EFF6FF",
  blue100: "#DBEAFE",
  blue500: "#3B82F6",
  blue600: "#2563EB",
  blue900: "#1E3A8A",
  emerald50: "#ECFDF5",
  emerald400: "#34D399",
  emerald500: "#10B981",
  amber100: "#FEF3C7",
  amber400: "#FBBF24",
  amber500: "#F59E0B",
  rose100: "#FFE4E6",
  rose500: "#F43F5E",
  slate50: "#F8FAFC",
  slate100: "#F1F5F9",
  slate200: "#E2E8F0",
  slate300: "#CBD5E1",
  slate400: "#94A3B8",
  slate700: "#334155",
  slate800: "#1E293B",
  slate900: "#0F172A",
  white: "#FFFFFF",
  indigo500: "#6366F1",
};

/* -------------------------- HERO: Digital Sunrise -------------------------- */
const IntroHeroOverlay = () => {
  return (
    <g transform="translate(680, 50)">
      <defs>
        <pattern id="introGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke={color.slate700} strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <linearGradient id="sunGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={color.amber500} />
          <stop offset="100%" stopColor={color.rose500} />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#introGrid)" />

      <g transform="translate(150, 180)">
        <motion.circle
          r="60"
          fill="url(#sunGrad)"
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {[0, 45, 90, 135, 180].map((deg, i) => (
          <motion.line
            key={i}
            x1="0" y1="0" x2="0" y2="-100"
            stroke={color.amber400}
            strokeWidth="2"
            strokeDasharray="5 5"
            transform={`rotate(${deg - 90})`}
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 0.6, pathLength: 1 }}
            transition={{ delay: 1 + (i * 0.1), duration: 1 }}
          />
        ))}

        <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="0" cy="0" rx="90" ry="30" fill="none" stroke={color.blue500} strokeWidth="1" opacity="0.6" />
          <circle cx="90" cy="0" r="4" fill={color.white} />
        </motion.g>
        <motion.g animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
          <ellipse cx="0" cy="0" rx="30" ry="90" fill="none" stroke={color.emerald500} strokeWidth="1" opacity="0.6" />
          <circle cx="0" cy="-90" r="4" fill={color.white} />
        </motion.g>
      </g>

      <path
        d="M0 300 L 50 250 L 80 280 L 120 220 L 160 260 L 200 200 L 250 280 L 300 270 V 300 H 0 Z"
        fill={color.slate900}
        opacity="0.8"
      />
    </g>
  );
};

const VideoHeroIntro = ({ src = "", poster = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Introduction Hero";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-label={title} className="w-full h-auto">
        <defs>
          <linearGradient id="introHeroGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color.slate900} />
            <stop offset="100%" stopColor={color.blue900} />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#introHeroGrad)" rx="20" />
        <IntroHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <linearGradient id="introHeroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.blue900} />
        </linearGradient>
        <mask id="introHeroMask">
          <rect width="100%" height="100%" fill="white" />
          <IntroHeroOverlay />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="url(#introHeroGrad)" rx="20" />

      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#introHeroMask)">
        <video
          src={src}
          poster={poster || undefined}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          crossOrigin="anonymous"
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </foreignObject>

      <IntroHeroOverlay />
    </svg>
  );
};

/* ------------------------ REUSABLE SVG LIBRARY (24 Items) ------------------------ */
const BG = ({ id, c1, c2 }) => (
  <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={c1} /><stop offset="100%" stopColor={c2} /></linearGradient></defs>
);

const SvgWelcome = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <BG id="gWel" c1={color.blue50} c2={color.white} />
    <rect x="30" y="20" width="40" height="60" fill="url(#gWel)" stroke={color.blue500} strokeWidth="2" />
    <path d="M30 20 L 20 85 M 70 20 L 80 85" stroke={color.blue500} strokeWidth="1" />
    <motion.path d="M30 80 L 15 90 M 70 80 L 85 90" stroke={color.amber500} strokeWidth="2" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <circle cx="60" cy="50" r="2" fill={color.blue600} />
  </svg>
);

const SvgVision = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M10 50 Q 50 10, 90 50 Q 50 90, 10 50" fill="none" stroke={color.slate700} strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill={color.blue500} />
    <motion.circle cx="50" cy="50" r="8" fill={color.white} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgKnowledge = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 40 Q 50 50, 80 40 V 80 Q 50 90, 20 80 Z" fill={color.emerald50} stroke={color.emerald500} strokeWidth="2" />
    <line x1="50" y1="45" x2="50" y2="85" stroke={color.emerald500} strokeWidth="1" />
    <motion.g animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}>
      <circle cx="30" cy="30" r="3" fill={color.amber500} />
      <circle cx="70" cy="30" r="3" fill={color.amber500} />
      <circle cx="50" cy="20" r="3" fill={color.amber500} />
    </motion.g>
  </svg>
);

const SvgVictimSupport = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 80 L 20 50 A 15 15 0 0 1 50 30 A 15 15 0 0 1 80 50 Z" fill={color.rose100} stroke={color.rose500} strokeWidth="2" />
    <motion.path d="M35 50 H 65" stroke={color.rose500} strokeWidth="2" animate={{ scaleX: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

const SvgTech = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="30" y="30" width="40" height="40" rx="4" fill={color.slate800} />
    <path d="M50 30 V 10 M 50 70 V 90 M 30 50 H 10 M 70 50 H 90" stroke={color.blue500} strokeWidth="2" />
    <circle cx="50" cy="50" r="5" fill="#22D3EE" />
    <motion.rect x="30" y="30" width="40" height="40" stroke="#22D3EE" strokeWidth="1" fill="none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgCommunity = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="40" r="10" fill={color.indigo500} />
    <circle cx="30" cy="50" r="8" fill={color.slate400} />
    <circle cx="70" cy="50" r="8" fill={color.slate400} />
    <path d="M50 40 L 20 80 H 80 Z" fill="none" stroke={color.indigo500} strokeWidth="1" />
    <motion.circle cx="50" cy="40" r="15" stroke={color.amber500} strokeWidth="1" fill="none" strokeDasharray="2 2" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
  </svg>
);

const SvgYouth = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 40 L 50 25 L 80 40 L 50 55 Z" fill={color.slate800} stroke={color.white} strokeWidth="1" />
    <circle cx="50" cy="70" r="15" fill={color.blue100} />
    <motion.path d="M80 40 V 60" stroke={color.amber500} strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1 }} />
    <circle cx="80" cy="65" r="3" fill={color.amber500} />
  </svg>
);

const SvgWomen = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="40" r="15" stroke={color.rose500} strokeWidth="2" fill="none" />
    <line x1="50" y1="55" x2="50" y2="80" stroke={color.rose500} strokeWidth="2" />
    <line x1="40" y1="70" x2="60" y2="70" stroke={color.rose500} strokeWidth="2" />
    <motion.circle cx="50" cy="40" r="20" stroke={color.rose100} strokeWidth="1" fill="none" animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgCollab = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 30 H 50 V 50 H 30 Z" fill={color.blue500} />
    <path d="M50 50 H 70 V 70 H 50 Z" fill={color.emerald500} />
    <motion.rect x="50" y="30" width="20" height="20" fill={color.amber500} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <rect x="30" y="50" width="20" height="20" fill={color.slate400} />
  </svg>
);

const SvgInnovation = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M35 30 C 35 10, 65 10, 65 30 C 65 45, 55 50, 55 60 H 45 C 45 50, 35 45, 35 30" fill="none" stroke={color.amber500} strokeWidth="2" />
    <rect x="45" y="60" width="10" height="5" fill="#94A3B8" />
    <motion.circle cx="50" cy="30" r="5" fill={color.amber400} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

const SvgAwareness = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 40 L 60 20 V 80 L 30 60 H 15 V 40 H 30" fill={color.slate800} />
    <motion.path d="M70 40 Q 80 50, 70 60 M 80 30 Q 100 50, 80 70" stroke={color.blue500} strokeWidth="2" fill="none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

const SvgEducation = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="25" y="40" width="50" height="40" rx="4" fill={color.blue100} stroke={color.blue500} />
    <path d="M50 20 L 80 35 L 50 50 L 20 35 Z" fill={color.slate800} />
    <motion.path d="M80 35 V 50" stroke={color.amber500} strokeWidth="2" animate={{ height: [15, 25, 15] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgPartnership = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M30 60 L 50 50 L 70 60" fill="none" stroke={color.slate500} strokeWidth="3" />
    <circle cx="40" cy="40" r="8" fill={color.blue500} />
    <circle cx="60" cy="40" r="8" fill={color.emerald500} />
    <motion.circle cx="50" cy="50" r="25" stroke={color.slate200} strokeWidth="1" fill="none" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
  </svg>
);

const SvgHygiene = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M50 10 L 90 25 V 50 C 90 75, 50 90, 50 90 C 50 90, 10 75, 10 50 V 25 L 50 10 Z" fill={color.emerald50} stroke={color.emerald500} strokeWidth="2" />
    <motion.path d="M35 50 L 45 60 L 65 40" stroke={color.emerald500} strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }} />
  </svg>
);

const SvgSkills = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <line x1="20" y1="80" x2="80" y2="80" stroke={color.slate400} strokeWidth="2" />
    <line x1="20" y1="80" x2="20" y2="20" stroke={color.slate400} strokeWidth="2" />
    <rect x="30" y="60" width="10" height="20" fill="#93C5FD" />
    <rect x="45" y="40" width="10" height="40" fill={color.blue500} />
    <motion.rect x="60" y="20" width="10" height="60" fill={color.blue600} initial={{ height: 0 }} animate={{ height: 60 }} transition={{ duration: 1 }} />
  </svg>
);

const SvgLaw = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="48" y="10" width="4" height="80" fill={color.slate700} />
    <line x1="20" y1="30" x2="80" y2="30" stroke={color.slate700} strokeWidth="2" />
    <path d="M20 30 L 10 50 H 30 L 20 30" fill={color.amber500} opacity="0.5" />
    <path d="M80 30 L 70 50 H 90 L 80 30" fill={color.amber500} opacity="0.5" />
    <motion.g animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
      <line x1="20" y1="30" x2="80" y2="30" stroke={color.amber500} strokeWidth="1" />
    </motion.g>
  </svg>
);

const SvgVolunteer = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="40" y="50" width="20" height="40" fill={color.blue500} />
    <circle cx="50" cy="40" r="8" fill={color.amber500} />
    <motion.circle cx="50" cy="40" r="15" stroke={color.white} strokeWidth="1" fill="none" animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
  </svg>
);

const SvgResilience = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <rect x="45" y="60" width="10" height="30" fill={color.slate600} />
    <circle cx="50" cy="40" r="20" fill={color.emerald500} />
    <motion.circle cx="50" cy="40" r="25" stroke={color.emerald400} strokeWidth="1" fill="none" animate={{ r: [20, 25, 20] }} transition={{ duration: 3, repeat: Infinity }} />
  </svg>
);

const SvgResearch = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M40 70 L 60 70 L 50 30 Z" fill={color.slate300} />
    <circle cx="50" cy="30" r="10" fill={color.blue500} />
    <motion.circle cx="50" cy="30" r="15" stroke={color.blue300} strokeWidth="1" fill="none" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgNation = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 70 H 80" stroke={color.amber500} strokeWidth="2" />
    <path d="M30 60 H 70" stroke={color.white} strokeWidth="2" />
    <path d="M40 50 H 60" stroke={color.emerald500} strokeWidth="2" />
    <motion.circle cx="50" cy="30" r="5" fill={color.blue900} animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgEthics = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="30" stroke={color.slate400} strokeWidth="1" fill="none" />
    <path d="M50 20 V 80 M 20 50 H 80" stroke={color.slate200} strokeWidth="1" />
    <motion.circle cx="50" cy="50" r="5" fill={color.indigo500} animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

const SvgFuture = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 70 H 80" stroke={color.slate800} strokeWidth="2" />
    <motion.circle cx="50" cy="70" r="15" fill={color.amber500} animate={{ cy: 50 }} transition={{ duration: 3 }} />
  </svg>
);

// Mapper
const getSvgComponent = (item) => {
  const text = ((item.id || "") + " " + (item.heading || "")).toLowerCase();

  if (text.includes("welcome")) return SvgWelcome;
  if (text.includes("vision")) return SvgVision;
  if (text.includes("knowledge") || text.includes("literacy")) return SvgKnowledge;
  if (text.includes("victim") || text.includes("support") || text.includes("justice")) return SvgVictimSupport;
  if (text.includes("technology") || text.includes("tool") || text.includes("digital")) return SvgTech;
  if (text.includes("community") || text.includes("society")) return SvgCommunity;
  if (text.includes("youth") || text.includes("student") || text.includes("minds")) return SvgYouth;
  if (text.includes("women") || text.includes("girl") || text.includes("gender")) return SvgWomen;
  if (text.includes("collaborat") || text.includes("partner") || text.includes("united")) return SvgCollab;
  if (text.includes("innovat") || text.includes("solution")) return SvgInnovation;
  if (text.includes("aware") || text.includes("advocat")) return SvgAwareness;
  if (text.includes("education") || text.includes("school") || text.includes("college") || text.includes("training")) return SvgEducation;
  if (text.includes("partner") || text.includes("agency")) return SvgPartnership;
  if (text.includes("hygiene") || text.includes("clean") || text.includes("safe")) return SvgHygiene;
  if (text.includes("skill") || text.includes("development")) return SvgSkills;
  if (text.includes("law") || text.includes("legal")) return SvgLaw;
  if (text.includes("volunteer")) return SvgVolunteer;
  if (text.includes("trust") || text.includes("confidence")) return SvgPartnership;
  if (text.includes("resilience") || text.includes("strength")) return SvgResilience;
  if (text.includes("inclusive") || text.includes("all")) return SvgCommunity;
  if (text.includes("research") || text.includes("learning")) return SvgResearch;
  if (text.includes("right") || text.includes("fundamental")) return SvgLaw;
  if (text.includes("ethic") || text.includes("moral") || text.includes("behavior")) return SvgEthics;
  if (text.includes("india") || text.includes("nation") || text.includes("bharat")) return SvgNation;
  if (text.includes("future") || text.includes("tomorrow")) return SvgFuture;

  return SvgWelcome; // Default
};

/* ------------------------------ InsightCard ------------------------------ */
/* ------------------------------ InsightCard (Book Animation) ------------------------------ */
const InsightCard = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [previewPageIndex, setPreviewPageIndex] = useState(null);
  const [showScrubber, setShowScrubber] = useState(false);
  const scrubberTimer = useRef(null);
  const SVGComp = getSvgComponent(section);

  const keepScrubberVisible = () => {
    if (window.innerWidth > 1024) {
      setShowScrubber(true);
      if (scrubberTimer.current) clearTimeout(scrubberTimer.current);
      scrubberTimer.current = setTimeout(() => setShowScrubber(false), 3000);
    }
  };

  const themes = [
    { color: "#2563EB", bg: "#EFF6FF", label: "CYBERSECURITY" },
    { color: "#9333EA", bg: "#F5F3FF", label: "TECHNOLOGY" },
    { color: "#E11D48", bg: "#FFF1F2", label: "LEGAL" },
    { color: "#059669", bg: "#ECFDF5", label: "AWARENESS" },
    { color: "#D97706", bg: "#FFFBEB", label: "EDUCATION" },
  ];
  const theme = themes[index % themes.length];

  const isDesktop = () => window.innerWidth > 1024;

  const handleOpen = (e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleMouseEnter = () => {
    if (isDesktop()) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop() && !showScrubber) {
      setIsOpen(false);
      setActivePageIndex(0);
    }
  };

  const subPages = section.subPages || [];
  const allPages = [
    { heading: section.heading, content: section.content, label: theme.label },
    ...subPages.map(sp => ({ ...sp, label: sp.heading.toUpperCase() }))
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <motion.article
        className={`
          relative bg-white border border-slate-200 rounded-[20px] 
          h-[360px] w-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
          [transform-style:preserve-3d] [perspective:2000px] 
          flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'shadow-[0_20px_50px_rgba(0,0,0,0.12)]' : 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      >
        {/* Dynamic Pages Stack */}
        {allPages.slice().reverse().map((page, revIdx) => {
          const pageIdx = allPages.length - 1 - revIdx;
          const isFlipped = activePageIndex > pageIdx;
          const PageSVG = getSvgComponent(page);

          return (
            <div
              key={pageIdx}
              style={{ zIndex: 15 - pageIdx }}
              className={`
                absolute inset-0 p-8 flex flex-col w-full h-full justify-start 
                pl-12 rounded-[20px] transition-all duration-[1s] 
                ease-[cubic-bezier(0.645,0.045,0.355,1)]
                [transform-origin:left_center] [backface-visibility:hidden]
                will-change-transform will-change-opacity
                ${pageIdx % 2 === 0 ? 'bg-slate-50' : 'bg-slate-100'}
                ${isFlipped
                  ? '[transform:rotateY(-125deg)_scale(0.9)_translateX(-15px)] opacity-100 pointer-events-none shadow-[-10px_0_30px_rgba(0,0,0,0.1)]'
                  : pageIdx === activePageIndex
                    ? 'opacity-100 translate-x-0 rotate-y-0 scale-100'
                    : 'opacity-0 pointer-events-none translate-x-4'
                }
              `}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: theme.bg }}>
                  <PageSVG className="w-6 h-6" style={{ color: theme.color }} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[14px] font-black uppercase tracking-widest" style={{ color: theme.color }}>
                    {pageIdx === 0 ? "Welcome to CRCCF" : page.label}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-400">Page {pageIdx + 1} of {allPages.length}</span>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-[4px]">
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium italic">{page.content}</p>
              </div>

              <div className="pt-6 mt-auto border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {pageIdx > 0 && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setActivePageIndex(pageIdx - 1); keepScrubberVisible(); }}
                        className="text-[11px] font-black text-blue-600 flex items-center gap-1.5 hover:gap-2 transition-all group/btn border-none bg-transparent cursor-pointer p-0"
                      >
                        <ArrowLeft size={14} className="group-hover/btn:-translate-x-0.5 transition-transform" /> Back
                      </button>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    {pageIdx < allPages.length - 1 && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setActivePageIndex(pageIdx + 1); keepScrubberVisible(); }}
                        className="text-[11px] font-black text-blue-600 flex items-center gap-1.5 hover:gap-2 transition-all group/btn border-none bg-transparent cursor-pointer p-0"
                      >
                        Next <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.color }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* COVER */}
        <div
          className={`
            absolute inset-0 w-full h-full rounded-[20px] cursor-pointer 
            transition-all duration-[1.2s] ease-[cubic-bezier(0.645,0.045,0.355,1)] 
            [transform-origin:left_center] shadow-[4px_0_24px_rgba(0,0,0,0.1)] 
            flex flex-col items-center justify-center z-[20] p-8 text-center 
            [backface-visibility:hidden] bg-white will-change-transform
            ${isOpen ? '[transform:rotateY(-140deg)_scale(0.9)_translateX(-20px)] opacity-0 pointer-events-none' : ''}
          `}
          style={{
            background: `linear-gradient(135deg, #ffffff, ${theme.bg})`,
            borderLeft: `6px solid ${theme.color}`
          }}
          onClick={handleOpen}
        >
          <div
            className="w-[84px] h-[84px] rounded-[22px] flex items-center justify-center mb-6 shadow-sm bg-white/50 backdrop-blur-sm p-3"
          >
            <img
              src="/CRCCF_LOGO-removebg-preview.png"
              alt="CRCCF Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>


          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');`}
          </style>
          <h3
            className={`text-slate-900 leading-[1.2] mb-6 px-2 ${section.heading === "Welcome to CRCCF"
              ? "text-[32px] font-bold"
              : "text-[22px] font-black uppercase tracking-tight"
              }`}
            style={section.heading === "Welcome to CRCCF" ? { fontFamily: "'Dancing Script', cursive" } : {}}
          >
            {section.heading === "Welcome to CRCCF" ? "CRCCF Chronicles" : section.heading}
          </h3>

          <div className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.1em] mt-auto" style={{ color: theme.color }}>
            <span>Explore Our Pillars</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>

      {/* Page Scroller (Slider) */}
      <div
        className={`
          px-2 transition-all duration-500 ease-out mt-4
          ${isOpen || showScrubber ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <div 
          className="flex flex-col gap-3 group/scrubber"
          onMouseMove={(e) => {
            const rect = e.currentTarget.querySelector('input').getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percent = Math.min(Math.max(x / rect.width, 0), 1);
            const index = Math.round(percent * (allPages.length - 1));
            setPreviewPageIndex(index);
          }}
          onMouseLeave={() => setPreviewPageIndex(null)}
        >
          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Chronicle Scrubber</span>
            <div className="flex items-center gap-2">
              <AnimatePresence>
                {previewPageIndex !== null && previewPageIndex !== activePageIndex && (
                  <motion.span 
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 5 }}
                    className="text-[10px] font-black text-slate-300 uppercase italic"
                  >
                    Jump to: {previewPageIndex + 1}
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] font-black tabular-nums border border-blue-100">
                PAGE {activePageIndex + 1} / {allPages.length}
              </span>
            </div>
          </div>
          <div className="relative pt-2">
            {previewPageIndex !== null && (
              <motion.div 
                className="absolute -top-6 px-2 py-1 bg-slate-800 text-white text-[9px] font-bold rounded-md whitespace-nowrap pointer-events-none z-20 shadow-xl"
                animate={{ 
                  left: `${(previewPageIndex / (allPages.length - 1)) * 100}%`,
                  x: "-50%" 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                Page {previewPageIndex + 1}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800" />
              </motion.div>
            )}
            <input
              type="range"
              min="0"
              max={allPages.length - 1}
              value={activePageIndex}
              onChange={(e) => { setActivePageIndex(parseInt(e.target.value)); keepScrubberVisible(); }}
              onMouseEnter={(e) => e.stopPropagation()}
              className="
                w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer 
                accent-blue-600 hover:accent-blue-700 transition-all
                [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-blue-600 
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
                [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default function IntroductionOfCRCCF() {
  const navigate = useNavigate();
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);



  return (
    <div className="bg-[#FBFDFF] min-h-screen">
      <motion.section
        id="top"
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <motion.nav variants={itemUp} className="flex items-center gap-4 mb-8 sm:mb-12">
          <button
            onClick={() => navigate('/about')}
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] transition-colors font-bold text-sm sm:text-base group border-none bg-transparent cursor-pointer p-0"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to About
          </button>
          <div className="h-4 w-px bg-gray-300" />
          <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-bold text-sm sm:text-base">Introduction</span>
        </motion.nav>

        <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <motion.div variants={itemUp}>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black tracking-widest mb-6">
              FOUNDATION OVERVIEW
            </div>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
              Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Secure Digital Future</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Welcome to CRCCF. We are dedicated to creating a safe, inclusive, and empowered digital world for every citizen, student, and organization through innovation and education.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Trust", "Safety", "Empowerment", "Education"].map((pill) => (
                <span key={pill} className="px-5 py-2 text-sm font-bold rounded-xl bg-white text-slate-700 border border-slate-200 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-50 cursor-default">
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: heroY }} className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-blue-100 via-white to-purple-100 blur-2xl opacity-60" aria-hidden="true" />
            <div className="relative rounded-[32px] border border-gray-200 bg-white p-4 shadow-xl overflow-hidden">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-[20px]">
                <VideoHeroIntro
                  src="https://cdn.coverr.co/videos/coverr-people-working-in-office-4627/1080p.mp4"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100" ref={contentRef}>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Explore Our <span className="text-blue-600">Pillars</span></h2>
            <p className="text-slate-500 font-medium">Discover the core values and initiatives that drive our mission forward.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {introductiondata.map((section, index) => (
              <div key={section.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[400px]">
                <InsightCard
                  section={section}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── "Ready to Join the Mission?" CTA Banner ── */}
        <motion.section
          variants={itemUp}
          className="my-8 mx-auto max-w-4xl"
        >
          <div
            className="relative rounded-[28px] overflow-hidden px-8 py-14 text-center"
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
            }}
          >
            {/* Subtle dot grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Glow orbs */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
            />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight"
              >
                Ready to Join the Mission?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
              >
                Whether you're a student, a professional, or a concerned citizen,
                there's a place for you in our digital safety ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <Link
                  to="/reach-us"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white transition-all duration-200 shadow-lg hover:shadow-blue-500/40 hover:scale-[1.04] active:scale-100"
                  style={{ background: "linear-gradient(135deg, #2563eb, #4f46e5)" }}
                >
                  Contact Us
                </Link>

                <a
                  href="#pillars"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-[1.04] active:scale-100 transition-all duration-200"
                >
                  Support Our Cause
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.section>
    </div>
  );
}






