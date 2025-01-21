import { useState } from "react";
import "../styles/PaginatedList.css";

export const PaginatedList = (props) => {
  const { Component, data, itemsPerPage, selectedRows, setSelectedRows, isMasterSelected, setIsMasterSelected, clearSelection, deleteSelected, ...rest } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const gotoPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

    clearSelection();
  };

  const gotoPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

    clearSelection();
  };

  const gotoNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }

    clearSelection();
  };

  const toggleAll = () => {
    setIsMasterSelected(!isMasterSelected);

    if (selectedRows.size < currentPageData.length) {
      const newSelectedRows = new Set(currentPageData.map((user) => user.id));
      setSelectedRows(newSelectedRows);
    } else {
      setSelectedRows(new Set());
    }
  };

  return (
    <>
      <Component
        data={currentPageData}
        selectedRows={selectedRows}
        isMasterSelected={isMasterSelected}
        toggleAll={toggleAll}
        {...rest}
      />

      <div className="bottom-container">
        <button className="delete" disabled={selectedRows.size === 0} onClick={deleteSelected}>Delete Selected</button>

        <div className="pagination-controls">
          <button
            className="prev"
            disabled={currentPage === 1}
            onClick={gotoPreviousPage}
          >
            {"<<"}
          </button>

          <div className="page-numbers">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => gotoPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className="next"
            disabled={currentPage === totalPages}
            onClick={gotoNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </>
  );
};
