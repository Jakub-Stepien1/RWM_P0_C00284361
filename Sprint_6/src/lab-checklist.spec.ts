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
  const submitButton = page.locator('button');

  await expect(counter).toContainText('0/5 (0%)');

  await checkboxes.nth(0).check();
  await checkboxes.nth(1).check();

  await expect(counter).toContainText('0/5 (0%)');

  await submitButton.click();

  await expect(counter).toContainText('2/5 (40%)');

  await checkboxes.nth(2).check();

  await expect(counter).toContainText('2/5 (40%)');

  await submitButton.click();

  await expect(counter).toContainText('3/5 (60%)');
});