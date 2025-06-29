import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { formControlStyles } from "../../styles";

// todo: Сделать по размерам таким же, как <BasicTextField />

/**
 * Пропсы для компонента `BasicFormSelectField`.
 */
interface BasicFormSelectFieldProps {
  /** Имя поля в форме (используется для `react-hook-form`) */
  name: string;

  /** Заголовок, отображаемая над полем */
  label?: string;

  /** Текст-заполнитель (placeholder), отображаемый при пустом значении */
  placeholder: string;

  /** Массив значений для выпадающего списка */
  data: { value: string; label: string }[];

  /** Флаг блокировки выбора (`true` - поле заблокировано) */
  disabled: boolean;

  /** Опции для кнопки в селекте, если переданы, то будет отображена кнопка с заданным текстом и вызовом переданной функции */
  buttonOptions?: {
    buttonLabel: string;
    onButtonClick: () => void;
  };
}

/**
 * Компонент выпадающего списка (select) с интеграцией `react-hook-form`.
 *
 * @param {BasicFormSelectFieldProps} props Пропсы компонента
 * @returns React-компонент `Select` с `react-hook-form`
 */
export const BasicFormSelectField = ({
  name,
  label,
  placeholder,
  data,
  buttonOptions,
  disabled = false,
}: BasicFormSelectFieldProps) => {
  const { formState, control } = useFormContext();
  const { errors } = formState;

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
                <MenuItem>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={buttonOptions.onButtonClick}
                    fullWidth
                  >
                    {buttonOptions.buttonLabel}
                  </Button>
                </MenuItem>
              )}
            </Select>
          )}
        />
        {errors[name] && (
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {errors[name].message as string}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
