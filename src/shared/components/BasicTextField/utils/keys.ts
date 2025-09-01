import * as React from "react";

const allowed = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
]);

/** Разрешаем только цифры и служебные клавиши */
export const preventNonDigitKeydown = (
  e: React.KeyboardEvent<HTMLInputElement>,
) => {
  if (allowed.has(e.key) || e.ctrlKey || e.metaKey) return;
  if (/^\d$/.test(e.key)) return;
  e.preventDefault();
};
