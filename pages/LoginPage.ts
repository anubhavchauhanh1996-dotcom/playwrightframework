import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  private username = "//input[@name='user_name']";
  private password = "//input[@name='user_password']";
  private loginBtn = "//input[@name='Login']";
  private errormsg = "//*[contains(text(),'You must specify a valid username and password.')]"
  private imgLogo = "//img[@src='include/images/vtiger-crm.gif']"

  async login(user: string, pass: string) { 
  await this.fill(this.username,user);
  await this.fill(this.password,pass);
  await this.click(this.loginBtn);
  }

  async validateErrorMessage() {
    return await this.IsVisible(this.errormsg);
  }

  async validatelogo()
  {
    return await this.IsVisible(this.imgLogo);
  }

  




}