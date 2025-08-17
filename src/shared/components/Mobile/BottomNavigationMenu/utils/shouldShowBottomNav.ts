import { matchPath } from "react-router-dom";

/**
 * Набор паттернов маршрутов, на которых нижнее меню ДОЛЖНО БЫТЬ СКРЫТО.
 * Паттерны соответствуют синтаксису react-router (поддержка :params).
 *
 * В будущем расширяй этот массив по мере необходимости.
 */
export const BOTTOM_NAV_HIDDEN_PATTERNS: string[] = [
  "/properties/create",
  "/properties/:id/update",
];

/**
 * Проверяет, нужно ли показывать нижнее меню на текущем pathname.
 *
 * @param pathname Текущий путь (например, из useLocation().pathname)
 * @returns true — если меню следует показывать; false — если скрыть.
 */
export function shouldShowBottomNav(pathname: string): boolean {
  // Скрываем, если ЛЮБОЙ паттерн совпал с текущим путём
  const isHidden = BOTTOM_NAV_HIDDEN_PATTERNS.some((pattern) =>
    matchPath({ path: pattern, end: true }, pathname),
  );
  return !isHidden;
}
