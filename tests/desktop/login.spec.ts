import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login.page';

test.describe('Login Flow', () => {
  const user = {
    email: 'test@test.mm',
    password: 'asdfghjk',
  };

    test('User Login Flow', async ({ page }) => {
    const login = new LoginPage(page);
    await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

    await login.navigateToLoginPage();
    await expect(page).toHaveURL(/\/sign-in\?returnUrl=.*$/);
  });
});
