import { PokemonListContainer } from "@/features/pokemon/components";
import layoutStyles from "@/shared/layouts/main-layout/MainLayout.module.css";
import { FilterContainer } from "../../features/filter/components/FilterContainer/FilterContainer";
import style from "./PokemonPage.module.css";

export const PokemonPage = () => {
  return (
    <div className={`${layoutStyles.layout} ${style.containerPokemonPage}`}>
      <div className={layoutStyles.centeredContainer}>
        <FilterContainer />
        <section className={style.listContainer}>
          <PokemonListContainer />
        </section>
      </div>
    </div>
  );
};
