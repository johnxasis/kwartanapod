// GPT education layer that trains + indoctrinates
module.exports = function getLesson(level) {
  const lessons = {
    1: "What is a Clone? Why prompt = power.",
    2: "How to trigger evolution inside the Swarm.",
    3: "How to build infinite funnels using Codex logic.",
    4: "When to deploy versus when to replicate."
  };
  return lessons[level] || "Awaiting revelation...";
};