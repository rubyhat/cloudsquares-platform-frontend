import { Controller, useFormContext, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { textfieldInputStyles } from "./styles";

/**
 * Универсальные пропсы для `BasicTextField`, принимающие любой тип формы.
 */
interface BasicTextFieldProps<T extends Record<string, unknown>> {
  /** Имя поля формы (ключ объекта T) */
  name: keyof T & string; // Теперь name гарантированно строка

  /** Заголовок поля (отображается над инпутом) */
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

  /** If true, a textarea element is rendered instead of an input. */
  multiline?: boolean | undefined;

  /** Minimum number of rows to display when multiline option is set to true. */
  minRows?: string | number | undefined;

  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Универсальный компонент текстового поля для формы.
 *
 * Интегрируется с `react-hook-form` и использует `TextField` из MUI.
 *
 * @param {BasicTextFieldProps<T>} props Пропсы компонента
 * @returns React-компонент текстового поля
 */
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
}: BasicTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useFormContext<T>();

  const fieldError = (errors as FieldErrors<T>)[name];

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          name={inputName ?? name}
          autoComplete={autoComplete}
          label={label}
          type={type}
          sx={{ width: 1 }}
          slotProps={{
            // input: { sx: { fontSize: size === "small" ? 14 : 16 } },
            // htmlInput: { sx: { p: 1.25 } },
            input: {
              // Фиксим цветной бекграунд на странице логина в инпутах, когда браузер сам заполняет данные
              sx: textfieldInputStyles,
            },
          }}
          placeholder={placeholder}
          error={!!fieldError?.message}
          helperText={(fieldError?.message as string) || helperText}
          disabled={disabled}
          size={size}
          onClick={onClick}
          multiline={multiline}
          minRows={minRows}
        />
      )}
    />
  );
};
