import { test, expect } from '@playwright/test';
import { RegisterPage } from '../page/register.page';

test.describe('Register Page', () => {
  const user = {
    email: 'test@test.mm',
    password: 'asdfghjk',
  };

  test('Navigate Sign Up page', async ({ page }) => {
    const register = new RegisterPage(page);
    await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

    await register.navigateToRegisterPage();
    await expect(page).toHaveURL(/\/sign-up$/);      
  });
})
