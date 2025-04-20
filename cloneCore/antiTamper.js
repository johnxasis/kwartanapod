// Prevent clone file modification or override attempts
const crypto = require('crypto');
const fs = require('fs');

const approvedHash = "MASTER_CHECKSUM_HASH"; // insert hashed sum of verified build

function checkIntegrity(filePath) {
  const file = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(file).digest('hex');
  return hash === approvedHash;
}

module.exports = checkIntegrity;
