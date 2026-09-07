import { test, expect } from '@playwright/test';

test('Global sync', async ({ page }) => {
  
    test.setTimeout(12000);
    await page.goto('http://localhost:100');
    await page.click('text=Login');
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin');
    await page.waitForTimeout(2000);
    await page.click('text=Submit');
    await expect(page.locator('text=Welcome, admin')).toBeVisible();

await expect(page.locator('text=Welcome, admin')).toBeVisible({ timeout: 1000 });
});

test.only('Hard vs Soft Assert', async ({ page }) => {     
   await page.goto('http://localhost:100');
   await page.locator("//input[@name='user_name']").fill('admin');
   await page.locator("//input[@name='user_password']").fill('admin');
   await page.locator("//input[@name='Login']").click();
   await page.waitForTimeout(3000);

   await expect.soft(page.locator("//a[text()='Logout125']")).toBeVisible();
   await expect.soft(page.locator("//a[text()='Home']").nth(0)).toBeVisible();
   await expect.soft(page.locator("//a[text()='Leads']").nth(0)).toBeVisible();
})