// Оставляем только цифры
export const extractDigits = (s: string) => s.replace(/\D/g, "");

// Форматируем 1000000 -> "1 000 000"
export const formatWithSpaces = (n: number | string) => {
  const only = extractDigits(String(n));
  if (!only) return "";
  return only.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
