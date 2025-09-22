import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { Search } from "../components/search/Search";

vi.mock("use-debounce", () => ({
  useDebouncedCallback: (fn: unknown) => fn,
}));

const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.search}</div>;
};

describe("Search component", () => {
  it("renders input with placeholder", () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it("updates search param when typing", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Search />
        <LocationDisplay />
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(/search/i);
    await user.type(input, "pikachu");

    await waitFor(() => {
      expect(screen.getByTestId("location")).toHaveTextContent(
        "?search=pikachu&page=1"
      );
    });
  });

  it("clears search param when clicking clear button", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/?search=pikachu"]}>
        <Search />
        <LocationDisplay />
      </MemoryRouter>
    );

    const clearButton = screen.getByRole("button");
    await user.click(clearButton);

    await waitFor(() => {
      expect(screen.getByTestId("location")).toHaveTextContent("?page=1");
    });

    const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    expect(input.value).toBe("");
  });
});
