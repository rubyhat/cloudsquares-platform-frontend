import * as React from "react";
import { Controller, useFormContext, FieldErrors } from "react-hook-form";
import { TextField, InputAdornment } from "@mui/material";
import { textfieldInputStyles } from "./styles";

import { extractDigits, formatWithSpaces } from "./utils/number";
import { preventNonDigitKeydown } from "./utils/keys";
import { getCurrencySymbol } from "./utils/currency";
import { useUserProfile } from "@/shared/permissions/hooks";

interface BasicTextFieldProps<T extends Record<string, unknown>> {
  name: keyof T & string;
  label: string;

  /** Подсказка (placeholder) внутри поля ввода */
  placeholder: string;

  /** Тип HTML-инпута (например, "text", "password", "email") */
  type?: React.HTMLInputTypeAttribute;

  /** Состояние поля */
  disabled?: boolean;

  /** Размер инпута TextField */
  size?: "small" | "medium";

  /** Подсказка под инпутом */
  helperText?: React.ReactNode;

  /** Необходимый параметры для доступности полей в браузере */
  inputName?: string;
  autoComplete?: string;
  multiline?: boolean;
  minRows?: string | number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** Показать ли символ валюты слева (работает, когда type="number") */
  showCurrency?: boolean;
}

export const BasicTextField = <T extends Record<string, unknown>>({
  name,
  label,
  placeholder,
  type,
  disabled,
  size,
  helperText,
  inputName,
  autoComplete,
  multiline,
  minRows,
  onClick,
  showCurrency = false,
}: BasicTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useFormContext<T>();
  const fieldError = (errors as FieldErrors<T>)[name];

  const profile = useUserProfile();
  const currencySymbol = getCurrencySymbol(profile?.country_code);

  const isNumeric = type === "number";

  return (
    <Controller
      name={name}
      render={({ field }) => {
        // Формируем value/handlers единообразно для одного TextField
        const inputRef = field.ref;
        const onBlur = field.onBlur;

        const value = (() => {
          if (!isNumeric) return (field.value as string) ?? "";
          // в форме храним число (или undefined), а показываем строку с пробелами
          if (typeof field.value === "number")
            return formatWithSpaces(field.value);
          if (typeof field.value === "string" && field.value !== "") {
            return formatWithSpaces(Number(extractDigits(field.value)));
          }
          return "";
        })();

        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
          e,
        ) => {
          if (!isNumeric) {
            field.onChange(e);
            return;
          }
          const digits = extractDigits(e.target.value);
          const nextValue = digits === "" ? undefined : Number(digits);
          // сохраняем ЧИСЛО в react-hook-form
          field.onChange(nextValue as unknown as T[keyof T]);
        };

        // Для чисел рендерим type="text", чтобы можно было показать пробелы и не было step/scroll
        const effectiveType = isNumeric ? "text" : type;

        return (
          <TextField
            value={value}
            onChange={handleChange}
            inputRef={inputRef}
            onBlur={onBlur}
            name={inputName ?? name}
            autoComplete={autoComplete}
            label={label}
            type={effectiveType}
            placeholder={placeholder}
            disabled={disabled}
            size={size}
            onClick={onClick}
            error={!!fieldError?.message}
            helperText={(fieldError?.message as string) || helperText}
            sx={{ width: 1 }}
            multiline={multiline}
            minRows={minRows}
            slotProps={{
              input: {
                // стиль для MUI Input (OutlinedInput/FilledInput)
                sx: textfieldInputStyles,
                // адорнмент валюты (только когда нужно и только для "числового" режима)
                endAdornment:
                  isNumeric && showCurrency ? (
                    <InputAdornment
                      position="end"
                      sx={{ color: "customColors.labelsPrimary" }}
                    >
                      {currencySymbol}
                    </InputAdornment>
                  ) : undefined,
              },
              htmlInput: {
                // На мобилке откроется цифровая клавиатура
                inputMode: isNumeric ? "numeric" : undefined,
                // Подсказка для моб. клавиатуры
                // pattern: isNumeric ? "[0-9]*" : undefined,
                // Фильтруем всё, кроме цифр/служебных
                onKeyDown: isNumeric ? preventNonDigitKeydown : undefined,
                // Запрещаем изменение чисел колесиком (на всякий случай даже с type="text")
                onWheel: isNumeric
                  ? (e: { currentTarget: HTMLInputElement }) => {
                      (e.currentTarget as HTMLInputElement).blur();
                    }
                  : undefined,
              },
            }}
          />
        );
      }}
    />
  );
};
