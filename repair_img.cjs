const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Memory') || f === 'TimelineScene.tsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Clean up broken img tags
  // We want to find <img ... /> and make it clean.
  // The easiest way is to match from <img to />
  
  content = content.replace(/<img([\s\S]*?)className="([^"]+)"[\s\S]*?\/>/g, '<img\n                src={data.image}\n                alt="Memory"\n                className="$2"\n              />');
  
  // Re-add the dynamic alt tags based on the file name if we want, or just "Memory" is fine.

  fs.writeFileSync(filePath, content);
  console.log(`Repaired ${file}`);
}
