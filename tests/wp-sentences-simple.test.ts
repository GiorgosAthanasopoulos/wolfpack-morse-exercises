import {test, expect} from '@playwright/test';

test('expect wp-sentences-simple to have nav bar', async ({page}) => {
    await page.goto('/wp-sentences-simple')
    await expect(page.getByText('Numbers')).toBeVisible()
})

test('expect wp-sentences-simple to have h1', async ({page}) => {
    await page.goto('/wp-sentences-simple')
    await expect(page.getByRole('heading', { name: 'WP Sentences (simple)' })).toBeVisible()
})

test('expect wp-sentences-simple to have img', async ({page}) => {
    await page.goto('/wp-sentences-simple')
    await expect(page.getByAltText('Under Construction')).toBeVisible()
})

test('expect wp-sentences-simple to have link', async ({page}) => {
    await page.goto('/wp-sentences-simple')
    await expect(page.getByText('Website Source Code')).toBeVisible()
})

test('expect wp-sentences-simple to have button', async ({page}) => {
    await page.goto('/wp-sentences-simple')
    await expect(page.getByAltText('Buy Me A Coffee')).toBeVisible()
})