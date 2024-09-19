import React from "react";
import generatePaginationData from "../../utils/generatePaginationData";
import styles from "./Pagination.module.css";
import { PaginationButton } from "./PaginationButton";
import { PaginationArrowButton } from "./PaginationArrowButton";

function Pagination({ currentPage, totalPage, onPageChange }) {
  const paginationData = generatePaginationData(currentPage, totalPage);

  return (
    <div className={styles.pagination}>
      {totalPage > 0 && (
        <PaginationArrowButton
          sign="<"
          toPage={currentPage - 1}
          disabled={paginationData.hasPrevious}
          onPageChange={onPageChange}
        />
      )}

      {paginationData.pages.map((page) => (
        <PaginationButton {...{ page, currentPage, onPageChange }} />
      ))}

      {totalPage > 0 && (
        <PaginationArrowButton
          sign=">"
          toPage={currentPage + 1}
          disabled={paginationData.hasNext}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default Pagination;
