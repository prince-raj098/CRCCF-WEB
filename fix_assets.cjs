const fs = require('fs');
const path = require('path');

const targetDir = path.resolve('d:/CRCCF projects/CR Cyber Crime Foundation/demo/NewHomepage/src');

function fixAssetImports(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (let entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            fixAssetImports(fullPath);
        } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content.replace(/['"]\.\.\/assets\//g, '"../../assets/ContactUs/');
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Fixed assets in:', fullPath);
            }
        }
    }
}

fixAssetImports(path.join(targetDir, 'data', 'ContactUs'));
fixAssetImports(path.join(targetDir, 'sections', 'ContactUs'));
console.log('Asset imports fixed.');
