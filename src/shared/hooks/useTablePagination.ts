import { useState } from "react";
import { TablePagination } from "../interfaces/Basic";

/**
 * Кастомный хук для управления пагинацией таблицы.
 *
 * - Хранит `page` (номер текущей страницы) и `rowsPerPage` (количество строк на странице).
 * - Позволяет изменять количество строк и сохраняет его в `localStorage`.
 * - Может обновлять пагинацию в глобальном Zustand-хранилище, если передана `setPaginationInStore`.
 *
 * @param {number} [defaultRowsPerPage=15] Количество строк на странице по умолчанию.
 * @param {string} ROWS_PER_PAGE_KEY Ключ для хранения значения `rowsPerPage` в `localStorage`.
 * @param {(v: TablePagination) => void} [setPaginationInStore] (Необязательно) Функция для обновления состояния пагинации в сторе.
 * @returns Объект с состоянием и методами управления пагинацией:
 * - `page`: текущая страница.
 * - `rowsPerPage`: количество строк на странице.
 * - `setPage`: функция для установки текущей страницы.
 * - `setRowsPerPage`: функция для изменения количества строк на странице.
 */
export const useTablePagination = (
  defaultRowsPerPage: number = 15,
  ROWS_PER_PAGE_KEY: string,
  setPaginationInStore?: (v: TablePagination) => void,
) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(() => {
    const savedRowsPerPage = localStorage.getItem(ROWS_PER_PAGE_KEY);

    if (savedRowsPerPage) {
      const parsedRowsPerPage = parseInt(savedRowsPerPage, 10);
      if (setPaginationInStore)
        setPaginationInStore({ page, rowsPerPage: parsedRowsPerPage });
      return parsedRowsPerPage;
    } else {
      return defaultRowsPerPage;
    }
  });

  /**
   * Изменяет количество строк на странице, обновляет `localStorage` и сбрасывает страницу на первую.
   * @param {number} newRowsPerPage Новое количество строк на странице.
   */
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
