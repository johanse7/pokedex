import styles from "./Loader.module.css";

type LoaderProps = {
  size?: number; 
  centered?: boolean; 
  className?: string;
};

export const Loader = ({
  size = 40,
  centered = false,
  className = "",
}: LoaderProps) => {
  return (
    <div className={centered ? styles.centeredWrapper : ""}>
      <div
        className={`${styles.loader} ${className}`}
        style={{ width: size, height: size }}
      />
    </div>
  );
};
