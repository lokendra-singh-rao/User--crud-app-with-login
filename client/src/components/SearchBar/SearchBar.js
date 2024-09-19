import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/searchIcon.svg";
import styles from "./SearchBar.module.css";
import { toast } from "react-toastify";

function SearchBar({
  searchQuery,
  setSearchQuery,
  searchUsers,
  setCurrentPage,
}) {
  const [isFirst, setIsFirst] = useState(true);
  useEffect(() => {
    if (searchQuery?.length === 0 && !isFirst) {
      handleSearchQueryEmpty();
      setIsFirst(true);
    }
  }, [searchQuery]);

  async function handleSearchQueryEmpty() {
    setIsFirst(false);
    await setCurrentPageForSearch();
    await searchUsers();
  }

  async function setCurrentPageForSearch() {
    setCurrentPage(1);
  }

  async function handleSearch() {
    if (searchQuery.length < 1) {
      toast.error("Search query empty!");
      return;
    }
    setIsFirst(false);
    await setCurrentPageForSearch();
    await searchUsers();
  }

  return (
    <div className={styles.searchBar}>
      <img
        className={styles.searchIcon}
        src={searchIcon}
        alt="searchIcon"
      />
      <input
        type="search"
        placeholder="Search by Name, or Email id"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button
        onClick={(e) => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
