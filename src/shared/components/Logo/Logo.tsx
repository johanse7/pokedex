import PokeBallIcon from "../../../assets/icons/pokeball.svg?react";

import { Typography } from "../../ui";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.contentLogo}>
      <PokeBallIcon className={styles.logo} />
      <Typography variant="headlineBold">Pokédex</Typography>
    </div>
  );
};
