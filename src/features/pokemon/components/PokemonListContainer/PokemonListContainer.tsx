import type { FilterType } from "@/features/filter/types/filter";
import { EmptyState, Pagination } from "@/shared/components";
import { useSearchParams } from "react-router";
import { usePokemonList } from "../../hooks/usePokemonList";
import { PokemonGrid } from "../PokemonGrid/PokemonGrid";
import { PokemonListSkeleton } from "../PokemonListSkeleton/PokemonListSkeleton";
import style from "./PokemonListContainer.module.css";

export const PokemonListContainer = () => {
  const [searchParams] = useSearchParams();

  const params = Object.fromEntries(searchParams) as FilterType;
  const { pokemonList = [], loading, totalPages } = usePokemonList(params);

  if (loading) {
    return <PokemonListSkeleton />;
  }

  if (!pokemonList.length) {
    return <EmptyState className={style.emptyState} />;
  }

  return (
    <div className={style.content}>
      <PokemonGrid pokemonList={pokemonList} />
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          className={style.paginationContent}
        />
      )}
    </div>
  );
};
