import React from "react";
import styles from "./Pagination.module.scss";
function PaginationNumbers({ number, onNumberClick, currentPage }) {
  return (
    <>
      <div>
        <li
          className={`${styles.numberList} ${currentPage === number? `${styles.active}` : ""}`}
          key={number}
          id={number}
          onClick={onNumberClick}
        >
          {number}
        </li>
      </div>
    </>
  );
}

export default PaginationNumbers;
