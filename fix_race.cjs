const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(dir).filter(f => f.startsWith('Memory') || f === 'TimelineScene.tsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace the imageLoaded and showText state initializations to use timeouts
  if (content.includes('setImageLoaded(false);') && content.includes('setShowText(false);')) {
    content = content.replace(
      /useEffect\(\(\) => \{\s+setImageLoaded\(false\);\s+setShowText\(false\);\s+\}, \[data\]\);/,
      `useEffect(() => {
    setImageLoaded(false);
    setShowText(false);
    const t1 = setTimeout(() => setImageLoaded(true), 100);
    const t2 = setTimeout(() => setShowText(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [data]);`
    );
  }
  
  // Specifically for MemoryCarRideScene
  if (file === 'MemoryCarRideScene.tsx') {
    content = content.replace(
      /onLoad=\{.*?\}\n/s,
      ''
    );
    // Also we need to make sure showText triggers when phase === 'reveal'
    content = content.replace(
      /const t1 = setTimeout\(\(\) => setPhase\('found'\), 800\);\s+return \(\) => clearTimeout\(t1\);\s+\}, \[data\]\);/,
      `const t1 = setTimeout(() => setPhase('found'), 800);
    const t2 = setTimeout(() => setShowText(true), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [data]);`
    );
  } else {
    // Remove onLoad handlers from img tags in all other files
    content = content.replace(/onLoad=\{[\s\S]*?\}/g, '');
  }

  // specifically for TimelineScene
  if (file === 'TimelineScene.tsx') {
    if (content.includes('setShowText(true)')) {
      content = content.replace(
        /onAnimationComplete=\{[\s\S]*?\}/g,
        ''
      );
      content = content.replace(
        /const \[showText, setShowText\] = useState\(false\);/,
        `const [showText, setShowText] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 1500);
    return () => clearTimeout(t);
  }, []);`
      );
    }
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
