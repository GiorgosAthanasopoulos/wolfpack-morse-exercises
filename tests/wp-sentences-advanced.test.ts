import { expect, test } from '@playwright/test';

test('expect wp-sentences-advanced to have nav bar', async ({ page }) => {
	await page.goto('/wp-sentences-advanced');
	await expect(page.getByText('Alphabet')).toBeVisible();
});

test('expect wp-sentences-advanced to have h1', async ({ page }) => {
	await page.goto('/wp-sentences-advanced');
	await expect(page.getByRole('heading', { name: 'WP Sentences (advanced)' })).toBeVisible();
});

test('expect wp-sentences-advanced to have img', async ({ page }) => {
	await page.goto('/wp-sentences-advanced');
	await expect(page.getByAltText('Under Construction')).toBeVisible();
});

test('expect wp-sentences-advanced to have link', async ({ page }) => {
	await page.goto('/wp-sentences-advanced');
	await expect(page.getByText('Website Source Code')).toBeVisible();
});

test('expect wp-sentences-advanced to have button', async ({ page }) => {
	await page.goto('/wp-sentences-advanced');
	await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible();
});
