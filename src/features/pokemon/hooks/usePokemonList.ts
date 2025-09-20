import { useQuery } from "@apollo/client/react";
import type { FilterType } from "../../filter/types/filter";
import {
  GET_POKEMON_LIST_QUERY,
  getPokemonListVariables,
} from "../graphql/queries";
import type { GetPokemonListResponse, Pokemon } from "../types/pokemon.type";

export const usePokemonList = (filter: FilterType) => {
  const variables = getPokemonListVariables(filter);

  const { data, loading, error } = useQuery<GetPokemonListResponse>(
    GET_POKEMON_LIST_QUERY,
    { variables }
  );

  const totalCount = data?.totalCount.aggregate.count ?? 0;
  const totalPages = Math.ceil(totalCount / variables.limit);

  const pokemonList =
    data?.pokemon_v2_pokemon?.map<Pokemon>(({ id, name, front_default }) => {
      const imageUrl =
        front_default?.[0]?.sprites?.other?.["official-artwork"]?.front_default;

      return {
        id,
        name,
        imageUrl,
      };
    }) ?? [];

  return {
    pokemonList,
    loading,
    error,
    totalPages,
  };
};
