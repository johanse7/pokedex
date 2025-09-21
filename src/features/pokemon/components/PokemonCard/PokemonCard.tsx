import { LikeButton } from "@/features/favorites";
import { Image } from "@/shared/components";
import { Typography } from "@/shared/ui";
import { Link } from "react-router";
import type { Pokemon } from "../../types/pokemon.type";
import style from "./PokemonCard.module.css";

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  const { id, imageUrl, name } = pokemon ?? {};

  return (
    <Link to={`/pokemon/${id}`}>
      <article className={style.pokemonCard}>
        <LikeButton pokemon={pokemon} className={style.likeButton} />
        <div className={style.headerCard}>
          <Typography
            variant="captionRegular"
            tag="span"
            className={style.pokemonNumber}
          >
            #{id}
          </Typography>
        </div>
        <div className={style.contendBody}>
          <Image src={imageUrl} alt={name} loading="lazy" />
          <div className={style.sectionName}>
            <Typography
              variant="body3Regular"
              className={`${style.pokemonName} text-ellipsis`}
              title={name}
            >
              {name}
            </Typography>
          </div>
        </div>
      </article>
    </Link>
  );
};
