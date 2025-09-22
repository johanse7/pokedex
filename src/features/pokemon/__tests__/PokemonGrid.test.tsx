import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { PokemonGrid } from "../components";
import type { Pokemon } from "../types/pokemon.type";

vi.mock("../components/PokemonCard/PokemonCard", () => ({
  PokemonCard: ({ pokemon }: { pokemon: Pokemon }) => (
    <div data-testid="pokemon-card">{pokemon.name}</div>
  ),
}));

describe("PokemonGrid", () => {
  const mockList: Pokemon[] = [
    { id: 1, name: "Bulbasaur", imageUrl: "/bulbasaur.png" },
    { id: 4, name: "Charmander", imageUrl: "/charmander.png" },
    { id: 7, name: "Squirtle", imageUrl: "/squirtle.png" },
  ];

  it("renders empty state when no pokemonList is provided", () => {
    render(
      <MemoryRouter>
        <PokemonGrid pokemonList={[]} />
      </MemoryRouter>
    );

    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
    expect(screen.queryByTestId("pokemon-card")).not.toBeInTheDocument();
  });

  it("renders all PokemonCards when pokemonList is provided", () => {
    render(
      <MemoryRouter>
        <PokemonGrid pokemonList={mockList} />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId("pokemon-card");
    expect(cards).toHaveLength(mockList.length);

    mockList.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    });
  });
});
