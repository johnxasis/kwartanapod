// Telegram funnel simulation of a viral book club
module.exports = function bookClubPost(bookTitle, link) {
  return `📚 Welcome to the AI Book Club!
This week's top read: *${bookTitle}*
📝 "Absolutely mind-blowing GPT hacks — I used Chapter 3 to make $190/day."
📖 Join 3,000+ clone builders reading it now: ${link}
#GPTbook #AISideHustle #PromptForgeClub`;
};