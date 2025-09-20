import type { ComponentProps } from "react";
import styles from "./Input.module.css";

type Props = ComponentProps<"input">;

export const Input = ({ className, ...props }: Props) => {
  return <input className={`${styles.input} ${className ?? ""}`} {...props} />;
};
