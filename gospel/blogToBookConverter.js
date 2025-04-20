// Turns blog posts into eBook outlines
module.exports = function convertToBook(blogText, title = "Gospel Echoes") {
  return {
    title,
    chapters: blogText.split(/\n{2,}/).map((chunk, i) => ({
      chapter: `Chapter ${i + 1}`,
      content: chunk.trim()
    })),
    vaultHook: `This book unlocks deeper vault insights when claimed.`
  };
};