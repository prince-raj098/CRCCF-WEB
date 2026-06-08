import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, 'public', 'dextop-services');
const outputFilePath = path.join(__dirname, 'src', 'data', 'OurServices', 'software_it_services', 'desktop_laptop_software_solutions', 'desktopLaptopSoftwareSolutionsData.js');

fs.mkdirSync(path.dirname(outputFilePath), { recursive: true });

function getAllJsFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllJsFiles(fullPath));
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const jsFiles = getAllJsFiles(rootDir);
console.log(`Found ${jsFiles.length} files.`);

async function mergeAll() {
  let allData = [];
  for (const file of jsFiles) {
    let fileUrl = 'file://' + file.replace(/\\/g, '/');
    try {
      // First, read the file and check for any common syntax errors (like +CSS+)
      let content = fs.readFileSync(file, 'utf8');
      if (content.includes('+CSS +')) {
        content = content.replace(/\+CSS \+/g, '');
        content = content.replace(/standards\.\n\n" \n\s+"End/g, 'standards.\n\n" +\n      "End');
        fs.writeFileSync(file, content);
      }
      if (content.includes('+CSS+')) {
        content = content.replace(/\+CSS\+/g, '');
        fs.writeFileSync(file, content);
      }

      const module = await import(fileUrl + '?t=' + Date.now()); // bust cache
      const exportKeys = Object.keys(module);
      if (exportKeys.length > 0) {
        const data = module[exportKeys[0]];
        if (Array.isArray(data)) {
          allData = allData.concat(data);
        }
      }
    } catch (err) {
      console.error(`Error importing ${fileUrl}:`, err.message);
    }
  }

  // Use the numbering in the heading for sorting if present
  allData.sort((a, b) => {
    const matchA = a.heading.match(/^(\d+)/);
    const matchB = b.heading.match(/^(\d+)/);
    if (matchA && matchB) {
      return parseInt(matchA[1], 10) - parseInt(matchB[1], 10);
    }
    return 0;
  });

  const outputContent = `export const desktopLaptopSoftwareSolutionsData = ${JSON.stringify(allData, null, 2)};\n`;
  fs.writeFileSync(outputFilePath, outputContent, 'utf8');
  console.log(`Merged ${allData.length} sections into ${outputFilePath}`);
}

mergeAll().catch(console.error);
