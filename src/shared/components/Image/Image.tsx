import silhouette from "@/assets/images/Silhouette.png";
import { useState } from "react";
import styles from "./Image.module.css";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholder?: string;
};

export const Image = ({
  src,
  placeholder = silhouette,
  alt,
  className,
  ...rest
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <div className={styles.wrapper}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt={`${alt ?? "placeholder"}-loading`}
          className={styles.placeholder}
          {...rest}
        />
      )}

      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${styles.image} ${isLoaded ? styles.loaded : ""} ${
            className ?? ""
          }`}
          {...rest}
        />
      )}
    </div>
  );
};
