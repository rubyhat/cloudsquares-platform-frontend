/**
 * Преобразует HTML (из TipTap) в обычный текст.
 * - Удаляет теги;
 * - Декодирует сущности (через DOMParser, если доступен);
 * - Схлопывает пробелы и переносы в один пробел.
 *
 * @param html HTML-строка (может быть пустой)
 * @returns Чистый текст без тегов
 */
export function htmlToPlainText(html: string | null | undefined): string {
  if (!html) return "";
  // Используем DOMParser в браузере (лучше декодирует сущности)
  if (typeof window !== "undefined" && typeof DOMParser !== "undefined") {
    const doc = new DOMParser().parseFromString(String(html), "text/html");
    const text = doc.body.textContent || "";
    return text
      .replace(/\u00A0/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  // Фоллбэк без DOMParser (на всякий случай)
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Безопасно обрезает строку до max символов.
 * Пытается не резать посередине слова: если возможно — отматывает до последнего пробела.
 * Если обрезали — добавляет omission (по умолчанию "...").
 *
 * @param text Исходный текст
 * @param max Максимальная длина (символов)
 * @param omission Суффикс при обрезании
 * @returns Обрезанный текст
 */
export function truncateText(
  text: string | null | undefined,
  max: number = 300,
  omission: string = "...",
): string {
  if (!text) return "";
  const normalized = String(text).replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;

  const slice = normalized.slice(0, max);
  const lastSpace = slice.lastIndexOf(" ");
  const safe = lastSpace > max * 0.7 ? slice.slice(0, lastSpace) : slice; // лёгкая эвристика
  return `${safe.trimEnd()}${omission}`;
}

/**
 * Утилита: HTML → короткий текст (HTML → plain → truncate).
 *
 * @param html HTML-строка
 * @param max Максимальная длина
 * @param omission Суффикс для конца строки
 * @returns Короткий безопасный текст
 */
export function htmlToShortText(
  html: string | null | undefined,
  max: number = 300,
  omission: string = "...",
): string {
  return truncateText(htmlToPlainText(html), max, omission);
}
