// Allocates aged accounts to clone tasks as needed
let accountPool = [];

module.exports = {
  addAccount(account) {
    accountPool.push(account);
  },
  allocate(cloneId, task) {
    const acc = accountPool.find(a => !a.assigned);
    if (!acc) return "⚠️ No account available. Trigger purchase.";
    acc.assigned = true;
    acc.task = task;
    acc.assignedTo = cloneId;
    return acc;
  },
  availableCount() {
    return accountPool.filter(a => !a.assigned).length;
  }
};