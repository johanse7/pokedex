import { getTypeClass, type PokemonTypeKey } from "@/helpers";
import { Typography } from "@/shared/ui";
import styles from "./TypePill.module.css";

type TypePillProps = {
  type: PokemonTypeKey;
};
export const TypePill = ({ type = "steel" }: TypePillProps) => {
  return (
    <Typography
      tag="span"
      variant="subtitle3Bold"
      className={`${styles.pill} ${getTypeClass(type)}`}
    >
      {type}
    </Typography>
  );
};
