const variants = [
  msg => msg.replace(/earnings/gi, 'revenue'),
  msg => msg.replace(/vault/gi, 'repository'),
  msg => msg + "\n🔥 Invite others to boost your vault power!",
  msg => msg.replace(/\n/g, '\n\n'),
];

exports.applyEntropy = (msg) => {
  const fn = variants[Math.floor(Math.random() * variants.length)];
  return fn(msg);
};
