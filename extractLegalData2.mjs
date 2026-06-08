import fs from 'fs';

const data = fs.readFileSync('public/raw data', 'utf8');

const startMarker = '## **Complete Legal Services Support by CR Cyber Crime**';
let startIdx = data.indexOf(startMarker);
if (startIdx === -1) {
  startIdx = 0; 
}

const legalText = data.substring(startIdx);
const escapedText = legalText.replace(/`/g, '\\`');

fs.writeFileSync('src/pages/Service/OurService/legalData.js', 'export const legalRawData = `' + escapedText + '`;\n');
console.log('Extraction complete');
