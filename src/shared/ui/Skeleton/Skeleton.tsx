import React from "react";
import styles from "./Skeleton.module.css";

type SkeletonProps = {
  variant?: "text" | "circle" | "rect";
  width?: string | number;
  height?: string | number;
  className?: string;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rect",
  width,
  height,
  className = "",
}) => {
  let variantClass = styles.skeletonRect;

  if (variant === "text") variantClass = styles.skeletonText;
  if (variant === "circle")
    variantClass = `${styles.skeletonCircle} ${styles.skeletonRect}`;

  return (
    <div
      className={`${styles.skeleton} ${variantClass} ${className}`}
      style={{
        width: width || "100%",
        height: height || (variant === "text" ? "1em" : undefined),
      }}
    />
  );
};
