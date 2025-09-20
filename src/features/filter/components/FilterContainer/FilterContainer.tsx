import { Logo } from "@/shared/components";

import { Search } from "../search/Search";
import { SortContainer } from "../SortContainer/SortContainer";
import styles from "./FilterContainer.module.css";

export const FilterContainer = () => {
  return (
    <header className={styles.content}>
      <Logo />
      <div className={styles.wrapperSearch}>
        <Search />
        <SortContainer />
      </div>
    </header>
  );
};
