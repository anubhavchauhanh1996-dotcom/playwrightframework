import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:100/');
  await page.locator('input[name="user_name"]').click();
  await page.locator('input[name="user_name"]').fill('admin');
  await page.locator('input[name="user_name"]').press('Tab');
  await page.locator('input[name="user_password"]').fill('admin');
  await page.locator('select[name="login_theme"]').selectOption('orange');
  await expect.soft(page.getByRole('img').nth(2)).toBeVisible();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#tabcontent').getByRole('link', { name: 'Leads' }).click();
  await page.getByRole('link', { name: 'New Lead' }).click();
  await page.locator('input[name="lastname"]').click();
  await page.locator('input[name="lastname"]').fill('Modi');
  await page.locator('input[name="lastname"]').press('ArrowDown');
  await page.locator('input[name="lastname"]').press('Tab');
  await page.locator('input[name="mobile"]').press('Tab');
  await page.locator('input[name="company"]').fill('BJP');
  await page.locator('input[name="company"]').press('Tab');
  await page.locator('input[name="fax"]').press('Tab');
  await page.locator('input[name="designation"]').press('Tab');
  await page.locator('input[name="email"]').press('Tab');
  await page.getByRole('button', { name: 'Save' }).first().click();
  await expect.soft(page.locator('td').filter({ hasText: /^Rajnikant$/ })).toBeVisible();
});