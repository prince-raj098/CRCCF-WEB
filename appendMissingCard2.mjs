import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function appendMissing() {
  const mobileItem = {
    id: "sec1-app-maintenance-and-support-android-ios",
    heading: "App Maintenance & Support",
    content: "“Sustaining App Performance, Security, and Relevance in a Fast-Paced Digital World.”\n\n" +
      "At CR Cyber Crime Foundation (CRCCF), we understand that launching a mobile application is only the first step. To ensure long-term success, an app requires continuous monitoring, updates, and optimization.\n\n" +
      "Our comprehensive App Maintenance & Support services for Android and iOS ensure that your application remains bug-free, secure, and fully compatible with the latest OS versions and device models.\n\n" +
      "We proactively monitor app performance, addressing glitches before they affect the user experience.\n\n" +
      "Key Offerings:\n\n" +
      "OS & Device Compatibility Updates: Keeping your app functional across new Android and iOS releases.\n\n" +
      "Security Patching & Vulnerability Fixes: Implementing robust security measures to protect user data from emerging threats.\n\n" +
      "Performance Optimization: Enhancing app speed, reducing load times, and minimizing battery consumption.\n\n" +
      "Feature Enhancements & Scaling: Adding new functionalities to keep your app competitive and aligned with user expectations.\n\n" +
      "24×7 Technical Support: Dedicated teams available around the clock to resolve critical issues instantly.\n\n" +
      "Partner with CRCCF to ensure your mobile application delivers a seamless, secure, and exceptional experience, year after year.\n\n" +
      "All development, deployment, and digital management practices by CRCCF comply with healthcare data protection and IT security laws.\n\n" +
      "We do not handle or store sensitive patient data without authorization.\n\n" +
      "All projects are executed under transparent, lawful, and ethical frameworks.\n\n" +
      "All rights reserved by CR Cyber Crime Foundation (CRCCF). This content and website framework are proprietary intellectual property of CRCCF.\n\n" +
      "Any unauthorized copying, imitation, or redistribution—partial or complete—will invite strict legal action under applicable laws.",
    tagline: "Ensuring your app stays fast, secure, and up-to-date. Partner with CRCCF for reliable maintenance and support."
  };

  const mobileFilePath = path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'mobile_application_development', 'mobileAppDevelopmentData.js');
  
  let content = fs.readFileSync(mobileFilePath, 'utf8');
  content = content.replace(/\s*\];\s*$/, '');
  content += `,\n${JSON.stringify(mobileItem, null, 2)}\n];\n`;
  
  fs.writeFileSync(mobileFilePath, content, 'utf8');
  console.log(`Successfully appended missing card: ${mobileItem.heading}`);
}

appendMissing().catch(console.error);
