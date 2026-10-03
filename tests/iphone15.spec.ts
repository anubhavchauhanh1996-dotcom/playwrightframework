import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('button', { name: 'iphone 18 pro' }).click();
  await page.getByLabel('iPhone 18 Pro (1 TB) - Burgundy | 15.93 cm (6.3″) Super Retina XDR Display with ProMotion, A20 Pro Chip, 48MP Fusion Main Camera with Variable Aperture', { exact: true }).click();
  await page.getByRole('button', { name: 'Buy Now' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('wt');
  await page.getByRole('button', { name: 'Continue' }).click();
});