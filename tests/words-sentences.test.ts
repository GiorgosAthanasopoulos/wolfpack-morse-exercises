import { test, expect } from '@playwright/test';

test('expect words-sentences to have nav bar', async ({ page }) => {
	await page.goto('/words-sentences');
	await expect(
		page.getByRole('navigation').getByRole('link', { name: 'Words/Sentences' })
	).toBeVisible();
});

test('expect words-sentences to have h1', async ({ page }) => {
	await page.goto('/words-sentences');
	await expect(page.getByRole('heading', { name: 'Words/Sentences' })).toBeVisible();
});

test('expect words-sentences to have img', async ({ page }) => {
	await page.goto('/words-sentences');
	await expect(page.getByAltText('Under Construction')).toBeVisible();
});

test('expect words-sentences to have link', async ({ page }) => {
	await page.goto('/words-sentences');
	await expect(page.getByText('Website Source Code')).toBeVisible();
});

test('expect words-sentences to have button', async ({ page }) => {
	await page.goto('/words-sentences');
	await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible();
});
