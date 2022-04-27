import React from "react";

export const Pagination = ({ totalPages, handlePage }) => {
  const buttonArr = new Array(totalPages).fill(0).map((_, index) => index + 1);
  return (
    <div>
      {buttonArr.map((num) => {
        return (
          <button className="pageBtn" onClick={() => handlePage(num)}>
            {num}
          </button>
        );
      })}
    </div>
  );
};