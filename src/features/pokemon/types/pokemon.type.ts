export type PokemonImagesType = {
  other: { "official-artwork": { front_default: string; front_shiny: string } };
};

export type PokemonResponse = {
  id: number;
  name: string;
  front_default: Array<{
    sprites: PokemonImagesType;
  }>;
};

export type GetPokemonListResponse = {
  pokemon_v2_pokemon: PokemonResponse[];
  totalCount: {
    aggregate: {
      count: number;
    };
  };
};

export type Pokemon = Omit<PokemonResponse, "front_default"> & {
  imageUrl?: string;
};
