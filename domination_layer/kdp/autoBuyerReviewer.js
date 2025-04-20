// Automates purchase and review of KDP books
const puppeteer = require('puppeteer');
module.exports = async function reviewBook(bookURL, amazonLogin, reviewText, proxy) {
  const browser = await puppeteer.launch({ args: [`--proxy-server=${proxy}`] });
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com/ap/signin');
  await page.type('#ap_email', amazonLogin.email);
  await page.click('#continue');
  await page.type('#ap_password', amazonLogin.password);
  await page.click('#signInSubmit');
  await page.waitForNavigation();
  await page.goto(bookURL);
  const buyBtn = await page.$x("//input[@id='buy-now-button']");
  if (buyBtn.length) await buyBtn[0].click();
  await page.waitForTimeout(3000);
  await page.goto('https://www.amazon.com/review/create-review');
  await page.type('textarea[name=review-text]', reviewText);
  await page.click('input[name=submit-button]');
  await browser.close();
};