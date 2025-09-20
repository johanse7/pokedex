import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL_QUERY = gql`
  query GetPokemonDetail($id: Int!) {
    pokemonDetail: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      name
      height
      weight

      images: pokemon_v2_pokemonsprites {
        sprites
      }

      info: pokemon_v2_pokemonspecy {
        descriptions: pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          limit: 1
        ) {
          text: flavor_text
        }
      }

      types: pokemon_v2_pokemontypes {
        pokemonType: pokemon_v2_type {
          name
        }
      }

      stats: pokemon_v2_pokemonstats {
        baseStat: base_stat
        category: pokemon_v2_stat {
          name
        }
      }
      moves: pokemon_v2_pokemonmoves(limit: 5) {
        move: pokemon_v2_move {
          name
        }
      }
    }
  }
`;
