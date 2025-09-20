import React from "react";
import styles from "./RadioButton.module.css";

type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const RadioButton = ({
  label,
  className,
  ...rest
}: RadioButtonProps) => {
  return (
    <label className={`${styles.radioLabel} ${className ?? ""}`}>
      <input type="radio" {...rest} className={styles.radioInput} />
      <span className={styles.customRadio} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};
