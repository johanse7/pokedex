import { useQuery } from "@apollo/client/react";
import { GET_POKEMON_DETAIL_QUERY } from "../graphql/queries";
import type {
  PokemonDetail,
  PokemonStats,
  PokemonStatResponse,
  PokemonMoveResponse,
  PokemonTypeResponse,
  GetPokemonDetailResponse,
} from "../types/pokemonDetail";

type PokemonDetailVars = {
  id: string;
};

export const usePokemonDetail = (id: string) => {
  const { data, ...rest } = useQuery<
    GetPokemonDetailResponse,
    PokemonDetailVars
  >(GET_POKEMON_DETAIL_QUERY, {
    variables: { id },
  });

  let pokemonDetail: PokemonDetail | null = null;

  if (data?.pokemonDetail) {
    const {
      id = 0,
      name = "",
      height = 0,
      weight = 0,
      images = [],
      info,
      types = [],
      moves = [],
      stats = [],
    } = data.pokemonDetail;

    const imagesResult = [
      images[0]?.sprites?.other?.["official-artwork"]?.front_default ?? "",
      images[0]?.sprites?.other?.["official-artwork"]?.front_shiny ?? "",
    ].filter(Boolean);

    const description = info?.descriptions?.[0]?.text;

    const resultTypes = types
      .filter((t): t is PokemonTypeResponse => Boolean(t))
      .map((t) => t.pokemonType?.name ?? "");

    const movesResult = moves
      .filter((m): m is PokemonMoveResponse => Boolean(m))
      .map<string>(({ move }) => move?.name ?? "");

    const statsResult = stats
      .filter((s): s is PokemonStatResponse => Boolean(s))
      .map<PokemonStats>(({ baseStat = 0, category }) => ({
        baseStat,
        name: category?.name ?? "",
      }));

    pokemonDetail = {
      id,
      name,
      height,
      weight,
      images: imagesResult,
      description,
      types: resultTypes,
      moves: movesResult,
      stats: statsResult,
    };
  }

  return {
    pokemonDetail,
    ...rest,
  };
};
