import ArrowBackIcon from "@/assets/icons/arrow_back.svg?react";
import { Button, Typography } from "@/shared/ui";
import { useNavigate } from "react-router";
import styles from "./BackButton.module.css";

type BackButtonProps = {
  title: string;
  path?: string;
  className?: string;
};

export const BackButton = (props: BackButtonProps) => {
  const { title, path, className = "" } = props;

  const navigate = useNavigate();

  const handleClickBack = () => {
    if (path) {
      navigate(path);
      return;
    }

    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/");
  };

  return (
    <div className={`${styles.container} ${className}`}>
      <Button variant="outline" onClick={handleClickBack}>
        <ArrowBackIcon width={32} height={32} />
      </Button>
      <Typography tag="h1" variant="headlineBold" className="capitalize">
        {title}
      </Typography>
    </div>
  );
};
