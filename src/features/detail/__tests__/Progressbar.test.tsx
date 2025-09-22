import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProgressBar } from "../components";


describe("ProgressBar", () => {
  it("renders progress bar container", () => {
    render(<ProgressBar value={40} type="fire" />);
    const container = screen.getByRole("progressbar");
    expect(container).toBeInTheDocument();
  });

  it("applies correct width based on value", () => {
    render(<ProgressBar value={75} type="water" />);
    const fill = screen.getByRole("progressbar-percent");
    expect(fill).toHaveStyle({ width: "75%" });
  });

  it("applies background color based on type", () => {
    render(<ProgressBar value={50} type="grass" />);
    const fill = screen.getByRole("progressbar-percent");
    expect(fill.style.backgroundColor).toContain("var(--color-type-grass)");
  });
});