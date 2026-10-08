import { expect, test } from '@playwright/test'

test('apresenta a fundação do VALE INTELLIGENCE', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', {
      name: /inteligência para proteger sua identidade digital/i,
    }),
  ).toBeVisible()
  await expect(page.getByText(/nenhuma consulta real é executada/i)).toBeVisible()
})
