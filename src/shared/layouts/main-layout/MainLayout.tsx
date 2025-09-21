import { pokemonTypesVar } from "@/features/detail/store/pokemonDetailState";
import type { PokemonTypeKey } from "@/helpers";
import { getTypeClass } from "@/helpers";
import { Navbar } from "@/shared/components";
import { useReactiveVar } from "@apollo/client/react";
import { Outlet } from "react-router";
import styles from "./MainLayout.module.css";

export function MainLayout() {
  const pokemonTypes = useReactiveVar(pokemonTypesVar);

  const pokemonType = pokemonTypes?.[0];

  const backgroundClass = pokemonType
    ? getTypeClass(pokemonType as PokemonTypeKey)
    : styles.defaultBackground;

  return (
    <main className={`${styles.screenContainer} ${backgroundClass}`}>
      <Navbar className={backgroundClass} />
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </main>
  );
}
