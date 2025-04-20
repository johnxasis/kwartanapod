// Detects failed login and retries with new account
const allocator = require('./accountAllocator');

module.exports = function recoverClone(cloneId, lastAccount) {
  allocator.addAccount({ ...lastAccount, failed: true });
  return allocator.allocate(cloneId, "retry-auth");
};