const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:\\Users\\HP\\.gemini\\antigravity-ide\\brain\\54a074ba-3b70-410f-852a-9b44f7d4bd53\\.system_generated\\logs\\transcript.jsonl';
const outputPath = 'src/data/OurServices/cyber_awareness/cyberAwarenessData.js';

async function parseData() {
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let fullText = '';
  for await (const line of rl) {
    try {
      const step = JSON.parse(line);
      if (step.type === 'USER_INPUT' && step.content) {
        fullText += step.content + '\n';
      }
    } catch (e) {
      // ignore
    }
  }

  // Parse Sections
  const sections = [];
  const sectionRegex = /## \*\*Section (\d+): (.*?)\*\*[\s\S]*?\*\*Description:\*\*([\s\S]*?)\*\*Cyber Awareness Topics:\*\*([\s\S]*?)\*\*Final Note:\*\*([\s\S]*?)(?=## \*\*Section |\Z)/g;
  
  let match;
  while ((match = sectionRegex.exec(fullText)) !== null) {
    sections.push({
      id: parseInt(match[1]),
      title: match[2].trim(),
      description: match[3].trim(),
      topicsListText: match[4].trim(),
      finalNote: match[5].trim(),
      topicsContent: []
    });
  }

  // Parse Topic Contents
  // Format: ## **1. Cyber Awareness Services with CRCCF**
  const topicRegex = /## \*\*(\d+)\. (.*?)\*\*([\s\S]*?)(?=## \*\*(\d+)\. |\Z)/g;
  let tMatch;
  const topicsMap = {};
  while ((tMatch = topicRegex.exec(fullText)) !== null) {
    const tId = parseInt(tMatch[1]);
    const tTitle = tMatch[2].trim();
    let tContent = tMatch[3].trim();
    
    // Some content might have "Conclusion:" at the end.
    topicsMap[tId] = { title: tTitle, content: tContent };
  }

  // Combine
  sections.forEach(sec => {
    // Extract topic numbers from topicsListText
    const nums = [...sec.topicsListText.matchAll(/(\d+)\./g)].map(m => parseInt(m[1]));
    nums.forEach(num => {
      if (topicsMap[num]) {
        sec.topicsContent.push(topicsMap[num]);
      } else {
        // Fallback if topic content is missing
        // Get the title from topicsListText
        const titleMatch = new RegExp(`${num}\\.\\s*(.*)`).exec(sec.topicsListText);
        const title = titleMatch ? titleMatch[1].trim() : `Topic ${num}`;
        sec.topicsContent.push({ title, content: "Content coming soon..." });
      }
    });
  });

  // Ensure 22 sections
  // Remove duplicates if any (due to parsing multiple user inputs)
  const uniqueSections = [];
  const seenIds = new Set();
  for (const sec of sections) {
    if (!seenIds.has(sec.id) && sec.id <= 22) {
      seenIds.add(sec.id);
      uniqueSections.push(sec);
    }
  }
  uniqueSections.sort((a, b) => a.id - b.id);

  // Generate JS File
  let jsCode = `export const cyberAwarenessData = [\n`;
  uniqueSections.forEach(sec => {
    let contentString = `**Description:**\n${sec.description}\n\n`;
    sec.topicsContent.forEach((tc, idx) => {
      // Remove any trailing "##" from content
      let text = tc.content.replace(/## \*\*.*$/s, '').trim();
      if(text.endsWith("##")) text = text.slice(0, -2).trim();
      contentString += `${idx + 1}. ${tc.title}\n${text}\n\n`;
    });
    
    contentString = contentString.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    jsCode += `  {
    id: "section-${sec.id}",
    heading: "${sec.title}",
    content: \`${contentString.trim()}\`
  },\n`;
  });
  jsCode += `];\n`;

  // Create dir if not exists
  const dir = 'src/data/OurServices/cyber_awareness';
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, jsCode);
  console.log(`Generated ${uniqueSections.length} sections in ${outputPath}`);
}

parseData();
