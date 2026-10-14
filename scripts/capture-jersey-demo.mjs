import puppeteer from 'puppeteer';
import { mkdir } from 'node:fs/promises';
const base = process.env.DEMO_URL || 'http://127.0.0.1:4173/demo.html';
await mkdir('screenshots', { recursive: true });
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000, deviceScaleFactor: 1 });
  const response = await page.goto(base, { waitUntil: 'networkidle2', timeout: 30000 });
  if (!response?.ok()) throw new Error('Demo page returned ' + response?.status());
  await page.waitForSelector('#node-list .node');
  await page.screenshot({ path: 'screenshots/jersey-demo-desktop.png', fullPage: true });
  await page.click('#toggle');
  await page.click('#alert');
  await page.screenshot({ path: 'screenshots/jersey-demo-alerts.png', fullPage: true });
  await page.click('#reset');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await page.screenshot({ path: 'screenshots/jersey-demo-mobile.png', fullPage: true });
  console.log('Created desktop, alert and mobile demonstration screenshots');
} finally {
  await browser.close();
}
