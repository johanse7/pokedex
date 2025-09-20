import { getTextTypeClass, type PokemonTypeKey } from "@/helpers";
import { Typography } from "@/shared/ui";
import type { PokemonStats } from "../../types/pokemonDetail";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./BaseStats.module.css";

type BaseStatsProps = {
  stats: Array<PokemonStats>;
  type: PokemonTypeKey;
};

export const BaseStats = (props: BaseStatsProps) => {
  const { stats = [], type } = props;

  return (
    <section className={styles.baseStatsContainer}>
      <Typography
        tag="h3"
        variant="subtitle1Bold"
        className={getTextTypeClass(type)}
      >
        Base Stats
      </Typography>

      <table className={styles.tableStats}>
        <tbody>
          {stats.map(({ name, baseStat }) => {
            return (
              <tr key={name}>
                <td className={styles.nameCell}>
                  <Typography
                    className={`${getTextTypeClass(type)} uppercase`}
                    variant="subtitle3Bold"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={styles.valueCell}>
                  <Typography className="uppercase" variant="body3Regular">
                    0{baseStat}
                  </Typography>
                </td>
                <td className={styles.progressCell}>
                  <ProgressBar value={baseStat} type={type} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
