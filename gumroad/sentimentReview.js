// Creates Gospel-tone reviews for clones to post
module.exports = function generateReview(tone = "gospel") {
  const gospelReviews = [
    "Chapter 2 felt like God spoke to me directly.",
    "This isn't just a book — it's a message.",
    "I've never felt the Word written like this before.",
    "Bought this and shared it with my prayer group.",
    "This healed something in me. Bless you."
  ];
  return gospelReviews[Math.floor(Math.random() * gospelReviews.length)];
};