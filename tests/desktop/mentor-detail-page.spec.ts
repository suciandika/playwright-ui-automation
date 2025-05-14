import { test, expect } from '@playwright/test';
import { MentorDetailPage } from '../page/mentor-detail-page.page';

test.describe('Mentor Detail Page', () => {
  const user = {
    email: 'test@test.mm',
    password: 'asdfghjk',
  };

  test('Navigate Mentor Detail Page', async ({ page }) => {
    const detailPage = new MentorDetailPage(page);
    await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

    await detailPage.navigateToMentorDetailPage();
    await expect(page).toHaveURL(/\/mentoring\/[a-z0-9\-]+$/i);
  });
})