// Used in vault-optimizer.js to assign offers dynamically based on Redis-tracked user data.
module.exports = function segment(referrals, lastSeenDiff) {
  if (referrals >= 3) return 'super-referrer';
  if (lastSeenDiff > 2) return 're-engage';
  if (referrals === 0) return 'cold';
  return 'base';
};
