import fs from 'fs';

const rawData = fs.readFileSync('src/pages/Service/OurService/legalData.js', 'utf8');

// Find where the actual content starts
const startIndex = rawData.indexOf('# **Legal Services – Section Wise Final Draft**');
if (startIndex === -1) {
  console.log("Could not find start index");
  process.exit(1);
}

const contentPart = rawData.substring(startIndex);
const sections = contentPart.split('## **').filter(Boolean);

const pages = [];
let conclusion = "CRCCF’s Legal Services framework is designed to provide reliable, organized and professional support for a wide range of legal and compliance-related needs. Through structured documentation, responsible guidance and service-focused assistance, CRCCF helps clients stay legally prepared, professionally managed and compliance-ready with confidence."; // from the index

sections.forEach((section) => {
  if (section.trim().startsWith('Legal Services – Section Wise Final Draft')) return; // skip the main title

  const lines = section.trim().split('\n');
  let heading = lines[0].trim();
  if (heading.endsWith('**')) heading = heading.slice(0, -2).trim();

  let contentLines = lines.slice(1).join('\n').trim();

  // Replace numbered lists with bullet points
  contentLines = contentLines.replace(/^\d+\.\s/gm, '• ');

  // Keep **bold** for React to parse, but let's remove the **Description:** and **Legal Services Topics:** labels as the user requested?
  // Wait, the prompt says: "Page Structure: Page Number, Page Title, Description, Legal Service Topic, Bullet Points, Final Note"
  // "Convert **text** -> Bold text. Remove ** symbols completely."
  // I will just store it, and let LegalServices.jsx render it with `renderBold`!

  pages.push({
    heading,
    content: contentLines
  });
});

let output = `export const legalSupportData = ${JSON.stringify(pages, null, 2)};\n`;
output += `\nexport const legalConclusion = ${JSON.stringify(conclusion)};\n`;

fs.writeFileSync('src/pages/Service/OurService/legalSupportData.js', output);
console.log('Successfully generated legalSupportData.js with ' + pages.length + ' pages.');
