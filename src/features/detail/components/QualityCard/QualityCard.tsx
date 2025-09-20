import { Button, Typography } from "@/shared/ui";
import type { ReactNode } from "react";
import { useState } from "react";
import styles from "./Quality.module.css";

type QualityCardProps = {
  name: string;
  value: string | Array<string>;
  icon?: ReactNode;
  collapseAt?: number;
};

export const QualityCard = (props: QualityCardProps) => {
  const { name, value, icon, collapseAt = 2 } = props;
  const [expanded, setExpanded] = useState(false);

  const renderValue = () => {
    if (Array.isArray(value)) {
      const visibleValues = expanded ? value : value.slice(0, collapseAt);

      return (
        <div className={styles.qualityValuesWrapper}>
          <ul className={styles.qualityValues}>
            {visibleValues.map((quality, index) => (
              <li key={`quality-${quality}-${index}`}>
                <Typography
                  tag="span"
                  variant="body3Regular"
                  className="capitalize"
                >
                  {quality}
                </Typography>
              </li>
            ))}
          </ul>

          {value.length > collapseAt && (
            <Button variant="outline" onClick={() => setExpanded(!expanded)}>
              <Typography tag="span" variant="body3Regular">
                {expanded ? "Show less" : `+${value.length - collapseAt} more`}
              </Typography>
            </Button>
          )}
        </div>
      );
    }

    return (
      <Typography tag="span" variant="body3Regular" className="capitalize">
        {value}
      </Typography>
    );
  };

  return (
    <article className={styles.qualityCard}>
      <header className={styles.qualityCardHeader}>
        {icon ?? null}
        {renderValue()}
      </header>

      <Typography tag="span" variant="captionRegular" className="capitalize">
        {name}
      </Typography>
    </article>
  );
};
