import StraightenIcon from "@/assets/icons/straighten.svg?react";
import WeightIcon from "@/assets/icons/weight.svg?react";
import type { PokemonTypeKey } from "@/helpers";
import { getTextTypeClass } from "@/helpers";
import { Typography } from "@/shared/ui";
import { QualityCard } from "../QualityCard/QualityCard";
import styles from "./AboutPokemon.module.css";

type AboutPokemonProps = {
  weight: number;
  height: number;
  description?: string;
  type: PokemonTypeKey;
  moves?: Array<string>;
};

export const AboutPokemon = (props: AboutPokemonProps) => {
  const { weight, height, description, type, moves = [] } = props;

  return (
    <section className={styles.aboutContainer} aria-label="about-pokemon">
      <Typography
        tag="h3"
        variant="subtitle1Bold"
        className={getTextTypeClass(type)}
      >
        About
      </Typography>
      <ul className={styles.qualities}>
        <li>
          <QualityCard
            value={`${weight} Kg`}
            name="Weight"
            icon={<WeightIcon />}
          />
        </li>
        <li>
          <QualityCard
            value={`${height} m`}
            name="Height"
            icon={<StraightenIcon />}
          />
        </li>

        {moves.length > 0 && (
          <li>
            <QualityCard value={moves} name="Moves" />
          </li>
        )}
      </ul>
      {description && (
        <Typography variant="body3Regular" className={styles.description}>
          {description.replace(/\f/g, " ")}
        </Typography>
      )}
    </section>
  );
};
