import ChevronLeftIcon from "@/assets/icons/chevron_left.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron_right.svg?react";
import { Button } from "@/shared/ui";
import { useCallback, useEffect, useState } from "react";
import { Image } from "../Image/Image";
import styles from "./Slider.module.css";

type SliderProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

export const Slider = ({
  images,
  autoPlay = true,
  interval = 3000,
  className,
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval, nextSlide]);

  return (
    <div
      className={`${styles.sliderContainer} ${className ?? ""}`}
      aria-label="Slider"
      role="region"
    >
      <div
        className={styles.slideWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={`slide-${index}`} className={styles.slide}>
            <Image src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="outline"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
};
