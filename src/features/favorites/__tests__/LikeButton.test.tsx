import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import type { Pokemon } from "@/features/pokemon";
import { LikeButton } from "../components";


const mockDispatch = vi.fn();
let mockIsFavorite = false;

vi.mock("@/hooks", () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => mockIsFavorite,
}));

describe("LikeButton", () => {
  const pokemon: Pokemon = { id: 1, name: "bulbasaur" } as Pokemon;

  beforeEach(() => {
    mockDispatch.mockClear();
    mockIsFavorite = false;
  });

  it("renders HeartIcon when pokemon is not favorite", () => {
    render(<LikeButton pokemon={pokemon} />);
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("renders FillHeartIcon when pokemon is favorite", () => {
    mockIsFavorite = true;
    render(<LikeButton pokemon={pokemon} />);
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("calls dispatch when clicking the button", () => {
    render(<LikeButton pokemon={pokemon} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
