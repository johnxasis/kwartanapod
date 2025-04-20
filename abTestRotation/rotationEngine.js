// Live A/B logic to rotate CTAs, hooks, and prompt sets
module.exports = function rotateVariants(variants, performance) {
  const ranked = variants.sort((a, b) => b.ctr - a.ctr);
  return ranked[0]; // return best performer
};