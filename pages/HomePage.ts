import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  private lnkNewLead = "//a[text()='New Lead']";
   private lnkLeads = "//a[text()='Leads']";
   private lnkLogout = "//a[text()='Logout']";
  

  async clickNewLead() { 
  await this.click(this.lnkNewLead);
  
  }

  async clickLeads() { 
  await this.click(this.lnkLeads);
  
  }

  async clickLogout() { 
  await this.click(this.lnkLogout);
  
  }

}