import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { PropertyFormSteps, usePropertyFormStore } from "../store";

/**
 * Проверяет, что строка является допустимым шагом формы.
 */
function isPropertyFormStep(
  value: string | null | undefined,
): value is PropertyFormSteps {
  if (!value) return false;
  return (Object.values(PropertyFormSteps) as string[]).includes(value);
}

/**
 * Достаёт шаг из URLSearchParams с валидацией.
 */
function getStepFromSearchParams(
  searchParams: URLSearchParams,
): PropertyFormSteps | null {
  const raw = searchParams.get("step");
  return isPropertyFormStep(raw) ? (raw as PropertyFormSteps) : null;
}

/**
 * Синхронизация шага мастера с URL `?step=...`.
 *
 * Правила:
 * - Создание (mode === "create"): один раз ставим basic_data. URL не меняем вообще.
 * - Редактирование (mode === "edit"): если `?step=` валиден — открываем его,
 *   иначе — fallback basic_data и подставляем его в URL (replace).
 * - При смене шага из стора в режиме редактирования — записываем его в URL (push),
 *   но только если реально поменялось значение (дедупликация).
 */
export function usePropertyFormStepSync(mode: PropertyFormMode) {
  const [searchParams, setSearchParams] = useSearchParams();

  const step = usePropertyFormStore((s) => s.step);
  const setStep = usePropertyFormStore((s) => s.setStep);
  const setMode = usePropertyFormStore((s) => s.setMode);

  // Флаг, чтобы в режиме create не запускать установку шага повторно под StrictMode
  const didInitCreateRef = React.useRef(false);

  // Всегда держим mode в сторе актуальным
  React.useEffect(() => {
    setMode(mode);
  }, [mode, setMode]);

  // === CREATE MODE: один раз на маунт ставим basic_data. URL не трогаем. ===
  React.useEffect(() => {
    if (mode !== PropertyFormMode.create) return;
    if (didInitCreateRef.current) return;
    didInitCreateRef.current = true;

    if (step !== PropertyFormSteps.basic_data) {
      setStep(PropertyFormSteps.basic_data);
    }
    // НИЧЕГО не делаем с ?step=..., просто игнорируем его.
  }, [mode, setStep, step]);

  // === EDIT MODE: читаем ?step и синхронизируем стор ← URL ===
  React.useEffect(() => {
    if (mode !== PropertyFormMode.edit) return;

    const fromUrl = getStepFromSearchParams(searchParams);
    const desired = fromUrl ?? PropertyFormSteps.basic_data;

    // Ставим шаг из URL (или basic_data по умолчанию)
    if (step !== desired) {
      setStep(desired);
    }

    // Если шага в URL не было — дозапишем его, но только если реально меняем
    if (!fromUrl) {
      if (searchParams.get("step") !== desired) {
        const next = new URLSearchParams(searchParams);
        next.set("step", desired);
        setSearchParams(next, { replace: true });
      }
    }
  }, [mode, searchParams, setSearchParams, setStep, step]);

  // === EDIT MODE: при смене шага в сторе — обновляем URL (push), с дедупликацией ===
  React.useEffect(() => {
    if (mode !== PropertyFormMode.edit) return;

    const currentInUrl = searchParams.get("step");
    if (currentInUrl === step) return; // уже синхронизировано

    const next = new URLSearchParams(searchParams);
    next.set("step", step);
    setSearchParams(next, { replace: false }); // пушим, чтобы работал Back/Forward
  }, [mode, step, searchParams, setSearchParams]);
}
