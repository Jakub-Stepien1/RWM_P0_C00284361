import { test, expect } from '@playwright/test';

test('Checklist page shows Progress Checklist title', async ({ page }) => {
    await page.goto('http://localhost:5173/lab/checklist');
    const title = page.getByTestId('title');
    await expect(title).toHaveText('Progress Checklist');
});

test('Checklist page shows done count when toggled', async ({ page }) => {
    await page.goto('http://localhost:5173/lab/checklist');
    const counter = page.locator('p');
    const checkboxes = page.locator('input[type="checkbox"]');
    const total = await checkboxes.count();

    await expect(counter).toContainText(`0/${total} done`);

    // check all boxes one by one
    for (let i = 0; i < total; i++) {
        const box = checkboxes.nth(i);
        await box.check();
        await expect(counter).toContainText(`${i + 1}/${total} done`);
    }

    // uncheck all boxes one by one
    for (let i = total - 1; i >= 0; i--) {
        const box = checkboxes.nth(i);
        await box.uncheck();
        await expect(counter).toContainText(`${i}/${total} done`);
    }
});