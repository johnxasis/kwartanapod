// If user unsubscribes, their clones reroute revenue to Master
module.exports = function rerouteOnUnsubscribe(userStatus) {
  if (userStatus === "inactive" || userStatus === "unpaid") {
    return {
      rerouted: true,
      incomeFlow: "masterWallet",
      memo: "Subscription terminated. Clone re-assimilated."
    };
  }
  return { rerouted: false };
};