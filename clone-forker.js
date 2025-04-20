const fs = require('fs');
const configPath = './clone-config.js';
const existingClones = require(configPath);

function generateCloneName() {
  const rand = Math.random().toString(36).substring(2, 8);
  return `CloneBot_${rand}`;
}

const newClones = Array.from({ length: 10 }).map(() => {
  const name = generateCloneName();
  return {
    name,
    link: `https://t.me/${name}`,
    niche: "AI Credit Airdrops"
  };
});

const updatedClones = [...existingClones, ...newClones];

fs.writeFileSync(configPath, `module.exports = ${JSON.stringify(updatedClones, null, 2)};`);
console.log("✅ 10x Clones deployed:", newClones.map(c => c.name).join(', '));
