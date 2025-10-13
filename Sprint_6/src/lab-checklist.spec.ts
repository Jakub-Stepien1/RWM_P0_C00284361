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

test('Checklist determinism and edge cases', async ({ page }) => {
  await page.goto('http://localhost:5173/lab/checklist');

  const checkboxes = page.locator('input[type="checkbox"]');
  const counter = page.locator('p');
  const submitButton = page.locator('button');

  // Step 1: Check 2 and submit (40%)
  await checkboxes.nth(0).check();
  await checkboxes.nth(1).check();
  await submitButton.click();
  await expect(counter).toContainText('2/5 (40%)');

  // Step 2: Change selection (uncheck one, check two others)
  await checkboxes.nth(0).uncheck();
  await checkboxes.nth(2).check();
  await checkboxes.nth(3).check();
  await submitButton.click();
  await expect(counter).toContainText('3/5 (60%)');

  // Step 3: All checked → Submit → 100%
  for (let i = 0; i < 5; i++) await checkboxes.nth(i).check();
  await submitButton.click();
  await expect(counter).toContainText('5/5 (100%)');

  // Step 4: None checked → Submit → 0%
  for (let i = 0; i < 5; i++) await checkboxes.nth(i).uncheck();
  await submitButton.click();
  await expect(counter).toContainText('0/5 (0%)');
});