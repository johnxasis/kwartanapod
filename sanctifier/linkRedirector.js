// Redirects broken links to fallback offers
module.exports = function checkLinkStatus(url) {
  return {
    url,
    status: "404",
    redirectTo: "https://vault.oasis/fallback/book"
  };
};