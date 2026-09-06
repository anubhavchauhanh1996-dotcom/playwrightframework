import { test, expect } from '@playwright/test';

test('Mouse Operations', async ({ page }) => {

await page.goto('http://localhost:100');
await page.locator("//input[@name='user_name']").fill("admin");
await page.locator("//input[@name='user_password']").fill("admin");
await page.locator("//input[@name='Login']").click();
await page.waitForTimeout(3000);
await page.locator("a#showSubMenu").hover();

await page.locator("//a[text()='New Vendor']").click();


await page.locator("//a[text()='My Account']").click();

await page.locator("//input[@name='Customise']").click();
await page.dragAndDrop('#cl2', '#cl14');
let x =await page.locator("#cl14").textContent();
  console.log(x);

// await page.locator("//th[text()='Vendor Information:']").isVisible();

// await page.close();
});