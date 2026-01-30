import { test, expect } from '@playwright/test';

const pages = [
    { path: '/', name: 'homepage' },
    { path: '/tours', name: 'tours' },
    { path: '/about', name: 'about' },
    { path: '/holidays', name: 'holidays' }
];

test.describe('Visual QA', () => {
    for (const pageInfo of pages) {
        test(`screenshot ${pageInfo.name}`, async ({ page }) => {
            await page.goto(pageInfo.path);
            // Wait for content (heuristic)
            await page.waitForLoadState('networkidle');

            // Capture full page screenshot
            await expect(page).toHaveScreenshot(`${pageInfo.name}.png`, {
                fullPage: true,
                maxDiffPixelRatio: 0.05 // Allow small rendering diffs
            });
        });
    }
});

test.describe('Verify vs Live', () => {
    // This test visits the live site to gather "truth" snapshots if we want.
    // Ideally we compare Local vs Live.
    // Strategy: Visit Live, verify title. Visit Local, verify title.
    // Visual diffing across environments is flaky, so we stick to visual regression on Local
    // and content checks.

    test('Content Check: Homepage Title Match', async ({ page }) => {
        // Visit Live
        await page.goto('https://slowmotors.vercel.app/');
        const liveTitle = await page.title();

        // Visit Local
        await page.goto('/');
        const localTitle = await page.title();

        // Compare
        expect(localTitle).toBe(liveTitle);

        // Optional: check critical H1 matches
        await page.goto('https://slowmotors.vercel.app/');
        const liveH1 = await page.textContent('h1');

        await page.goto('/');
        const localH1 = await page.textContent('h1');

        expect(localH1).toBe(liveH1);
    });
});
