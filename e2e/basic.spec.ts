import { expect, test } from '@playwright/test'

// 首页 → 动态路由 → 返回 的核心导航链路（项目为 hash 路由模式）
test('basic nav', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveURL('http://localhost:3333/#/')
  await expect(page.getByText('[Home Layout]')).toBeVisible()

  // 输入名字，点击「确定」跳转动态路由 /hi/Vitesse
  const input = page.getByRole('textbox', { name: 'What\'s your name?' })
  await input.fill('Vitesse')
  await page.getByRole('button', { name: '确定' }).click()

  await expect(page).toHaveURL('http://localhost:3333/#/hi/Vitesse')
  await expect(page.getByText('[Default Layout]')).toBeVisible()
  await expect(page.getByText('hi,Vitesse')).toBeVisible()

  // 「返回」回到首页
  await page.getByRole('button', { name: '返回' }).click()
  await expect(page).toHaveURL('http://localhost:3333/#/')
})

// 空名字时点击「确定」应弹警告且不跳转
test('empty name shows warning and stays', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: '确定' }).click()

  await expect(page).toHaveURL('http://localhost:3333/#/')
  await expect(page.getByText('Please enter your name')).toBeVisible()
})
