const fs = require('fs');

const data = fs.readFileSync('public/raw data', 'utf8');

// The legal data starts at:
// "## **Complete Legal Services Support by CR Cyber Crime**" OR "Legal Services Topics:" OR "## **Business Registration & Tax Compliance Services**"
// Based on our previous analysis, the real Legal Services book sections start at:
// `## **Business Registration & Tax Compliance Services**`
// Wait, the prompt says "Book starts from Page 1... Page 1: Business Registration & Tax Compliance Services"
// And the conclusion is "After Book Page 43: Add a separate Conclusion section... Generate conclusion using opening legal services context and overall content."
// Let's grab everything from the top of the file if it's all legal data.
const startMarker = '## **Complete Legal Services Support by CR Cyber Crime**';
let startIdx = data.indexOf(startMarker);
if (startIdx === -1) {
  startIdx = 0; // if marker not found, grab the whole thing just in case it was edited.
}

const legalText = data.substring(startIdx);
const escapedText = legalText.replace(/`/g, '\\`');

fs.writeFileSync('src/pages/Service/OurService/legalData.js', 'export const legalRawData = `' + escapedText + '`;\n');
console.log('Extraction complete');
