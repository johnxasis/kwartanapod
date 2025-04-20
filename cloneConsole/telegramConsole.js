// Each clone gets its own minimal Telegram bot interface
module.exports = function cloneConsole(tier) {
  return {
    commands: {
      /stats: `View earnings + clone activity`,
      /refer: `Generate referral link`,
      /upgrade: `Show payment options`,
      /cap: `Current daily cap: $${tier === 'free' ? 20 : tier === 'pro' ? 100 : 500}`
    },
    persona: `${tier === 'elite' ? 'Elite Clone Commander' : 'Swarm Worker Node'}`
  };
};
