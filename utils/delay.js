exports.simulateDelay = async (ctx) => {
  await ctx.telegram.sendChatAction(ctx.chat.id, 'typing');
  const delay = Math.random() * 2500 + 500;
  return new Promise(resolve => setTimeout(resolve, delay));
};
