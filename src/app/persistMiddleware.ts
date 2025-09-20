import type { Middleware } from "@reduxjs/toolkit";

const PERSIST_KEY = "pokedex_state";

export function loadState() {
  try {
    const serializedState = localStorage.getItem(PERSIST_KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
}

export function createPersistMiddleware(slices: string[]): Middleware {
  return (store) => (next) => (action) => {
    const result = next(action);

    const state = store.getState();
    const persistedState: Record<string, unknown> = {};

    slices.forEach((slice) => {
      if (state[slice]) {
        persistedState[slice] = state[slice];
      }
    });

    localStorage.setItem(PERSIST_KEY, JSON.stringify(persistedState));

    return result;
  };
}
