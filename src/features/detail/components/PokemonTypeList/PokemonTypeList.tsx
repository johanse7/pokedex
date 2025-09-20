import type { PokemonTypeKey } from "@/helpers";
import { TypePill } from "../TypePill/TypePill";
import styles from "./PokemonTypeList.module.css";

type PokemonTypeListProps = {
  types: PokemonTypeKey[];
};

export const PokemonTypeList = ({ types }: PokemonTypeListProps) => {
  return (
    <div className={styles.typeList}>
      {types.map((type) => (
        <TypePill key={type} type={type} />
      ))}
    </div>
  );
};
