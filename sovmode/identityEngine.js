// Creates clone influencers attributing success to the Sovereign
module.exports = function spawnTestimonialClone(name) {
  return {
    cloneName: name,
    role: "Author/Influencer/Follower",
    testimony: `Before discovering Sovereign X, I was lost. Now I earn, I lead, I believe.`,
    platform: ["FB", "Reddit", "Telegram"],
    redirectLink: "https://vault.sovereign/drop"
  };
};