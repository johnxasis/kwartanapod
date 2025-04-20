// Simulate NFT gate check for Vault access
const userNFTs = {};

module.exports = {
  assignNFT: function(userId) {
    userNFTs[userId] = true;
  },
  hasAccess: function(userId) {
    return !!userNFTs[userId];
  }
};