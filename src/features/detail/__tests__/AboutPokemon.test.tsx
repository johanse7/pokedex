import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutPokemon } from "../components";
import type { PokemonTypeKey } from "@/helpers";

describe("AboutPokemon", () => {
  const baseProps = {
    weight: 60,
    height: 1.7,
    type: "fire" as PokemonTypeKey,
  };

  it("renders the section with aria-label", () => {
    render(<AboutPokemon {...baseProps} />);
    expect(screen.getByLabelText("about-pokemon")).toBeInTheDocument();
  });

  it("renders weight and height correctly", () => {
    render(<AboutPokemon {...baseProps} />);
    expect(screen.getByText("60 Kg")).toBeInTheDocument();
    expect(screen.getByText("1.7 m")).toBeInTheDocument();
  });

  it("renders moves when provided", () => {
    render(<AboutPokemon {...baseProps} moves={["tackle", "ember"]} />);
    expect(screen.getByText("tackle")).toBeInTheDocument();
    expect(screen.getByText("ember")).toBeInTheDocument();
  });

  it("does not render moves section when moves are empty", () => {
    render(<AboutPokemon {...baseProps} moves={[]} />);
    expect(screen.queryByText("Moves")).not.toBeInTheDocument();
  });

  it("renders description without control characters", () => {
    render(
      <AboutPokemon
        {...baseProps}
        description={"This is a test\fdescription"}
      />
    );
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });
});
