import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppModule } from "./modules/AppModule";
import "./assets/global.scss";

/**
 * @file main.tsx
 * @description Точка входа в React-приложение.
 *
 * Этот файл отвечает за монтирование корневого компонента `AppModule`
 * в DOM-элемент с `id="root"`. Используется `StrictMode` для выявления
 * потенциальных проблем в режиме разработки.
 *
 * @dependencies
 * - React: библиотека для создания пользовательских интерфейсов.
 * - ReactDOM: метод `createRoot` для современного рендеринга.
 * - AppModule: главный модуль приложения.
 * - global.scss: глобальные стили приложения.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppModule />
  </StrictMode>,
);

// Добавляем фиктивный экспорт, чтобы TypeDoc обработал этот файл
export {};
