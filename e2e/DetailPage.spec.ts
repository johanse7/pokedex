import { test, expect } from "@playwright/test";

test.describe("DetailPage", () => {
  test("should render pokemon details correctly", async ({ page }) => {
    await page.goto("/pokemon/1");

    const header = page.getByRole("heading", { level: 1 });
    await expect(header).toBeVisible();

    const slider = page.getByRole("region", { name: /slider/i });
    await expect(slider).toBeVisible();

    const typesList = page.getByRole("list", { name: /pokemon types/i });
    await expect(typesList).toBeVisible();

    await expect(page.getByRole("heading", { name: /about/i })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /base stats/i })
    ).toBeVisible();
  });

  test("should redirect to home if pokemon does not exist", async ({
    page,
  }) => {
    await page.goto("/pokemon/99999");
    await expect(page).toHaveURL("/");
  });
});
