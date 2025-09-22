import { Typography } from "@/shared/ui";
import styles from "./ErrorHandler.module.css";

type ErrorHandlerProps = {
  error: Error;
};

export function ErrorHandler({ error }: ErrorHandlerProps) {
  return (
    <div className={styles.handlerContainer}>
      <Typography variant="subtitle1Bold">Something went wrong</Typography>
      <Typography variant="body2Regular">{error.message}</Typography>
    </div>
  );
}
