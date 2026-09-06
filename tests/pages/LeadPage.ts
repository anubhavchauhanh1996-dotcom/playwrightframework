import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LeadPage extends BasePage {

  private lastname = "//input[@name='lastname']";
  private company = "//input[@name='company']";
  private saveButton = "//input[@name='button']";


  async createlead(lname: string, comp: string) { 
  await this.fill(this.lastname,lname);
  await this.fill(this.company,comp);
  await this.clicknth(this.saveButton,0);
  }

  

  




}