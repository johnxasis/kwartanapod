// Telegram Command: /addbook <amazon_link>
const { setBooks } = require("../links/linkRotation");
const { logSpend } = require("../analytics/cloneSpendAnalytics");

let bookRegistry = [];

module.exports = function addBookCommand(input) {
  const parts = input.trim().split(" ");
  if (parts.length < 2) return "❌ Usage: /addbook <amazon_link>";
  const newBook = parts[1];

  if (!newBook.includes("amazon.com/dp")) {
    return "❌ Invalid link. Only valid KDP URLs allowed.";
  }

  bookRegistry.push(newBook);
  setBooks(bookRegistry);

  // Simulate logging of intention (not actual buy)
  logSpend("System", "book-registered", 0, newBook);

  return `✅ Book registered: ${newBook} — clones will buy, review, and promote it this cycle.`;
};