// src/pages/AboutUs/IntroductionOfCRCCF.jsx
import React, { useState, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, BookOpen, GraduationCap, ShieldCheck, Globe, Users, Briefcase, Scale, Heart } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
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
const getSvgComponent = (heading) => {
  const text = heading.toLowerCase();

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

/* -------------------------- Video Hero -------------------------- */
const IntroHeroOverlay = () => {
  return (
    <g transform="translate(680, 50)">
      <defs>
        <pattern id="introGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke={color.slate700} strokeWidth="0.5" opacity="0.3"/>
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

const VideoHeroIntro = ({ src = "" }) => {
  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block rounded-[32px] overflow-hidden" role="img">
      <defs>
        <linearGradient id="introHeroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color.slate900} />
          <stop offset="100%" stopColor={color.blue900} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#introHeroGrad)" />
      <foreignObject x="0" y="0" width="1000" height="400">
        <video
          src={src}
          autoPlay
          muted
          playsInline
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}
        />
      </foreignObject>
      <IntroHeroOverlay />
    </svg>
  );
};

const themes = [
  { color: "#2563EB", bg: "#EFF6FF", label: "FOUNDATION" },
  { color: "#9333EA", bg: "#F5F3FF", label: "TECHNOLOGY" },
  { color: "#E11D48", bg: "#FFF1F2", label: "LEGAL & SUPPORT" },
  { color: "#059669", bg: "#ECFDF5", label: "SOCIETY" },
  { color: "#D97706", bg: "#FFFBEB", label: "GROWTH" },
];

/* -------------------------- Foundation Chronicle -------------------------- */
const FoundationChronicle = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const totalPages = introductiondata.length || 1;
  
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [hoverX, setHoverX] = useState(null);
  const scrubberRef = useRef(null);

  const currentData = introductiondata[currentPage] || { heading: "Introduction", content: "Learn more about our foundation." };
  const SVGComp = getSvgComponent(currentData.heading || "") || SvgWelcome;
  const theme = themes[currentPage % themes.length] || themes[0];

  const getPreviewPage = (xPercent) => {
    return Math.max(0, Math.min(totalPages - 1, Math.round((xPercent / 100) * (totalPages - 1))));
  };

  const previewPage = hoverX !== null ? getPreviewPage(hoverX) : currentPage;
  const previewData = introductiondata[previewPage] || currentData;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-12 w-full max-w-5xl mx-auto py-6 sm:py-10">
      {/* Book Container */}
      <div className="relative w-full min-h-[550px] sm:h-auto sm:aspect-[16/9] [transform-style:preserve-3d] [perspective:2500px]">
        
        {/* Internal Pages (Static Base) */}
        <div className="absolute inset-0 bg-white rounded-[24px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col sm:flex-row">
          
          {/* Visual Side (Top on Mobile, Left on Desktop) */}
          <div className="w-full sm:w-1/2 h-56 sm:h-full bg-slate-50 border-b sm:border-b-0 sm:border-r border-slate-200 flex flex-col items-center justify-center p-6 sm:p-12 relative">
            <div className="absolute top-2 left-6 sm:top-8 sm:left-8 flex items-center gap-2">
              <BookOpen size={12} className="text-slate-400" />
              <span className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Foundation Chronicle</span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-16 h-16 sm:w-40 sm:h-40 rounded-[18px] sm:rounded-[36px] flex items-center justify-center mb-2 sm:mb-6 shadow-inner" style={{ background: theme.bg }}>
                  {SVGComp && <SVGComp className="w-8 h-8 sm:w-20 sm:h-20" style={{ color: theme.color }} />}
                </div>
                
                <h2 className="text-lg sm:text-2xl font-black leading-tight mb-0.5" style={{ color: theme.color }}>
                  {currentData.heading}
                </h2>
                
                <div className="mb-1 sm:mb-4 w-16 sm:w-24">
                  <motion.svg viewBox="0 0 100 10" className="w-full h-1.5 sm:h-2" style={{ color: theme.color }}>
                    <motion.path 
                      d="M5 5 Q 25 2, 50 5 T 95 5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </motion.svg>
                </div>

                <span className="px-4 py-1 rounded-full text-[9px] sm:text-[11px] font-black tracking-[0.2em] uppercase mb-1 sm:mb-4" style={{ background: theme.bg, color: theme.color }}>
                  {theme.label}
                </span>
              </motion.div>
            </AnimatePresence>
            
            <div 
              ref={scrubberRef}
              className="absolute bottom-2 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-12 group/scrubber"
              onMouseMove={(e) => {
                const rect = scrubberRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                setHoverX((x / rect.width) * 100);
              }}
              onMouseLeave={() => setHoverX(null)}
            >
               {/* Floating Tooltip */}
               <motion.div 
                 className="absolute -top-12 px-3 py-1.5 bg-white shadow-xl rounded-lg border border-slate-100 flex flex-col items-center pointer-events-none z-30 transition-opacity duration-200"
                 animate={{ opacity: (isScrubbing || hoverX !== null) ? 1 : 0 }}
                 style={{ 
                   left: `${hoverX !== null ? hoverX : (currentPage / (totalPages - 1)) * 100}%`,
                   translateX: "-50%",
                   borderColor: themes[previewPage % themes.length].color + "40"
                 }}
               >
                 <span className="text-[10px] font-black" style={{ color: themes[previewPage % themes.length].color }}>PAGE {previewPage + 1}</span>
                 <span className="text-[8px] font-bold text-slate-400 whitespace-nowrap uppercase tracking-tighter max-w-[100px] truncate">
                   {previewData.heading}
                 </span>
                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-slate-100 rotate-45" />
               </motion.div>

               <div className="relative h-2.5 w-full bg-slate-200 rounded-full overflow-hidden cursor-pointer shadow-inner">
                  <motion.div 
                    className="absolute top-0 left-0 h-full z-10 pointer-events-none" 
                    style={{ backgroundColor: theme.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
                  />
                  <input 
                    type="range"
                    min="0"
                    max={totalPages - 1}
                    value={currentPage}
                    onMouseDown={() => setIsScrubbing(true)}
                    onMouseUp={() => setIsScrubbing(false)}
                    onTouchStart={() => setIsScrubbing(true)}
                    onTouchEnd={() => setIsScrubbing(false)}
                    onChange={(e) => {
                      setIsCoverOpen(true);
                      setCurrentPage(parseInt(e.target.value));
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />
               </div>
               <div className="text-[8px] font-bold text-slate-400 mt-2 flex justify-between px-1 opacity-60">
                  <span>START</span>
                  <span>PAGE {currentPage + 1} OF {totalPages}</span>
                  <span>END</span>
               </div>
            </div>
          </div>

          {/* Content Side (Bottom on Mobile, Right on Desktop) */}
          <div className="w-full sm:w-1/2 h-[calc(100%-224px)] sm:h-full bg-white p-6 sm:p-16 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col h-full"
              >
                <div className="flex-1 overflow-y-auto pr-2 sm:pr-4 [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-[4px] flex items-center relative">
                  <div className="absolute top-0 left-0 text-6xl sm:text-8xl text-slate-50 font-serif pointer-events-none select-none">“</div>
                  <p className="relative z-10 text-base sm:text-xl text-slate-500 leading-relaxed font-medium italic">
                    {currentData.content}
                  </p>
                </div>
                
                <div className="mt-6 sm:mt-12 flex items-center justify-between">
                  <motion.button 
                    onClick={handlePrev}
                    disabled={currentPage === 0}
                    whileHover={currentPage !== 0 ? { scale: 1.05, x: -4 } : {}}
                    whileTap={currentPage !== 0 ? { scale: 0.95 } : {}}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-400 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-0 transition-colors group"
                  >
                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> PREV
                  </motion.button>
                  
                  {currentPage < totalPages - 1 ? (
                    <motion.button 
                      onClick={handleNext}
                      whileHover={{ scale: 1.05, x: 4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-2 rounded-xl text-xs sm:text-sm font-black text-white shadow-lg shadow-blue-900/10 transition-all"
                      style={{ backgroundColor: theme.color }}
                    >
                      NEXT <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  ) : (
                    <div className="flex items-center gap-2 px-6 py-2 rounded-xl bg-emerald-50 text-emerald-600 font-black text-xs sm:text-sm border border-emerald-100">
                      <ShieldCheck size={16} /> END
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* The Moving Cover */}
        {!isCoverOpen && (
          <motion.div
            onClick={() => setIsCoverOpen(true)}
            className="absolute inset-0 z-[20] cursor-pointer bg-white rounded-[24px] shadow-2xl border-l-[8px] sm:border-l-[12px] border-blue-600 flex flex-col items-center justify-center p-8 sm:p-12 [transform-origin:left_center]"
            whileHover={{ rotateY: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-[24px] sm:rounded-[32px] bg-white flex items-center justify-center mb-6 sm:mb-10 shadow-md p-3 sm:p-5">
              <img src="/Logo.png" alt="CRCCF Logo" className="w-full h-full object-contain" />
            </div>
            
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[8px] sm:text-[10px] font-black tracking-[0.2em] mb-4 sm:mb-6 uppercase">
                Official Publication
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-2 sm:mb-4">
                The CRCCF <br /> <span className="text-blue-600">Chronicle</span>
              </h1>
              <p className="text-slate-400 font-bold tracking-widest text-[9px] sm:text-xs uppercase">
                Our Foundation's Pillars
              </p>
            </div>
            
            <div className="absolute bottom-10 flex flex-col items-center gap-3">
               <motion.div 
                 animate={{ y: [0, 5, 0] }} 
                 transition={{ duration: 2, repeat: Infinity }}
                 className="text-blue-600 font-black text-[10px] sm:text-sm flex items-center gap-2 uppercase tracking-widest"
               >
                 Tap to Open <BookOpen size={14} />
               </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Cover flipped state */}
        <AnimatePresence>
          {isCoverOpen && (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: -180 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 z-[15] bg-white rounded-[24px] shadow-xl border-r border-slate-200 [transform-origin:left_center] [backface-visibility:hidden] pointer-events-none hidden sm:block"
            >
              <div className="w-full h-full bg-slate-50 flex items-center justify-center p-12 [transform:rotateY(180deg)]">
                 <div className="max-w-xs text-center opacity-40">
                    <img src="/Logo.png" alt="CRCCF" className="h-16 mx-auto mb-6 grayscale brightness-0" />
                    <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-tighter">
                      CR Cyber Crime Foundation
                    </p>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

/* -------------------------- Main Page -------------------------- */
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
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-bold text-sm sm:text-base group bg-transparent border-none p-0 outline-none"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to About
          </button>
          <div className="h-4 w-px bg-gray-300" />
          <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors text-sm sm:text-base font-medium">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-bold text-sm sm:text-base">Introduction</span>
        </motion.nav>

        {/* Hero Section */}
        <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
          <motion.div variants={itemUp}>
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black tracking-widest mb-6">
              FOUNDATION OVERVIEW
            </div>
            <h1 className="text-[32px] sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6">
              Building a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Secure Digital Future</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Explore the core principles and initiatives that define our commitment to a safer digital India.
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

        {/* Content Section: THE CHRONICLE */}
        <div className="mt-20 pt-20 border-t border-slate-100" ref={contentRef}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">The <span className="text-blue-600">Foundation Chronicle</span></h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              A comprehensive guide to our values, initiatives, and the pillars that support our vision for a secure digital world.
            </p>
          </div>

          <FoundationChronicle />
          
          <div className="mt-32 p-12 rounded-[40px] bg-slate-900 text-white relative overflow-hidden text-center">
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
             <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Ready to Join the Mission?</h3>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                  Whether you're a student, a professional, or a concerned citizen, there's a place for you in our digital safety ecosystem.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                   <button onClick={() => navigate('/reach-us')} className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
                      Contact Us
                   </button>
                   <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-black hover:bg-white/20 transition-all">
                      Support Our Cause
                   </button>
                </div>
             </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
