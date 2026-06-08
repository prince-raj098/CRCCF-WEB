import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'src', 'pages', 'Service', 'cyberAwareness', 'CyberAwareness.jsx');
const content = fs.readFileSync(outPath, 'utf8');

const [firstPart, mainPagePart] = content.split('/* -------------------------------- Main Page -------------------------------- */');

const newMainPagePart = `
import { useNavigate } from 'react-router-dom';

/* -------------------------------- Main Page -------------------------------- */
const useAnims = () => {
  const shouldReduce = useReducedMotion();
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: shouldReduce ? { duration: 0 } : { duration: 0.25, when: "beforeChildren", staggerChildren: 0.06 } },
  };
  const itemUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 12 },
    show: { opacity: 1, y: 0, transition: { duration: shouldReduce ? 0 : 0.28 } },
  };
  return { container, itemUp };
};

const CyberHeroOverlay = () => {
  return (
    <g transform="translate(680, 50)">
      <defs>
        <pattern id="cyberGrid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E293B" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <linearGradient id="cyberGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill="url(#cyberGrid)" />

      <g transform="translate(150, 150)">
        <motion.path
          d="M0 -80 L 70 0 L 0 80 L -70 0 Z"
          fill="url(#cyberGrad)"
          opacity="0.9"
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.circle
          r="25"
          fill="#FFFFFF"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.path
          d="M-10 0 H 10 M 0 -10 V 10"
          stroke="#3730A3"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
      </g>
    </g>
  );
};

const VideoHeroCyber = ({ src = "" }) => {
  const shouldReduce = useReducedMotion();
  const title = "CRCCF Cyber Security Hero";

  if (shouldReduce || !src) {
    return (
      <svg viewBox="0 0 1000 400" role="img" aria-label={title} className="w-full h-auto">
        <rect width="100%" height="100%" fill="#0F172A" rx="20" />
        <CyberHeroOverlay />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1000 400" className="w-full h-auto block" role="img" aria-label={title}>
      <defs>
        <mask id="cyberHeroMask">
          <rect width="100%" height="100%" fill="white" />
          <CyberHeroOverlay />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="#0F172A" rx="20" />
      <foreignObject x="0" y="0" width="1000" height="400" mask="url(#cyberHeroMask)">
        <video
          src={src}
          autoPlay muted playsInline loop
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
        />
      </foreignObject>
      <CyberHeroOverlay />
    </svg>
  );
};

export default function CyberAwareness() {
  const navigate = useNavigate();
  const { container, itemUp } = useAnims();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Parse data directly inside the component
  const allPages = useMemo(() => parseCyberData(cyberAwarenessData), []);
  const bookInfo = useMemo(() => {
    if (!cyberAwarenessData) return { title: "Cyber Awareness Services", description: "" };
    const titleMatch = cyberAwarenessData.match(/Title:-\\s*(.+)/);
    const descMatch = cyberAwarenessData.match(/Description:-\\s*\\n([\\s\\S]+?)\\n\\n## \\*\\*/);
    return {
      title: titleMatch ? titleMatch[1].trim() : "Cyber Awareness Services",
      description: descMatch ? descMatch[1].trim() : ""
    };
  }, []);

  return (
    <div className="bg-[#FBFDFF] min-h-screen">
      <motion.section id="top" variants={container} initial="hidden" animate="show" className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16">
        <motion.nav variants={itemUp} className="mb-12">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors font-bold text-sm bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowLeft size={18} /> Back to Our Services
          </button>
        </motion.nav>

        <div ref={heroRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div variants={itemUp}>
            <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black tracking-[0.2em] mb-6 uppercase">
              Digital Safety
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight">
              {bookInfo.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl whitespace-pre-line">
              {bookInfo.description}
            </p>
          </motion.div>

          <motion.div style={{ y: heroY }} className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-tr from-indigo-100 via-white to-purple-100 blur-3xl opacity-60" />
            <div className="relative rounded-[40px] border border-gray-200 bg-white p-5 shadow-2xl overflow-hidden">
               <VideoHeroCyber src="https://cdn.coverr.co/videos/coverr-typing-on-laptop-2720/1080p.mp4" />
            </div>
          </motion.div>
        </div>

        <div className="mt-10 pt-10 border-t border-slate-100">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Cyber <span className="text-indigo-600">Awareness Services</span></h2>
            <p className="text-slate-500 text-lg font-medium">Flip the cover to explore our 122-page strategic cyber safety guide.</p>
          </div>

          <div className="py-6">
            <CyberBook allPages={allPages} bookTitle="Cyber Awareness" bookSubtitle="Our Strategic Guide" coverLabel="Read The Guide" />
          </div>
        </div>

        {/* Footer Call to Action */}
        <motion.div variants={itemUp} className="mt-16 text-center">
          <div className="bg-slate-900 rounded-[40px] p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 blur-[150px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 blur-[100px] opacity-10" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Ready to secure your digital presence?</h3>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">Join our mission to grow securely in the digital age with our cyber safety intelligence.</p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link to="/contact" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/30 flex items-center gap-2">
                Get Started <ArrowRight size={22} />
              </Link>
            </div>
          </div>
        </motion.div>

      </motion.section>
    </div>
  );
}
`;

// Wait, I need to make sure useNavigate is imported at the top, not inside the Main Page section.
const newFirstPart = firstPart.replace("import { Link } from 'react-router-dom';", "import { Link, useNavigate } from 'react-router-dom';");

// Remove the inline useNavigate import I just added to the main part, since I moved it to the top.
const finalMainPagePart = newMainPagePart.replace("import { useNavigate } from 'react-router-dom';", "");

fs.writeFileSync(outPath, newFirstPart + finalMainPagePart);
console.log('Successfully updated CyberAwareness.jsx');
