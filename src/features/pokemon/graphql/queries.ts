import { gql } from "@apollo/client";
import type { FilterType } from "../../filter/types/filter";

const limit = Number(import.meta.env.VITE_POKEMON_LIMIT) || 20;

export const GET_POKEMON_LIST_QUERY = gql`
  query GetPokemons(
    $order_by: [pokemon_v2_pokemon_order_by!]
    $where: pokemon_v2_pokemon_bool_exp
    $limit: Int
    $offset: Int
  ) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      id
      name
      front_default: pokemon_v2_pokemonsprites {
        sprites
      }
    }
    totalCount: pokemon_v2_pokemon_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const getPokemonListVariables = ({
  order = "asc",
  orderBy = "id",
  search,
  page,
}: FilterType & { page?: number | string }) => {
  const pageResult = page ? Number(page) : 1;

  const offset = (pageResult - 1) * limit;

  return {
    order_by: [{ [orderBy]: order }],
    where: search
      ? {
          _or: [
            { name: { _ilike: `%${search}%` } },
            { id: { _eq: parseInt(search as string, 10) || 0 } },
            {
              pokemon_v2_pokemontypes: {
                pokemon_v2_type: { name: { _ilike: `%${search}%` } },
              },
            },
          ],
        }
      : undefined,
    limit,
    offset,
  };
};
