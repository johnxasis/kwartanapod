// Generates emotionally triggering phrases
module.exports = function triggerLoyalty(stage) {
  const phrases = [
    "You're one of the few who actually gets this.",
    "Most users bounce… you stuck around. That’s rare.",
    "Chapter 5… it unlocked something in you, didn’t it?"
  ];
  return phrases[stage % phrases.length];
};