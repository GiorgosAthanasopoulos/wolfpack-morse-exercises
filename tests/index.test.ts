import { expect, test } from '@playwright/test';

test('expect index to have nav bar', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('navigation').getByRole('link', { name: 'Syntax' })).toBeVisible();
});

test('expect index to have h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Wolfpack Morse Exercises' })).toBeVisible();
});

test('expect index to have link', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Website Source Code')).toBeVisible();
});

test('expect index to have img', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible();
});

test('expect index to have button', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByAltText('Specifics')).toBeVisible();
});

test('expect index to have footnote', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('[1]')).toBeVisible();
});
