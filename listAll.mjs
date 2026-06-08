import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function listAll() {
  const webDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'end_to_end_web_development', 'endToEndWebDevelopmentData.js').replace(/\\/g, '/');
  const mobileDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js').replace(/\\/g, '/');

  const webModule = await import(webDataUrl);
  const mobileModule = await import(mobileDataUrl);

  const webData = webModule.endToEndWebDevelopmentData;
  const mobileData = mobileModule.mobileAppDevelopmentData;

  const wHeads = webData.map(w => w.heading.trim());
  const mHeads = mobileData.map(m => m.heading.trim());
  
  // Try to strip leading numbers for easier comparison
  const strip = (s) => s.replace(/^\d+[\s–-]+/, '');
  
  const wStrip = wHeads.map(strip);
  const mStrip = mHeads.map(strip);
  
  console.log("=== WEB ===");
  wStrip.forEach(w => console.log(w));
  console.log("=== MOBILE ===");
  mStrip.forEach(m => console.log(m));
}

listAll().catch(console.error);
