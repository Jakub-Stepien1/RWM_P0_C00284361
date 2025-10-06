import { test, expect } from '@playwright/test';

test('Checklist page shows correct heading', async ({ page }) => {
    await page.goto('http://localhost:5173/lab/checklist');
    const title = page.getByTestId('title');
    await expect(title).toHaveText('Progress Checklist');
});