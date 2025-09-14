import { test, expect } from '@playwright/test';

test('Truy cập trang web:', async ({ page }) => {
  await page.goto('https://fnb.kiotviet.vn/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Đăng nhập/);
});

test('Truy cập trang:', async ({ page }) => {
  await page.goto('https://fnb.kiotviet.vn/');

  // Click the Quên mật khẩu link.
  await page.getByRole('link', { name: 'Quên mật khẩu' }).click();

  // Expects page to have a heading with the name of Quên mật khẩu.
  await expect(page.getByRole('heading', { name: 'Quên mật khẩu' })).toBeVisible();
});