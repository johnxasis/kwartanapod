// Simulates clone swarm engaging with a FB group post
module.exports = function groupEngage(message) {
  const responses = [
    "Amen!",
    "This changed my day.",
    "Thank you for your boldness.",
    "So powerful. We need more truth like this.",
    "I shared this with 3 people already.",
    "I was crying reading this. 🙏"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};