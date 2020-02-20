import React from "react";

const Paginator = ({ totalItem, limit, offset, changeQuery }) => {
  const totalPages = parseInt(parseInt(totalItem) / parseInt(limit));
  console.log("total-item", totalItem);
  console.log(totalPages);
  const currentPage = Math.ceil(offset / limit) + 1;
  const paginationMax = totalPages > 18 ? 19 : totalPages;
  let paginationStart;
  let paginationEnd;
  if (currentPage === totalPages || currentPage + paginationMax >= totalPages) {
    paginationStart = totalPages - paginationMax;
    paginationEnd = totalPages;
  } else if (currentPage > parseInt(paginationMax / 2)) {
    paginationStart = currentPage - parseInt(paginationMax / 2);
    paginationEnd = paginationStart + paginationMax;
  } else {
    paginationStart = 1;
    paginationEnd = paginationStart + paginationMax;
  }
  console.log("pagination start", paginationStart);
  console.log("pagination end", paginationEnd);

  const createPaginator = () => {
    const paginator = [];
    for (let i = paginationStart; i < paginationEnd; i++) {
      let pageSelected = currentPage === i ? true : false;

      paginator.push(
        <div
          key={i}
          className={`${pageSelected ? "selected" : ""} paginator-link `}
          onClick={() => {
            const newOffset = parseInt(limit) * (parseInt(i) - 1);
            changeQuery(newOffset);
          }}
        >
          {i}
        </div>
      );
    }

    return paginator;
  };

  const goToNextPage = () => {
    const newOffset = parseInt(limit) * currentPage;
    changeQuery(newOffset);
  };

  const goToPreviousPage = () => {
    const newOffset = parseInt(limit) * (currentPage - 2);
    changeQuery(newOffset);
  };

  return (
    <div className="paginator-wrapper">
      <div
        onClick={goToPreviousPage}
        className={`${
          currentPage === 1
            ? "previous-paginator invisible"
            : "previous-paginator"
        }`}
      >
        <img src="/previous.svg" alt="previous btn"></img>
      </div>
      {createPaginator()}
      <div
        className={`${
          currentPage === totalPages
            ? "next-paginator invisible"
            : "next-paginator"
        }`}
        onClick={goToNextPage}
      >
        <img src="/next.svg" alt="next btn"></img>
      </div>
    </div>
  );
};

export default Paginator;
