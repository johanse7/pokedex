import { expect, test } from "@playwright/test";

test.describe("PokemonPage E2E", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pokemon");
  });

  test("renders search and sort controls", async ({ page }) => {
    await expect(page.getByPlaceholder("Search")).toBeVisible();
    await expect(page.getByRole("button")).toBeVisible();
  });

  test("shows empty state when no pokemons match", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search");
    await searchInput.fill("invalidPokemonName");
    await searchInput.press("Enter");

    await expect(page.getByLabel("Empty state")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "No content available" })
    ).toBeVisible();
  });

  test("renders pokemon list when results are available", async ({ page }) => {
    const searchInput = page.getByPlaceholder("Search");
    await searchInput.fill("bulbasaur");
    await searchInput.press("Enter");

    const list = page.getByRole("list");
    await expect(list).toBeVisible();

    const items = list.getByRole("listitem");
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("renders pagination when multiple pages exist", async ({ page }) => {
    const pagination = page.getByRole("navigation", {
      name: "pagination",
    });

    if (await pagination.count()) {
      await expect(pagination).toBeVisible();
      const buttons = pagination.getByRole("button");
      expect(await buttons.count()).toBeGreaterThan(1);

      await pagination.getByRole("button", { name: "2" }).click();
      await expect(page).toHaveURL(/page=2/);
    }
  });
});
