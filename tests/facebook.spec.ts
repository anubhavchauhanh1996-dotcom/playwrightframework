import { test, expect } from '@playwright/test';



test('Orange HRM Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //await page.getByPlaceholder("Username").fill("Admin");
  //await page.getByPlaceholder("Password").fill("admin123"); 
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@type='password']").fill("admin123");
  await page.locator("//*[@type='submit']").click(); 
  
});

test('Invalid Facebook login', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  await page.locator("//input[@name='email']").fill("admin@gmail.com");
  await page.locator("//input[@name='pass']").fill("admin123");
  await page.locator("//*[@aria-label='Log in']").click(); 
  
});

test('Search Iphone on Amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone");
  await page.locator("//input[@id='nav-search-submit-button']").click();
 
  
});
