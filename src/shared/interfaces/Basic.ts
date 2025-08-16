/**
 * Интерфейс для управления пагинацией таблицы.
 */
export interface TablePagination {
  /** Текущая страница (начинается с 0) */
  page: number;

  /** Количество строк на одной странице */
  rowsPerPage: number;
}

/**
 * Доступные варианты сортировки данных в таблице.
 *
 * - `"id"` - сортировка по идентификатору.
 * - `"date_create"` - сортировка по дате создания.
 */
export type SortingTypes = "id" | "created_at";

/** Тип сортировки */
export type SortDirection = "asc" | "desc";
