import { RadioButton, Typography } from "@/shared/ui";
import { useClickAway } from "@uidotdev/usehooks";
import { useSearchParams } from "react-router";
import { SORT_FIELDS } from "../../utils/constants";
import styles from "./Sort.module.css";

type SortCardProps = {
  onClose: () => void;
  className?: string;
};

export const SortCard = ({ onClose, className }: SortCardProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("orderBy", e.target.value);
    setSearchParams(searchParams);
    onClose();
  };

  const refElement = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  const orderByParam = searchParams.get("orderBy") ?? "id";

  return (
    <div
      className={`${styles.sortContainer} ${className ?? ""}`}
      ref={refElement}
      aria-label="sort-card"
    >
      <header className={styles.header}>
        <Typography variant="subtitle2Bold">Sort by:</Typography>
      </header>
      <div className={styles.content}>
        {SORT_FIELDS.map(({ label, value }) => (
          <RadioButton
            key={value}
            label={label}
            value={value}
            name="sort"
            checked={value === orderByParam}
            onChange={handleChange}
            aria-label="sort-field"
          />
        ))}
      </div>
    </div>
  );
};
