import TagFormatIcon from "@/assets/icons/tag.svg?react";
import TextFormatIcon from "@/assets/icons/text_format.svg?react";
import { Button } from "@/shared/ui";
import { useToggle } from "@uidotdev/usehooks";
import type { ReactNode } from "react";
import { useSearchParams } from "react-router";
import type { OrderFiledType } from "../../types/filter";
import { SortCard } from "../SortCard/SortCard";
import style from "./SortContainer.module.css";

const ICON: Record<OrderFiledType, ReactNode> = {
  id: <TagFormatIcon className={style.iconSort} />,
  name: <TextFormatIcon className={style.iconSort} />,
};

export const SortContainer = () => {
  const [openSortCard, setOpenSortCard] = useToggle(false);
  const [searchParams] = useSearchParams();

  const orderByParam = searchParams.get("orderBy");

  return (
    <div className={style.wrapper}>
      <Button variant="secondary" onClick={() => setOpenSortCard()}>
        {ICON[orderByParam as keyof typeof ICON] ?? ICON.id}
      </Button>

      {openSortCard && (
        <SortCard
          className={style.contentSortCard}
          onClose={() => setOpenSortCard()}
        />
      )}
    </div>
  );
};
