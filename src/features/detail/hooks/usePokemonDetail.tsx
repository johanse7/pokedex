import { useQuery } from "@apollo/client/react";
import { useEffect, useMemo } from "react";
import { GET_POKEMON_DETAIL_QUERY } from "../graphql/queries";
import { pokemonTypesVar } from "../store/pokemonDetailState";
import type {
  GetPokemonDetailResponse,
  PokemonDetail,
  PokemonMoveResponse,
  PokemonStatResponse,
  PokemonStats,
  PokemonTypeResponse,
} from "../types/pokemonDetail";

type VarsType = {
  id: string;
};

export const usePokemonDetail = (id: string) => {
  const { data, ...rest } = useQuery<GetPokemonDetailResponse, VarsType>(
    GET_POKEMON_DETAIL_QUERY,
    { variables: { id } }
  );

  const pokemonDetail: PokemonDetail | null = useMemo(() => {
    if (!data?.pokemonDetail) return null;

    const {
      id: pokeId = 0,
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

    return {
      id: pokeId,
      name,
      height,
      weight,
      images: imagesResult,
      description,
      types: resultTypes,
      moves: movesResult,
      stats: statsResult,
    };
  }, [data]);

  useEffect(() => {
    pokemonTypesVar(pokemonDetail?.types);
    return () => pokemonTypesVar(null);
  }, [pokemonDetail]);

  return { pokemonDetail, ...rest };
};
