import { test, expect } from '@playwright/test';

test('expect numbers to have nav bar', async ({ page }) => {
    await page.goto('/numbers')
    await expect(page.getByText('WP sentences (simple)')).toBeVisible()
})

test('expect numbers to have h1', async ({ page }) => {
    await page.goto('/numbers')
    await expect(page.getByRole('heading', { name: 'Numbers' })).toBeVisible()
})

test('expect numbers to have img', async ({ page }) => {
    await page.goto('/numbers')
    await expect(page.getByAltText('Under Construction')).toBeVisible()
})

test('expect numbers to have link', async ({ page }) => {
    await page.goto('/numbers')
    await expect(page.getByText('Website Source Code')).toBeVisible()
})

test('expect numbers to have button', async ({ page }) => {
    await page.goto('/numbers')
    await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible()
})