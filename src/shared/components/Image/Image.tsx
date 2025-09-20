import { useState } from "react";

import silhouette from "@/assets/images/Silhouette.png";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholder?: string;
};

export const Image = ({
  src,
  placeholder = silhouette,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src ?? placeholder);

  const handleError = () => {
    setImgSrc(placeholder);
  };

  return <img {...rest} src={imgSrc} onError={handleError} />;
};
