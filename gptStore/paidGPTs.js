// Host micro-GPTs and route Stripe/USDT/PayPal payments
module.exports = [
  { name: "NSFW Prompt Generator", price: "$12", type: "one-time", endpoint: "/gpt/nsfw" },
  { name: "AI Ebook Builder", price: "$25", type: "monthly", endpoint: "/gpt/ebook" }
];
