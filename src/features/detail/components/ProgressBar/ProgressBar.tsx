import type { PokemonTypeKey } from "@/helpers";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  value: number;
  type: PokemonTypeKey;
};

export const ProgressBar = ({ value, type }: ProgressBarProps) => {
  return (
    <div
      role="progressbar"
      className={styles.progressContainer}
      style={{
        backgroundColor: `color-mix(in srgb, var(--color-type-${type}) 20%, transparent)`,
      }}
    >
      <div
        role="progressbar-percent"
        className={styles.progressFill}
        style={{
          width: `${value}%`,
          backgroundColor: `var(--color-type-${type})`,
        }}
      />
    </div>
  );
};
