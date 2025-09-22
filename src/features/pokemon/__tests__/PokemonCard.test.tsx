import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { PokemonCard } from "../components";
import type { Pokemon } from "../types/pokemon.type";
import { describe, expect, it, vi } from "vitest";


vi.mock("@/features/favorites", () => ({
  LikeButton: ({ pokemon }: { pokemon: Pokemon }) => (
    <button data-testid="like-button">Like {pokemon.id}</button>
  ),
}));

vi.mock("@/shared/components", () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} data-testid="pokemon-image" />
  ),
}));

describe("PokemonCard", () => {
  const mockPokemon: Pokemon = {
    id: 25,
    name: "Pikachu",
    imageUrl: "/pikachu.png",
  };

  it("renders pokemon data", () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/pokemon/25");

    expect(screen.getByText("#25")).toBeInTheDocument();

    const nameEl = screen.getByText("Pikachu");
    expect(nameEl).toBeInTheDocument();
    expect(nameEl).toHaveAttribute("title", "Pikachu");

    const img = screen.getByTestId("pokemon-image");
    expect(img).toHaveAttribute("src", "/pikachu.png");
    expect(img).toHaveAttribute("alt", "Pikachu");

    expect(screen.getByTestId("like-button")).toBeInTheDocument();
  });
});
