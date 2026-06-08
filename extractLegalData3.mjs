import fs from 'fs';
try {
  const data = fs.readFileSync('public/raw data', 'utf8');
  const lines = data.split('\n');
  const relevantLines = lines.slice(286); // 286 is line 287 (0-indexed)
  fs.writeFileSync('src/pages/Service/OurService/legalData.js', 'export const legalRawData = `' + relevantLines.join('\n').replace(/`/g, '\\`') + '`;\n');
  console.log('Successfully extracted line 287 onwards.');
} catch (e) {
  console.log('Error reading file:', e.message);
}
