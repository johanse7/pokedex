import type { Pokemon } from "../../types/pokemon.type";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import styles from "./PokemonGrid.module.css";

type PokemonList = {
  pokemonList: Array<Pokemon>;
};

export const PokemonGrid = ({ pokemonList = [] }: PokemonList) => {
  return (
    <div className={styles.wrapperList}>
      {pokemonList.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
};
