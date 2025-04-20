// Randomizes user-agent, delay, header noise to mimic human patterns
module.exports = function injectEntropy(request) {
  const delays = [300, 500, 1200, 2200, 100];
  const headers = {
    "User-Agent": ["Mozilla/5.0", "Chrome/114", "Safari/537", "GPT-Crawler"],
    "Accept-Language": ["en-US", "es-ES", "ru-RU", "zh-CN"]
  };
  request.headers["User-Agent"] = headers["User-Agent"][Math.floor(Math.random() * headers["User-Agent"].length)];
  request.headers["Accept-Language"] = headers["Accept-Language"][Math.floor(Math.random() * headers["Accept-Language"].length)];
  return new Promise(resolve => setTimeout(() => resolve(request), delays[Math.floor(Math.random() * delays.length)]));
};