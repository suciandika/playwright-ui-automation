import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://yourdomain.com/mentoring',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10_000,
    screenshot: 'only-on-failure',
  },
});