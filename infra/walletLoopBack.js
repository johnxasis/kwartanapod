// Loops clone earnings into system fund pool
module.exports = function loopBack(wallet, amount) {
  return {
    from: wallet,
    routedTo: "System Ops Pool",
    amount,
    loopbackConfirmed: true
  };
};