import React from "react";

const Paginator = ({ totalItem, limit, offset, changeQuery }) => {
  const totalPages = Math.ceil(parseInt(totalItem) / parseInt(limit));
  console.log("total-item", totalItem);
  console.log(totalPages);
  const currentPage = Math.ceil(offset / limit) + 1;
  //const paginationMax = totalPages >= 18 ? 19 : totalPages;
  const paginationMax = totalPages >= 10 ? 11 : totalPages;
  let paginationStart = 1;
  let paginationEnd = paginationMax;
  if (
    currentPage >= parseInt(paginationMax / 2) &&
    totalPages > paginationMax
  ) {
    if (currentPage + parseInt(paginationMax / 2) < totalPages) {
      paginationStart = currentPage - parseInt(paginationMax / 2);
      paginationEnd = paginationStart + paginationMax;
      console.log(
        "current page",
        currentPage,
        "paginationMax",
        paginationMax,
        "totalPages",
        totalPages
      );
    } else {
      paginationStart = totalPages - paginationMax;
      paginationEnd = paginationStart + paginationMax;
    }
  }

  // if (currentPage === totalPages && currentPage + paginationMax >= totalPages) {
  //   paginationStart = totalPages - paginationMax;
  //   paginationEnd = totalPages;
  //   console.log("bAbA");
  // } else if (currentPage > parseInt(paginationMax / 2)) {
  //   paginationStart = currentPage - parseInt(paginationMax / 2);
  //   paginationEnd = paginationStart + paginationMax;
  //   console.log("bibi");
  // } else {
  //   console.log("coucou");

  //   paginationEnd = paginationStart + paginationMax;
  // }
  console.log("pagination start", paginationStart);
  console.log("pagination end", paginationEnd);

  const createPaginator = () => {
    const paginator = [];
    for (let i = paginationStart; i < paginationEnd + 1; i++) {
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
          currentPage === 1 || totalPages === 0
            ? "previous-paginator invisible"
            : "previous-paginator"
        }`}
      >
        <img src="/previous.svg" alt="previous btn"></img>
      </div>
      {createPaginator()}
      <div
        className={`${
          currentPage === totalPages || totalPages === 0
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
