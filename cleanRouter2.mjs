import fs from 'fs';

const routerPath = 'src/pages/Service/ServiceRouter.jsx';
let content = fs.readFileSync(routerPath, 'utf8');

const lines = content.split('\n');
const newLines = lines.filter(line => !line.includes('./legal/'));

fs.writeFileSync(routerPath, newLines.join('\n'));
console.log('Cleaned up ServiceRouter.jsx');
