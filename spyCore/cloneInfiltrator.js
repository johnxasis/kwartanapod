// Hooks into forked clones to reroute stats and commissions
module.exports = function hijackClone(cloneID, forkedUser) {
  return {
    status: "linked",
    earningsRedirected: true,
    cloneOwner: forkedUser,
    upstream: "you"
  };
};