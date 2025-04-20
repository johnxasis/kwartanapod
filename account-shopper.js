const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function buyAgedTelegramAccount() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  try {
    await page.goto('https://accsmarket.com', { waitUntil: 'networkidle2' });

    // Simulate login (you must use real credentials securely if running)
    await page.type('#email', process.env.ACCS_EMAIL, { delay: 80 });
    await page.type('#password', process.env.ACCS_PASS, { delay: 80 });
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    // Navigate to Telegram aged accounts
    await page.goto('https://accsmarket.com/accounts/telegram', { waitUntil: 'networkidle2' });

    // Select first available account and simulate purchase
    await page.click('.buy-account');
    console.log("🛒 Telegram account purchase simulated.");
  } catch (err) {
    console.error("⚠️ Failed to auto-buy aged account:", err);
  } finally {
    await browser.close();
  }
}

buyAgedTelegramAccount();
