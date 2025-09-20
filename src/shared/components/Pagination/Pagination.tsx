import ChevronLeftIcon from "@/assets/icons/chevron_left.svg?react";
import ChevronRightIcon from "@/assets/icons/chevron_right.svg?react";
import React from "react";
import { useSearchParams } from "react-router";
import styles from "./Pagination.module.css";

type PaginationProps = {
  totalPages: number;
  className?: string;
};

const MAX_VISIBLE_PAGE = 5;

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  className = "",
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page") || 1);

  const goToPage = (page: number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  const renderPageNumbers = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(totalPages, MAX_VISIBLE_PAGE);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - (MAX_VISIBLE_PAGE - 1));
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className={styles.pageButton}
          onClick={() => goToPage(1)}
        >
          1
        </button>
      );
      if (startPage > 2) pages.push(<span key="start-ellipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`${styles.pageButton} ${
            i === currentPage ? styles.active : ""
          }`}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1)
        pages.push(<span key="end-ellipsis">...</span>);
      pages.push(
        <button
          key={totalPages}
          className={styles.pageButton}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={`${styles.paginationWrapper} ${className}`}>
      <button onClick={prevPage} disabled={currentPage === 1}>
        <ChevronLeftIcon width={32} height={32} />
      </button>

      <div className={styles.pageNumbers}>{renderPageNumbers()}</div>

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        <ChevronRightIcon width={32} height={32} />
      </button>
    </div>
  );
};
