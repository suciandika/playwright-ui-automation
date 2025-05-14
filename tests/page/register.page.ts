// import { Page } from '@playwright/test';

// export class RegisterPage {
//   constructor(private page: Page) {}

//   async clickDaftar() {
//     await this.page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
//     await this.page.click('#dealls-navbar-register-btn');
//   }

//   async register(name: string, email: string, password: string) {
//     await this.page.fill('#name', name);
//     await this.page.fill('#email', email);
//     await this.page.fill('#password', password);
//     await this.page.fill('#confirmPassword', password);
//     await this.page.click('button[type="submit"]');
//   }
// }

import { Page, Locator, expect, } from '@playwright/test';
const DEFAULT_TIMEOUT = 10000;

export class RegisterPage {
    readonly page: Page;
    readonly registerButton: Locator;


    constructor(page: Page) {
        this.page = page;

        this.registerButton = page.locator('a[href="/sign-up"]');
    }

    async navigateToRegisterPage() {
        await this.registerButton.waitFor({ state: 'visible' });
        await this.registerButton.click();
    }
}
