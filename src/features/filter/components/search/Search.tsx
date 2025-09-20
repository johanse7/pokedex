import CloseIcon from "@/assets/icons/close.svg?react";
import SearchIcon from "@/assets/icons/search.svg?react";
import { Input } from "@/shared/ui";
import { useRef } from "react";
import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";
import styles from "./Search.module.css";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim();
      if (!value) {
        searchTerm.delete("search");
      } else {
        searchTerm.set("search", value);
      }
      searchTerm.set("page", "1");
      setSearchTerm(searchTerm);
    },
    300
  );

  const handleClear = () => {
    searchTerm.delete("search");
    setSearchTerm(searchTerm);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const valueSearch = searchTerm.get("search") ?? "";

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.iconSearch} />
      <Input
        ref={inputRef}
        placeholder="Search"
        className={styles.input}
        onChange={handleSearch}
        defaultValue={valueSearch}
        name="search"
      />
      {valueSearch && (
        <button
          type="button"
          className={styles.iconClose}
          onClick={handleClear}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
