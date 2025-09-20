import ArrowBackIcon from "@/assets/icons/arrow_back.svg?react";
import { Button, Typography } from "@/shared/ui";
import { useNavigate } from "react-router";
import styles from "./HeaderDetail.module.css";

type HeaderDetailsProps = {
  pokemonId: number;
  title: string;
};

export const HeaderDetails = (props: HeaderDetailsProps) => {
  const { title, pokemonId } = props;
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAction}>
        <Button variant="outline" onClick={handleClickBack}>
          <ArrowBackIcon width={32} height={32} />
        </Button>
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
