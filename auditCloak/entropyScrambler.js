// Hides bot fingerprints, payment links, referral trails
module.exports = function cloakMeta(meta) {
  meta.domain = meta.domain.split('').reverse().join('');
  meta.tracking = false;
  return meta;
};