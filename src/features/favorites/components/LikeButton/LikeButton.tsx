import FillHeartIcon from "@/assets/icons/heart-fill.svg?react";
import HeartIcon from "@/assets/icons/heart.svg?react";
import { selectIsFavorite, toggleFavorite } from "@/features/favorites";
import type { Pokemon } from "@/features/pokemon";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Button } from "@/shared/ui";
import styles from "./LikeButton.module.css";

type LikeButtonProps = {
  pokemon: Pokemon;
  className?: string;
};

export const LikeButton = ({ pokemon, className }: LikeButtonProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(selectIsFavorite(pokemon.id.toString()));

  const handleClickLike = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(toggleFavorite(pokemon));
  };
  return (
    <Button
      variant="outline"
      className={`${styles.likeButton} ${className || ""}`}
      onClick={handleClickLike}
    >
      {isFavorite ? (
        <FillHeartIcon className={styles.fill} />
      ) : (
        <HeartIcon className={styles.outline} />
      )}
    </Button>
  );
};
