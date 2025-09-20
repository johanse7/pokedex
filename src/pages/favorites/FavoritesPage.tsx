import ArrowBackIcon from "@/assets/icons/arrow_back.svg?react";
import { selectFavorites } from "@/features/favorites";
import { PokemonGrid } from "@/features/pokemon";
import stylePokemonList from "@/features/pokemon/components/PokemonListContainer/PokemonListContainer.module.css";
import { useAppSelector } from "@/hooks";
import { EmptyState } from "@/shared/components";
import { Typography } from "@/shared/ui";
import { Link } from "react-router";
import styles from "../Pokemon/PokemonPage.module.css";
import stylesFavoritesPage from "./FavoritePage.module.css";

export const FavoritesPage = () => {
  const favoritePokemons = useAppSelector(selectFavorites);

  return (
    <div className={`${styles.containerPokemonPage}`}>
      <div className="container">
        <header className={stylesFavoritesPage.header}>
          <Link to="/">
            <ArrowBackIcon width={36} height={36} />
          </Link>
          <Typography variant="headlineBold">Favorite Pokemos</Typography>
        </header>
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
