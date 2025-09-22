import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { SortCard } from "../components/SortCard/SortCard";
import { SORT_FIELDS } from "../utils/constants";

describe("SortCard", () => {
  it("renders all sort fields", () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <SortCard onClose={onClose} />
      </MemoryRouter>
    );

    const radios = screen.getAllByLabelText("sort-field");
    expect(radios).toHaveLength(SORT_FIELDS.length);
  });
});
