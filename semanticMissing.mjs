import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkMissing() {
  const publicDataContent = fs.readFileSync(path.join(__dirname, 'public', 'mobileAppDevelopmentData.jsx'), 'utf8');
  const headings = [...publicDataContent.matchAll(/heading:\s*["']([^"']+)["']/g)].map(m => m[1]);

  const generatedDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js').replace(/\\/g, '/');
  const mod = await import(generatedDataUrl);
  const genData = mod.mobileAppDevelopmentData;
  const genHeadings = genData.map(d => d.heading);

  const normalize = (s) => s.toLowerCase()
    .replace(/android\s*&\s*ios\s*application\s*development/g, '')
    .replace(/app\s*development/g, '')
    .replace(/development/g, '')
    .replace(/app/g, '')
    .replace(/&\s*/g, '')
    .replace(/and\s*/g, '')
    .replace(/website/g, '')
    .replace(/[^a-z0-9]/g, '');

  const normGen = genHeadings.map(normalize);

  const missing = [];
  headings.forEach(h => {
    const norm = normalize(h);
    if (!normGen.includes(norm)) {
      missing.push(h);
    }
  });

  console.log("These headings in public/mobileAppDevelopmentData.jsx could not be found in the generated 59 items:");
  console.log(missing);
}

checkMissing().catch(console.error);
