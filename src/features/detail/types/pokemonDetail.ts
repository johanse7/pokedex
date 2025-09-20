import type { PokemonImagesType } from "@/features/pokemon";

export type GetPokemonDetailResponse = {
  pokemonDetail: PokemonDetailResponse;
};

export type PokemonDetailResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;

  images: {
    sprites: PokemonImagesType;
  }[];

  info: {
    descriptions: {
      text: string;
    }[];
  };

  types: {
    pokemonType: {
      name: string;
    };
  }[];

  stats: PokemonStatResponse[];
  moves: PokemonMoveResponse[];
};


export type PokemonDetail = Omit<
  PokemonDetailResponse,
  "images" | "info" | "types" | "stats" | "moves"
> & {
  description?: string;
  types: string[];
  stats: PokemonStats[];
  images: string[];
  moves: string[];
};

export type PokemonStats = {
  baseStat: number;
  name: string;
};

export type PokemonStatResponse = {
  baseStat: number;
  category?: {
    name?: string;
  };
};

export type PokemonMoveResponse = {
  move: {
    name: string;
  };
};

export type PokemonTypeResponse = {
  pokemonType: {
    name: string;
  };
};
