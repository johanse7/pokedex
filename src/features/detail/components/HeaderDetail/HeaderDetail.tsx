import { BackButton } from "@/shared/components";
import { Typography } from "@/shared/ui";
import styles from "./HeaderDetail.module.css";

type HeaderDetailsProps = {
  pokemonId: number;
  title: string;
};

export const HeaderDetails = (props: HeaderDetailsProps) => {
  const { title, pokemonId } = props;

  return (
    <header className={styles.headerContainer}>
      <BackButton title={title} />
      <Typography tag="span" variant="subtitle1Bold">
        #{pokemonId}
      </Typography>
    </header>
  );
};
