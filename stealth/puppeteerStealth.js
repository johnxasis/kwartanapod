
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const proxyChain = require('proxy-chain');

puppeteer.use(StealthPlugin());

async function launchStealthBrowser(proxyUrl) {
  const anonymizedProxy = await proxyChain.anonymizeProxy(proxyUrl);
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--proxy-server=${anonymizedProxy}`],
    defaultViewport: null
  });
  return browser;
}

module.exports = launchStealthBrowser;
