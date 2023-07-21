import { test, expect } from '@playwright/test';

test('expect syntax to have nav bar', async ({ page }) => {
    await page.goto('/alphabet')
    await expect(page.getByText('WP sentences (advanced')).toBeVisible()
})

test('expect syntax to have h1', async ({ page }) => {
    await page.goto('/alphabet')
    await expect(page.getByRole('heading', { name: 'Alphabet' })).toBeVisible()
})

test('expect syntax to have img', async ({ page }) => {
    await page.goto('/alphabet')
    await expect(page.getByAltText('Under Construction')).toBeVisible()
})

test('expect syntax to have link', async ({ page }) => {
    await page.goto('/alphabet')
    await expect(page.getByText('Website Source Code')).toBeVisible()
})

test('expect syntax to have button', async ({ page }) => {
    await page.goto('/alphabet')
    await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible()
})