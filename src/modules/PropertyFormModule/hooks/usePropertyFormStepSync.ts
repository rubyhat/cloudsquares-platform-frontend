import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyFormMode } from "@/shared/interfaces/PropertyForm";
import { PropertyFormSteps, usePropertyFormStore } from "../store";

function isPropertyFormStep(
  value: string | null | undefined,
): value is PropertyFormSteps {
  return (
    !!value && (Object.values(PropertyFormSteps) as string[]).includes(value)
  );
}

// TODO: добавить защиту от ручного изменения URL/ссылки в кнопках на открытие формы на шаге, который не предусмотрен.
// Например открытие сразу последнего шага при редактировании/создании
export function usePropertyFormStepSync(mode: PropertyFormMode) {
  const [searchParams, setSearchParams] = useSearchParams();

  const step = usePropertyFormStore((s) => s.step);
  const setStep = usePropertyFormStore((s) => s.setStep);
  const setMode = usePropertyFormStore((s) => s.setMode);

  React.useEffect(() => {
    setMode(mode);
  }, [mode, setMode]);

  // CREATE: один раз ставим basic_data, URL не трогаем.
  const didInitCreateRef = React.useRef(false);
  React.useEffect(() => {
    if (mode !== PropertyFormMode.create) return;
    if (didInitCreateRef.current) return;
    didInitCreateRef.current = true;

    if (step !== PropertyFormSteps.basic_data) {
      setStep(PropertyFormSteps.basic_data);
    }
  }, [mode, step, setStep]);

  // EDIT: URL — источник истины.
  React.useEffect(() => {
    if (mode !== PropertyFormMode.edit) return;

    const raw = searchParams.get("step");
    const urlStep = isPropertyFormStep(raw) ? (raw as PropertyFormSteps) : null;

    // 1) Если URL валиден и отличается — применяем его в store.
    if (urlStep && urlStep !== step) {
      setStep(urlStep);
      return;
    }

    // 2) Если URL пуст — дозапишем его.
    if (!urlStep) {
      const desired = isPropertyFormStep(step)
        ? step
        : PropertyFormSteps.basic_data;

      // сначала подровняем store (на случай «левого» значения)
      if (step !== desired) {
        setStep(desired);
      }

      const next = new URLSearchParams(searchParams);
      next.set("step", desired);
      // replace, чтобы не замусоривать историю
      setSearchParams(next, { replace: true });
      return;
    }

    // 3) Если URL валиден и уже равен store — ничего не делаем.
  }, [mode, searchParams, step, setSearchParams, setStep]);
}
