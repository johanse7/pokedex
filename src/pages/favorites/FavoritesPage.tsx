import { selectFavorites } from "@/features/favorites";
import { PokemonGrid } from "@/features/pokemon";
import stylePokemonList from "@/features/pokemon/components/PokemonListContainer/PokemonListContainer.module.css";
import { useAppSelector } from "@/hooks";
import { BackButton, EmptyState } from "@/shared/components";
import layoutStyles from "@/shared/layouts/main-layout/MainLayout.module.css";
import styles from "../Pokemon/PokemonPage.module.css";
import stylesFavoritesPage from "./FavoritePage.module.css";

export const FavoritesPage = () => {
  const favoritePokemons = useAppSelector(selectFavorites);

  return (
    <div
      className={`${layoutStyles.screenContainer} ${styles.containerPokemonPage}`}
    >
      <div className={`${layoutStyles.screenContainer} content-area`}>
        <BackButton title="Favorite pokemonms" path="/" className={stylesFavoritesPage.headerBackButton}/>
        {!favoritePokemons.length ? (
          <EmptyState className={stylesFavoritesPage.emptyState} />
        ) : (
          <section className={styles.listContainer}>
            <div className={stylePokemonList.content}>
              <PokemonGrid pokemonList={favoritePokemons} />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
