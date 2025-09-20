import ArrowBackIcon from "@/assets/icons/arrow_back.svg?react";
import { Typography } from "@/shared/ui";
import { Link } from "react-router";
import styles from "./HeaderDetail.module.css";

type HeaderDetailsProps = {
  pokemonId: number;
  title: string;
};

export const HeaderDetails = (props: HeaderDetailsProps) => {
  const { title, pokemonId } = props;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAction}>
        <Link to="/">
          <ArrowBackIcon width={32} height={32} />
        </Link>
        <Typography tag="h1" variant="headlineBold" className="capitalize">
          {title}
        </Typography>
      </div>
      <Typography tag="span" variant="subtitle1Bold">
        #{pokemonId}
      </Typography>
    </header>
  );
};
