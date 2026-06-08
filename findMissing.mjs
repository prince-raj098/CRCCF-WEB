import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function findMissing() {
  const webDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'end_to_end_web_development', 'endToEndWebDevelopmentData.js').replace(/\\/g, '/');
  const mobileDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js').replace(/\\/g, '/');

  const webModule = await import(webDataUrl);
  const mobileModule = await import(mobileDataUrl);

  const webData = webModule.endToEndWebDevelopmentData;
  const mobileData = mobileModule.mobileAppDevelopmentData;

  const normalize = (str) => {
    return str.toLowerCase()
      .replace(/website/g, '')
      .replace(/web/g, '')
      .replace(/app/g, '')
      .replace(/application/g, '')
      .replace(/mobile/g, '')
      .replace(/development/g, '')
      .replace(/android/g, '')
      .replace(/ios/g, '')
      .replace(/[^a-z]/g, '');
  };

  const webNorms = webData.map(w => ({ orig: w.heading, norm: normalize(w.heading) }));
  const mobileNorms = mobileData.map(m => normalize(m.heading));

  const missing = [];
  
  for (const w of webNorms) {
    if (!mobileNorms.includes(w.norm)) {
      // try partial match
      const isMatch = mobileNorms.some(m => m.includes(w.norm) || w.norm.includes(m));
      if (!isMatch) {
        missing.push(w.orig);
      }
    }
  }

  console.log(`Potential missing topics in mobile data (based on headings):`);
  missing.forEach(m => console.log(`- ${m}`));
}

findMissing().catch(console.error);
