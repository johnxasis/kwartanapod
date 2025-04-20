// Spawns a GPT clone based on a book chapter
module.exports = function spawnChapterClone(chapterNumber, title) {
  return {
    id: `ChapterGPT-${chapterNumber}`,
    promptDNA: `focus:${title}|angle:automated|hook:chapter-special`,
    upsell: "Buy full book for private prompts + elite funnels."
  };
};