import React from "react";
import styles from "./PaginationButton.module.css";

export const PaginationButton = ({ page, currentPage, onPageChange }) => {
  return (
    <button
      key={page}
      onClick={() => onPageChange(page)}
      className={
        page === currentPage ? `${styles.active}` : `${styles.paginationButton}`
      }
    >
      {page}
    </button>
  );
};
