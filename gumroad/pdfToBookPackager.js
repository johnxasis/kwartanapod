// Converts folder of content into single book format for Gumroad
const fs = require('fs');

module.exports = function packageBook(folderName, title) {
  const chapters = fs.readdirSync(folderName).map(file => fs.readFileSync(`${folderName}/${file}`, 'utf8'));
  return {
    title,
    book: chapters.join("\n\n---\n\n"),
    packaged: true,
    preview: chapters[0].slice(0, 240)
  };
};