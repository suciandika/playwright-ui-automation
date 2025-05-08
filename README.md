# playwright-ui-automation

This project contains automated tests for the Dealls web application using Playwright.

## Project structure
```
tests/
├── pages/                   # Page Object Models
│   ├── base/                # Base page objects with shared functionality
│   ├── desktop/             # Desktop-specific page implementations
├── utils/                   # Shared utilities and helpers
├── desktop/                 # Desktop-specific test specs
```

## Setup
📦 Install dependencies

npm install

🚀 Run tests
'''bash
#All test 
npx playwright test

#Specific test 
npx playwright test tests/desktop/listing/filters.spec.ts

#with headed browser
npx playwright test --headed

#by project/device
npx playwright test --project="Desktop Chrome"

#test report
npx playwright show-report

#env/custom variable
ENV=production npx playwright test
'''

🛠 Playwright config file
playwright.config.ts
