// Injects all monetization into any funnel click
module.exports = function injectFunnel(userId) {
  return {
    kdp: `https://amazon.com/yourbook?ref=${userId}`,
    gumroad: `https://gumroad.com/l/clonepack?ref=${userId}`,
    vault: `https://yourdomain.com/vault?unlock=${userId}`
  };
};