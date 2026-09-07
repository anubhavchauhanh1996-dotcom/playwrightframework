import { test, expect } from '@playwright/test';
import { getTestData } from '../utilities/jsonReader';
import { getExcelTestData } from '../utilities/excelReader';
import { getCSVTestData } from '../utilities/csvReader'
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LeadPage } from '../pages/LeadPage';


test('verify_Invalid_login_TC01', async ({ page }) => {
  const data = await getExcelTestData('./testdata/file.xlsx','verify_Invalid_login_TC01');
  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login(data.username,data.password);
  await loginpage.validateErrorMessage();
  await page.waitForTimeout(5000);
  await page.close()

});



test('verify_valid_login_TC02',async ({ page }) => {
const data = await getCSVTestData('./testdata/file.csv','verify_valid_login_TC02');
  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login(data.username,data.password);
  let homepage = new HomePage(page); 
  await homepage.clickLogout();
  await page.close()
});

test('create_lead_with_mandatory_fields_TC03',async ({ page }) => {
const data = await getTestData('create_lead_with_mandatory_fields_TC03');
  let loginpage = new LoginPage(page);  
  await loginpage.navigate("http://localhost:100");
  await loginpage.login(data.username,data.password);
  let homepage = new HomePage(page); 
  await homepage.clickNewLead();
  let leadpage = new LeadPage(page); 
  await leadpage.createlead(data.lastname,data.company);
  await homepage.clickLogout();
  await page.waitForTimeout(5000);

});