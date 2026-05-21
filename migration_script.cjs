const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve('d:/CRCCF projects/CR Cyber Crime Foundation/pages/Contact Zip/contact-hub - Copy/src');
const targetDir = path.resolve('d:/CRCCF projects/CR Cyber Crime Foundation/demo/NewHomepage/src');

const foldersToMigrate = ['components', 'data', 'layouts', 'pages', 'sections', 'routes'];

function copyAndRewrite(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyAndRewrite(srcPath, destPath);
        } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
            let content = fs.readFileSync(srcPath, 'utf8');
            
            // Rewrite imports from '../something/' to '../../something/ContactUs/'
            foldersToMigrate.forEach(folder => {
                const regex = new RegExp(`(['"])\\.\\./${folder}/`, 'g');
                content = content.replace(regex, `$1../../${folder}/ContactUs/`);
            });

            fs.writeFileSync(destPath, content, 'utf8');
            console.log(`Copied and rewritten: ${destPath}`);
        } else {
             // Just copy non-js files directly
             fs.copyFileSync(srcPath, destPath);
             console.log(`Copied: ${destPath}`);
        }
    }
}

foldersToMigrate.forEach(folder => {
    const srcFolder = path.join(sourceDir, folder);
    const destFolder = path.join(targetDir, folder, 'ContactUs');
    
    if (fs.existsSync(srcFolder)) {
        console.log(`Migrating ${folder}...`);
        copyAndRewrite(srcFolder, destFolder);
    }
});

console.log('Migration script completed.');
