// Tracks referrals and upgrades
let referralDB = {}; // mock

function trackReferral(refCode, isPaid) {
  if (!referralDB[refCode]) referralDB[refCode] = { referred: 0, paid: 0 };
  referralDB[refCode].referred++;
  if (isPaid) referralDB[refCode].paid++;
  return referralDB[refCode];
}

module.exports = trackReferral;
