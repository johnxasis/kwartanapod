const getVaultOffers = require('../vault-optimizer');
const { applyEntropy } = require('../utils/entropy');

module.exports = async (req, res) => {
  const userId = req.query.user || 'anon';
  const offers = await getVaultOffers(userId);
  const offerBlocks = offers.map(o => 
    `🔗 *${o.title}*
${o.description}
[Access](${o.link}) | ${o.payout}`
  ).join("\n\n");

  res.status(200).json({
    msg: applyEntropy("🚀 Your dynamic vault is ready:"),
    offers: offerBlocks
  });
};
