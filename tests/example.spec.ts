import { test } from '@playwright/test';
test('my first test', async ({ page }) => {
  await page.goto('http://localhost:5173/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('test@gmail.com');
  await page.getByTestId('email-input').press('Tab');
  await page.getByTestId('password-input').fill('1234');
  await page.getByTestId('login-btn').click();
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Actions' }).click();
  await page.getByRole('menuitem', { name: 'List page' }).click();
  await page.goto('http://localhost:5173/list');
  await page.getByPlaceholder('Filter a product').click();
  await page.getByPlaceholder('Filter a product').fill('d');
});
