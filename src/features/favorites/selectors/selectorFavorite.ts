import type { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

const selectFavoritesMap = (state: RootState) => state.favorites.pokemonList;

export const selectFavorites = createSelector(
  [selectFavoritesMap],
  (pokemonList) => Object.values(pokemonList)
);

export const selectIsFavorite = (id: string) =>
  createSelector([selectFavoritesMap], (pokemonList) => !!pokemonList[id]);
