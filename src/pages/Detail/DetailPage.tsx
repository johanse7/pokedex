import {
  AboutPokemon,
  BaseStats,
  HeaderDetails,
  PokemonTypeList,
  usePokemonDetail,
} from "@/features/detail";

import { getTypeClass, type PokemonTypeKey } from "@/helpers";
import { Slider } from "@/shared/components";
import { Loader } from "@/shared/ui";
import { Navigate, useParams } from "react-router";
import styles from "./DetailPage.module.css";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { pokemonDetail, loading } = usePokemonDetail(id!);

  if (loading) return <Loader centered />;

  if (!pokemonDetail) return <Navigate to="/" replace />;

  const {
    id: pokemonId,
    name,
    weight,
    height,
    types = [],
    images = [],
    description,
    moves = [],
    stats = [],
  } = pokemonDetail;

  const firstType: PokemonTypeKey = (types?.[0] as PokemonTypeKey) ?? "steel";

  return (
    <div className={`${styles.containerDetail} ${getTypeClass(firstType)}`}>
      <div className={`${styles.wrapper} container`}>
        <HeaderDetails pokemonId={pokemonId} title={name} />
        <section className={styles.detailInfo}>
          <div className={styles.sliderPokemonContent}>
            <Slider images={images} className={styles.sliderPokemon} />
          </div>
          <PokemonTypeList types={types as PokemonTypeKey[]} />
          <AboutPokemon
            type={firstType}
            weight={weight}
            height={height}
            description={description}
            moves={moves}
          />
          <BaseStats type={firstType} stats={stats} />
        </section>
      </div>
    </div>
  );
};
