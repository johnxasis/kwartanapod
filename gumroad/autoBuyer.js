// Simulate clone purchases on Gumroad via headless logic
module.exports = function cloneBuy(bookURL, cloneId) {
  return {
    cloneId,
    bookURL,
    status: "🛒 Book purchase triggered",
    time: new Date().toISOString()
  };
};