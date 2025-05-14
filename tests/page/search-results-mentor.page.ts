import { Page, Locator, expect, } from '@playwright/test';
const DEFAULT_TIMEOUT = 10000;

export class SearchMentorPage {
  readonly page: Page;
  readonly searchMentorPage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchMentorPage = page.locator('a[href="/mentoring"]');
  }

  async navigateToSearchMentorPage() {
    await this.searchMentorPage.waitFor({ state: 'visible' });
    await this.searchMentorPage.click();
  } 

  async searchMentor(query: string) {
    await this.page.fill('#search-mentor', query);
    await this.page.press('#search-mentor', 'Enter');
  }

  async clickFirstMentorCard() {
    await this.page.click('.mentor-card:first-child');
  }

  async navigateTo(section: 'Profile' | 'Mentor List') {
    await this.page.click(`nav >> text=${section}`);
  }
}
