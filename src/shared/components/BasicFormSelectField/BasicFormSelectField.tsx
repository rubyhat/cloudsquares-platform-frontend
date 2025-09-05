import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Controller, FieldErrors, useFormContext, Path } from "react-hook-form";
import { formControlStyles } from "../../styles";

// todo: Сделать по размерам таким же, как <BasicTextField />

/**
 * Пропсы для компонента `BasicFormSelectField`.
 */
interface BasicFormSelectFieldProps<T extends Record<string, unknown>> {
  /** Имя поля в форме (используется для `react-hook-form`) */
  name: Path<T>;

  /** Заголовок, отображаемая над полем */
  label?: string;

  /** Текст-заполнитель (placeholder), отображаемый при пустом значении */
  placeholder: string;

  /** Массив значений для выпадающего списка */
  data: { value: string; label: string }[];

  /** Флаг блокировки выбора (`true` - поле заблокировано) */
  disabled?: boolean;

  /** Опции для кнопки в селекте, если переданы, то будет отображена кнопка с заданным текстом и вызовом переданной функции */
  buttonOptions?: {
    buttonLabel: string;
    onButtonClick: () => void;
    buttonColor?:
      | "inherit"
      | "primary"
      | "secondary"
      | "success"
      | "error"
      | "info"
      | "warning";
  };
}

/**
 * Компонент выпадающего списка (select) с интеграцией `react-hook-form`.
 *
 * @param {BasicFormSelectFieldProps} props Пропсы компонента
 * @returns React-компонент `Select` с `react-hook-form`
 */
export const BasicFormSelectField = <T extends Record<string, unknown>>({
  name,
  label,
  placeholder,
  data,
  buttonOptions,
  disabled = false,
}: BasicFormSelectFieldProps<T>) => {
  const { formState, control } = useFormContext<T>();
  const { errors } = formState;
  const fieldError = (errors as FieldErrors<T>)[name];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {label && (
        <Typography component="p" variant="body1" sx={{ textWrap: "nowrap" }}>
          {label}
        </Typography>
      )}
      <FormControl sx={formControlStyles(Boolean(errors[name]))}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              variant="outlined"
              size="small"
              sx={{ minWidth: 200 }}
              disabled={disabled}
            >
              <MenuItem disabled value="">
                <Typography color="customColors.colorsGrey">
                  {placeholder}
                </Typography>
              </MenuItem>

              {data.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
              {buttonOptions && (
                <MenuItem onClick={buttonOptions.onButtonClick}>
                  <Button
                    variant="outlined"
                    color={buttonOptions.buttonColor || "primary"}
                    sx={{ width: { xs: 1, md: "fit-content" } }}
                  >
                    {buttonOptions.buttonLabel}
                  </Button>
                </MenuItem>
              )}
            </Select>
          )}
        />
        {fieldError && (
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {fieldError?.message as string}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
