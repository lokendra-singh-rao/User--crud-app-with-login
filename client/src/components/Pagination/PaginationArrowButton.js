import React from "react";
import styles from "./PaginationArrowButton.module.css";

export const PaginationArrowButton = ({
  toPage,
  disabled,
  sign,
  onPageChange,
}) => {
  return (
    <button
      className={styles.arrowButton}
      onClick={() => onPageChange(toPage)}
      disabled={disabled ? false : true}
    >
      {sign}
    </button>
  );
};
