import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async clicknth(locator: string,count : number) {
    await this.page.locator(locator).nth(count).click();
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator: string) {
    return await this.page.locator(locator).textContent();
  }

  async IsVisible(locator: string) {
    return await this.page.locator(locator).isVisible();
  }

  async getTitle() {
    return await this.page.title();
  }




}