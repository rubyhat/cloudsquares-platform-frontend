import { z } from "zod";
import { phoneRegex } from "../../../shared/constants";

/**
 * Схема валидации формы входа.
 *
 * Проверяет корректность введённых данных:
 * - `username` - обязательное поле, строка.
 * - `password` - обязательное поле, строка.
 */

export const LoginFormValidationSchema = z.object({
  /** Логин пользователя (обязательное поле) */
  phone: z
    .string()
    .min(12, {
      message:
        "Введите корректный номер телефона. Номер должен начинаться с +7.",
    })
    .regex(phoneRegex, {
      message: "Телефон должен начинаться с +7 и содержать 10 цифр",
    })
    .max(12, { message: "Слишком длинный номер телефона" }),

  /** Пароль пользователя (обязательное поле) */
  password: z.string().min(1, { message: "Введите пароль" }),
});

/**
 * Тип данных, используемых в форме входа.
 *
 * Автоматически выводится из `LoginFormValidationSchema`.
 */
export type LoginFormDataTypes = z.infer<typeof LoginFormValidationSchema>;
