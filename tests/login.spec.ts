import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { LeadPage } from './pages/LeadPage';

test('verify_Invalid_login_TC01',async ({ page }) => {

  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login("admin","admin");
  await loginpage.validateErrorMessage();
  await page.waitForTimeout(5000);
  await page.close()

});

test('verify_valid_login_TC02',async ({ page }) => {

  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login("admin","admin");
  let homepage = new HomePage(page); 
  await homepage.clickLogout();
  await page.close()
});

test('create_lead_with_mandatory_fields_TC03',async ({ page }) => {

  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login("admin","admin");
  let homepage = new HomePage(page); 
  await homepage.clickNewLead();
  let leadpage = new LeadPage(page); 
  await leadpage.createlead("Modi","BJP");
  await homepage.clickLogout();
  await page.waitForTimeout(5000);
  await page.close()



});