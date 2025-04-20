// Automates subscription to a Facebook profile using Puppeteer + Proxy
const puppeteer = require('puppeteer');
module.exports = async function autoSubscribeFacebook(profileURL, fbLogin, proxy) {
  const browser = await puppeteer.launch({ args: [`--proxy-server=${proxy}`] });
  const page = await browser.newPage();
  await page.goto('https://facebook.com/login');
  await page.type('#email', fbLogin.email);
  await page.type('#pass', fbLogin.password);
  await page.click('button[name=login]');
  await page.waitForNavigation();
  await page.goto(profileURL);
  const subBtn = await page.$x("//span[contains(text(), 'Subscribe') or contains(text(), 'Follow')]");
  if (subBtn.length) await subBtn[0].click();
  await browser.close();
};