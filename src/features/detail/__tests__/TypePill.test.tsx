import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { getTypeClass } from "@/helpers";
import { TypePill } from "../components";

vi.mock("@/helpers", () => ({
  getTypeClass: vi.fn().mockReturnValue("mocked-class"),
}));

describe("TypePill", () => {
  it("renders the type text", () => {
    render(<TypePill type="fire" />);
    expect(screen.getByText("fire")).toBeInTheDocument();
  });

  it("applies the class returned by getTypeClass", () => {
    render(<TypePill type="water" />);
    const pill = screen.getByText("water");
    expect(pill).toHaveClass("mocked-class");
    expect(getTypeClass).toHaveBeenCalledWith("water");
  });
});
