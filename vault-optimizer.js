const vault = require('./vault-data');
const Redis = require('ioredis');
require('dotenv').config();

const redis = new Redis(process.env.UPSTASH_REDIS_REST_URL, {
  password: process.env.UPSTASH_REDIS_REST_TOKEN,
});

function getSegment(referrals, lastSeenDiff) {
  if (referrals >= 3) return 'super-referrer';
  if (lastSeenDiff > 2) return 're-engage';
  if (referrals === 0) return 'cold';
  return 'base';
}

const segmentOffers = {
  'cold': vault.offers.slice(0, 1),
  'base': vault.offers.slice(0, 2),
  'super-referrer': vault.offers.concat([
    {
      title: "🧠 GPT Master Agency Vault",
      link: "https://gumroad.com/l/agency?ref=YOUR_AFFILIATE_ID",
      description: "Deploy white-label GPT services with massive margins.",
      payout: "$49 per license"
    }
  ]),
  're-engage': [
    {
      title: "🔥 1-Click GPT Clone Launcher",
      link: "https://gumroad.com/l/clone?ref=YOUR_AFFILIATE_ID",
      description: "Launch a money-making clone in 3 mins. Auto-scaling bot included.",
      payout: "$29 per sale"
    }
  ]
};

module.exports = async function getVaultOffers(userId) {
  const referrals = parseInt(await redis.get(`user:${userId}:referrals`) || '0', 10);
  const lastSeen = parseInt(await redis.get(`user:${userId}:lastVisit`) || Date.now(), 10);
  const lastSeenDiff = Math.floor((Date.now() - lastSeen) / (1000 * 60 * 60 * 24));

  const segment = getSegment(referrals, lastSeenDiff);
  return segmentOffers[segment] || vault.offers;
}
