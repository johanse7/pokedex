import { Typography } from "@/shared/ui";
import styles from "./EmptyState.module.css";

type EmptyStateProps = {
  title?: string;
  description?: string;
  className?: string;
};

export const EmptyState = ({
  title = "No content available",
  description = "There is nothing to display at the moment.",
  className = "",
}: EmptyStateProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Typography variant="subtitle1Bold" tag="h2">
        {title}
      </Typography>

      <Typography variant="body2Regular">{description}</Typography>
    </div>
  );
};
