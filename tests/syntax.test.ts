import { expect, test } from '@playwright/test';

test('expect syntax to have nav bar', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('Home')).toBeVisible();
});

test('expect syntax to have h1', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByRole('heading', { name: 'Wolfpack Morse Syntax' })).toBeVisible();
});

test('expect syntax to have link', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('Website Source Code')).toBeVisible();
});

test('expect syntax to have button', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible();
});

test('expect syntax to have button2', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('^')).toBeHidden();
});

test('expect syntax to have h2', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('Reports')).toBeVisible();
});

test('expect syntax to have link2', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('Course Determination Guide (by Fox).')).toBeVisible();
});

test('expect syntax to have file link', async ({ page }) => {
	await page.goto('/syntax');
	await expect(page.getByText('Radio_Syntax_Guide.pdf (by Colonel Frost).')).toBeVisible();
});
