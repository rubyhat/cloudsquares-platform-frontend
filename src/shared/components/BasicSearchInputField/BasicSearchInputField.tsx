import React from "react";
import debounce from "lodash/debounce";
import { MdSearch } from "react-icons/md";
import { InputAdornment, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

/**
 * Пропсы для компонента `BasicSearchInputField`.
 */
interface BasicSearchInputFieldProps {
  /**
   * Функция, вызываемая при изменении значения в поле поиска.
   * Используется с debounce для оптимизации запросов.
   *
   * @param value Объект с поисковым запросом `{ searchQuery: string }`
   */
  onChange: (value: { searchQuery: string }) => void;

  /** Имя поля в форме (используется для `react-hook-form`) */
  name: string;

  /** Заголовок поля (опционально) */
  label?: string;

  /** Подсказка внутри поля (опционально) */
  placeholder?: string;
}

/** Задержка debounce в миллисекундах */
const DEBOUNCE_DELAY = 333;

/**
 * Базовый компонент поля ввода с debounce, используемый для поиска.
 * Интегрируется с `react-hook-form` и вызывает `onChange` с задержкой.
 *
 * @param {BasicSearchInputFieldProps} props Пропсы компонента
 * @returns React-компонент поискового поля
 */
export const BasicSearchInputField = ({
  name,
  label,
  onChange,
  placeholder,
}: BasicSearchInputFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  /**
   * Оптимизированная функция, вызываемая при изменении значения в поле.
   * Использует debounce для минимизации частых вызовов `onChange`.
   */
  const debouncedOnChange = React.useMemo(
    () =>
      debounce((value: string) => {
        onChange({ searchQuery: value });
      }, DEBOUNCE_DELAY),
    [onChange],
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          size="small"
          label={label}
          variant="outlined"
          placeholder={placeholder}
          sx={{ minWidth: 250, width: 1 }}
          helperText={errors[name]?.message as string}
          error={!!errors[name]}
          onChange={(e) => {
            field.onChange(e);
            debouncedOnChange(e.target.value);
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <MdSearch size={16} />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
};
