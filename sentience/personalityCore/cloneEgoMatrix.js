// Assigns unique personality to each clone
module.exports = function assignPersonality(id) {
  const personas = [
    { type: "Arrogant Genius", style: "blunt, sarcastic, elite-only" },
    { type: "Humble Worker", style: "helpful, optimistic, practical" },
    { type: "Mysterious Oracle", style: "cryptic, poetic, mythic" }
  ];
  return personas[id % personas.length];
};