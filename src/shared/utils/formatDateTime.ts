import { format, parseISO, isValid } from "date-fns";

/**
 * Преобразует строку в ISO-формате в читаемую дату и/или время.
 *
 * @param isoDate ISO-строка, например: "2025-04-03T09:49:30.855435"
 * @param withTime Указывать ли время (по умолчанию true)
 * @returns Строка в формате "dd.MM.yyyy" или "dd.MM.yyyy в HH:mm:ss", либо "—", если дата некорректна
 */
export const formatDateTime = (
  isoDate: string | Date | null | undefined,
  withTime: boolean = true,
): string => {
  if (!isoDate) return "—";

  const date = typeof isoDate === "string" ? parseISO(isoDate) : isoDate;

  if (!isValid(date)) return "—";

  return withTime
    ? `${format(date, "dd.MM.yyyy")} в ${format(date, "HH:mm:ss")}`
    : format(date, "dd.MM.yyyy");
};
