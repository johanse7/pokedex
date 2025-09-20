import type { Pokemon } from "@/features/pokemon";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  pokemonList: Record<string, Pokemon>;
};

const initialState: FavoritesState = {
  pokemonList: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;

      if (state.pokemonList[pokemon.id]) {
        delete state.pokemonList[pokemon.id];
      } else {
        state.pokemonList[pokemon.id] = pokemon;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
