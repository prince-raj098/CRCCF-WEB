import fs from 'fs';
import path from 'path';

const outPath = path.join(process.cwd(), 'src', 'pages', 'Service', 'cyberAwareness', 'CyberAwareness.jsx');
let content = fs.readFileSync(outPath, 'utf8');

// 1. Add previewPageIndex state
content = content.replace(
  'const [activePageIndex, setActivePageIndex] = useState(0);',
  'const [activePageIndex, setActivePageIndex] = useState(0);\n  const [previewPageIndex, setPreviewPageIndex] = useState(null);'
);

// 2. Replace the bottom scrubber
const oldScrubberStart = '<div className={`transition-all duration-500 ease-out mt-4 ${isOpen || showScrubber ? \'opacity-100\' : \'opacity-0 pointer-events-none\'}`}>';
const oldScrubberEndMarker = '        </div>\n      </div>\n    </div>\n  );\n}';

const [firstHalf, rest] = content.split(oldScrubberStart);
const innerBlocks = rest.split(oldScrubberEndMarker);

// The new scrubber block (styled with indigo/amber matching the new Cyber design, or keep amber like DigitalMarketing? The new Cyber design uses indigo for hero, but let's stick to amber-600 for the book since the book itself is still amber inside).
// In DigitalMarketing: accent-amber-600 hover:accent-amber-700
const newScrubber = `<div className={\`transition-all duration-500 ease-out mt-4 \${isOpen || showScrubber ? 'opacity-100' : 'opacity-0 pointer-events-none'}\`}>
        <div className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-[24px] border border-slate-100">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-[12px] font-bold text-slate-700 mt-1 truncate max-w-[180px] sm:max-w-[300px]">
                {allPages[activePageIndex]?.title || allPages[activePageIndex]?.pageTitle || "Page"}
              </span>
            </div>
            <span className="flex-shrink-0 px-2 sm:px-4 py-1 sm:py-1.5 rounded-full bg-indigo-600 text-white text-[9px] sm:text-[11px] font-black tabular-nums shadow-lg shadow-indigo-200">
              {activePageIndex + 1} / {allPages.length}
            </span>
          </div>
          <div className="relative pt-2">
            {previewPageIndex !== null && (
              <motion.div
                className="absolute -top-10 px-3 py-1.5 bg-slate-800 text-white text-[10px] font-bold rounded-lg whitespace-nowrap pointer-events-none z-20 shadow-2xl flex items-center gap-2"
                animate={{
                  left: \`\${(previewPageIndex / (allPages.length - 1)) * 100}%\`,
                  x: "-50%"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              >
                <span className="bg-white/20 px-1.5 py-0.5 rounded text-[9px]">{previewPageIndex + 1}</span>
                <span>{allPages[previewPageIndex]?.title?.slice(0, 35)}{(allPages[previewPageIndex]?.title?.length > 35) ? '...' : ''}</span>
              </motion.div>
            )}
            <input
              type="range" min="0" max={allPages.length - 1} value={activePageIndex}
              onChange={(e) => { setActivePageIndex(parseInt(e.target.value)); keepScrubberVisible(); }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percent = Math.min(Math.max(x / rect.width, 0), 1);
                setPreviewPageIndex(Math.round(percent * (allPages.length - 1)));
              }}
              onMouseLeave={() => setPreviewPageIndex(null)}
              className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600 hover:accent-indigo-700 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(outPath, firstHalf + newScrubber + innerBlocks.slice(1).join(oldScrubberEndMarker));
console.log('Successfully updated CyberAwareness scrubber');
