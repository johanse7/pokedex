import { PokemonListContainer } from "@/features/pokemon/components";
import { FilterContainer } from "../../features/filter/components/FilterContainer/FilterContainer";
import style from "./PokemonPage.module.css";

export const PokemonPage = () => {
  return (
    <div className={`${style.containerPokemonPage}`}>
      <div className="container">
        <FilterContainer />
        <section className={style.listContainer}>
          <PokemonListContainer />
        </section>
      </div>
    </div>
  );
};
