// Creates clone with self-destruct countdown
module.exports = function spawnEphemeral(name, hours) {
  return {
    brand: name,
    expiresIn: `${hours}h`,
    stealth: true,
    autoWipe: true
  };
};