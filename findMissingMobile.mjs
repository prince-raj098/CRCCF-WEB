import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function findMissing() {
  const publicDataContent = fs.readFileSync(path.join(__dirname, 'public', 'mobileAppDevelopmentData.jsx'), 'utf8');
  
  // Extract all headings from publicDataContent
  const headings = [...publicDataContent.matchAll(/heading:\s*["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`Public JSX has ${headings.length} headings.`);

  const generatedDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js').replace(/\\/g, '/');
  const mod = await import(generatedDataUrl);
  const genData = mod.mobileAppDevelopmentData;
  const genHeadings = genData.map(d => d.heading);
  console.log(`Generated JS has ${genHeadings.length} headings.`);

  const missing = headings.filter(h => !genHeadings.includes(h));
  console.log(`Missing headings in generated data:`, missing);
}

findMissing().catch(console.error);
