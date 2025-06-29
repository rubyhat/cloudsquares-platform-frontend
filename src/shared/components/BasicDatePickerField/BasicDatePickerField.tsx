import React from "react";
import { format, parseISO } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

interface BasicDatePickerFieldProps {
  name: string;
  label: string;
  disablePast?: boolean;
}

/**
 * Универсальный компонент DatePicker, связанный с react-hook-form.
 *
 * @param {string} name - Имя поля для связи с react-hook-form.
 * @param {string} label - Отображаемый заголовок поля.
 * @param {boolean} disablePast - Отключает выбор прошедшей даты.
 */
export const BasicDatePickerField: React.FC<BasicDatePickerFieldProps> = ({
  name,
  label,
  disablePast = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...field}
          disablePast={disablePast}
          label={label}
          value={field.value ? parseISO(field.value) : null}
          onChange={(date) =>
            field.onChange(date ? format(date, "yyyy-MM-dd") : "")
          }
          slotProps={{
            textField: {
              error: !!errors[name],
              helperText: errors[name]?.message as string,
              placeholder: "Выберите дату",
            },
          }}
        />
      )}
    />
  );
};
