import { test, expect } from '@playwright/test';
import {url} from '../utilities/methods'
import {Calc} from '../utilities/calc'

test('has title', async ({ page }) => {
  await page.goto(url);
  const c = new Calc()
  console.log(c.sum(2,3))



  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('this is first test',async ({ page }) => {

  await page.goto('http://localhost:100');
  await expect(page).toHaveTitle('vtiger CRM - Commercial Open Source CRM');
  await expect(page).toHaveTitle(/vtiger CRM/);
  await page.locator("//input[@name='user_name']").fill('admin');
  await page.locator("//input[@name='user_password']").fill('admin');
  await page.locator("//input[@name='Login']").click();
  const a = await page.locator("//a[text()='Logout']").textContent();
  console.log(a)
  await expect(a).toBe("Logout");
  await page.close()

});

test('@SMOKE this is first test 2',async ({ page }) => {

  await page.goto('http://localhost:100');
  await expect(page).toHaveTitle('vtiger CRM - Commercial Open Source CRM');
  await expect(page).toHaveTitle(/vtiger CRM/);


  await page.locator("//input[@name='user_name']").fill('admin');
  await page.fill("//input[@name='user_name']","admin");

  
  await page.locator("//input[@name='user_password']").fill('admin');
  await page.locator("//input[@name='Login']").click();
  const a = await page.locator("//a[text()='Logout']").textContent();
  console.log(a)
  await expect(a).toBe("Logout");
  await page.close()

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
