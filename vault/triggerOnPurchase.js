// Unlock vault drop when Gumroad book is confirmed bought
module.exports = function unlockOnPurchase(userId, bookTitle) {
  return {
    userId,
    bookTitle,
    vaultUnlocked: true,
    drop: `🔥 Bonus drop from '${bookTitle}' unlocked in Vault for ${userId}`
  };
};