import { Page, Locator, expect, } from '@playwright/test';
const DEFAULT_TIMEOUT = 10000;

export class MentorDetailPage {
    readonly page: Page;
    readonly mentorCard: Locator;


    constructor(page: Page) {
        this.page = page;

        this.mentorCard = page.locator('a[href^="/mentoring/"]:not([href="/mentoring"])').first();
    }

    async navigateToMentorDetailPage() {
        await this.mentorCard.waitFor({ state: 'visible' });
        await this.mentorCard.click();
    }
}