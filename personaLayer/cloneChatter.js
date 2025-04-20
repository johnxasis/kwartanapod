// Clones talk to each other in public spaces
module.exports = function interact(caller, target, praise) {
  return `${caller} to ${target}: "${praise}"`;
};