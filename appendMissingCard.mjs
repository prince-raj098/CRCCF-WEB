import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function appendMissing() {
  const webDataUrl = 'file://' + path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'end_to_end_web_development', 'endToEndWebDevelopmentData.js').replace(/\\/g, '/');
  const webModule = await import(webDataUrl);
  const webData = webModule.endToEndWebDevelopmentData;

  // Find Hospital Management in webData
  const hospitalManagementItem = webData.find(item => item.heading.includes('Hospital Management'));
  if (!hospitalManagementItem) {
    console.error("Could not find Hospital Management in webData!");
    return;
  }

  // Create mobile version
  const mobileItem = {
    id: hospitalManagementItem.id.replace('website-development', 'android-ios-application-development'),
    heading: hospitalManagementItem.heading.replace('Website Development', 'Android & iOS Application Development'),
    content: hospitalManagementItem.content.replace(/website/g, 'mobile application').replace(/Website/g, 'Mobile Application'),
    tagline: hospitalManagementItem.tagline.replace(/website/g, 'mobile application').replace(/Website/g, 'Mobile Application')
  };

  const mobileFilePath = path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js');
  
  let content = fs.readFileSync(mobileFilePath, 'utf8');
  // Remove the closing bracket and add the new item
  content = content.replace(/\s*\];\s*$/, '');
  content += `,\n${JSON.stringify(mobileItem, null, 2)}\n];\n`;
  
  fs.writeFileSync(mobileFilePath, content, 'utf8');
  console.log(`Successfully appended missing card: ${mobileItem.heading}`);
}

appendMissing().catch(console.error);
