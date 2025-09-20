import { Image } from "@/shared/components";
import { Skeleton } from "@/shared/ui";
import stylesCard from "../PokemonCard/PokemonCard.module.css";
import styleGrid from "../PokemonGrid/PokemonGrid.module.css";
import stylesList from "../PokemonListContainer/PokemonListContainer.module.css";

const PokemonCardSkeleton = () => {
  return (
    <article className={stylesCard.pokemonCard}>
      <div className={stylesCard.headerCard}>
        <Skeleton
          variant="text"
          width="20%"
          height="5px"
          className={stylesCard.pokemonNumber}
        />
      </div>

      <div className={stylesCard.contendBody}>
        <Image alt="Image load pokemon" />
        <div className={stylesCard.sectionName}>
          <Skeleton variant="text" width="50%" height="10px" />
        </div>
      </div>
    </article>
  );
};

type PokemonListSkeletonProps = {
  count?: number;
};

export const PokemonListSkeleton = ({
  count = 20,
}: PokemonListSkeletonProps) => {
  return (
    <div className={stylesList.content}>
      <div className={styleGrid.wrapperList}>
        {Array.from({ length: count }).map((_, idx) => (
          <PokemonCardSkeleton key={"skeleton-list" + idx} />
        ))}
      </div>
    </div>
  );
};
