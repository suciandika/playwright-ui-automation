import { test, expect } from '@playwright/test';
import { SearchMentorPage } from '../page/search-results-mentor.page';

test.describe('Mentor Detail Page', () => {
  const user = {
    email: 'test@test.mm',
    password: 'asdfghjk',
  };

  test('Navigate Mentor Detail Page', async ({ page }) => {
    const detailPage = new SearchMentorPage(page);
    await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app');

    await detailPage.navigateToSearchMentorPage();
    await expect(page).toHaveURL(/\/mentoring$/);    
  });
})