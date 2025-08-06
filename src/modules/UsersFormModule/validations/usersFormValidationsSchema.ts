import { z } from "zod";

/**
 * Регулярное выражение для проверки номера телефона:
 * - начинается с +7
 * - допускает 10 цифр после +7 (всего 12 символов)
 * - без пробелов, дефисов и скобок
 */
const phoneRegex = /^\+7\d{10}$/;

export const usersFormValidationsSchema = z
  .object({
    phone: z
      .string()
      .regex(phoneRegex, {
        message: "Телефон должен начинаться с +7 и содержать 10 цифр",
      })
      .max(12, { message: "Слишком длинный номер телефона" }),

    first_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    last_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    middle_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    email: z
      .email({ message: "Некорректный формат email" })
      .max(255, { message: "Слишком длинное значение" }),

    country_code: z
      .string()
      .min(1, { message: "Укажите страну" })
      .max(255, { message: "Слишком длинное значение" }),

    role: z
      .string()
      .min(1, { message: "Укажите роль" })
      .max(255, { message: "Слишком длинное значение" }),

    password: z
      .string()
      .min(12, { message: "Пароль должен содержать минимум 12 символов" })
      .regex(/[A-Z]/, {
        message: "Пароль должен содержать хотя бы одну заглавную букву A-Z",
      })
      .regex(/[a-z]/, {
        message: "Пароль должен содержать хотя бы одну строчную букву a-z",
      })
      .regex(/\d/, {
        message: "Пароль должен содержать хотя бы одну цифру",
      })
      .regex(/[!*@#$%^&+=_-]/, {
        message:
          "Пароль должен содержать хотя бы один специальный символ (!*@#$%^&+=_-)",
      }),

    password_confirmation: z
      // .string({
      //   required_error: "Подтвердите пароль",
      //   invalid_type_error: "Подтвердите пароль",
      // })
      .string()
      .min(1, { message: "Подтвердите пароль" }),
  })
  .superRefine((data, ctx) => {
    if (
      data.password_confirmation &&
      data.password !== data.password_confirmation
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Пароли не совпадают",
        path: ["password_confirmation"],
      });
    }
  });

export type UsersFormData = z.infer<typeof usersFormValidationsSchema>;
