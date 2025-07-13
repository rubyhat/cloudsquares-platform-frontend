import { useState } from "react";

const ROWS_PER_PAGE_KEY = "routesRowsPerPage";

export const useTablePagination = (defaultRowsPerPage: number = 15) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(() => {
    const savedRowsPerPage = localStorage.getItem(ROWS_PER_PAGE_KEY);
    return savedRowsPerPage
      ? parseInt(savedRowsPerPage, 10)
      : defaultRowsPerPage;
  });

  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    localStorage.setItem(ROWS_PER_PAGE_KEY, newRowsPerPage.toString());
    setPage(0);
  };

  return {
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage: handleRowsPerPageChange,
  };
};
