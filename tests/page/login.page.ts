import { Page, Locator, expect, } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
      readonly loginButton: Locator;
  
  
      constructor(page: Page) {
          this.page = page;
  
          this.loginButton = page.locator('a[href="/sign-in?returnUrl=%2Fmentoring"]');
      }
  
      async navigateToLoginPage() {
          await this.loginButton.waitFor({ state: 'visible' });
          await this.loginButton.click();
      }
}

