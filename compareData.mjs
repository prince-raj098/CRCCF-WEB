import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkMissing() {
  const webDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'end_to_end_web_development', 'endToEndWebDevelopmentData.js').replace(/\\/g, '/');
  const mobileDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js').replace(/\\/g, '/');

  const webModule = await import(webDataUrl);
  const mobileModule = await import(mobileDataUrl);

  const webData = webModule.endToEndWebDevelopmentData;
  const mobileData = mobileModule.mobileAppDevelopmentData;

  const extractNumber = (str) => {
    const match = str.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  };

  const webNumbers = webData.map(item => extractNumber(item.heading)).filter(n => n !== null);
  const mobileNumbers = mobileData.map(item => extractNumber(item.heading)).filter(n => n !== null);

  const missingInMobile = webNumbers.filter(n => !mobileNumbers.includes(n));
  
  console.log(`Web topics: ${webNumbers.length}`);
  console.log(`Mobile topics: ${mobileNumbers.length}`);
  console.log(`Numbers missing in mobile:`, missingInMobile);
  
  if (missingInMobile.length > 0) {
    const missingItems = webData.filter(item => missingInMobile.includes(extractNumber(item.heading)));
    console.log(`Missing topic from Web Development:`);
    missingItems.forEach(item => {
      console.log(`- ${item.heading}`);
    });
  }
}

checkMissing().catch(console.error);
