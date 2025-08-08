import { z } from "zod";
import { BasicDrawerMode } from "../../../shared/interfaces/Shared";

const phoneRegex = /^\+7\d{10}$/;

export const createUsersFormSchema = (mode: BasicDrawerMode) => {
  const passwordValidation = z
    .string()
    .nonempty("Укажите пароль")
    .min(12, {
      message: "Пароль должен содержать минимум 12 символов",
    })
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
      message: "Пароль должен содержать хотя бы один спецсимвол (!*@#$%^&+=_-)",
    });

  const passwordSchema =
    mode === BasicDrawerMode.create
      ? passwordValidation
      : z.string().optional();

  const passwordConfirmationSchema =
    mode === BasicDrawerMode.create
      ? z.string().nonempty("Подтвердите пароль")
      : z.string().optional();

  return z
    .object({
      phone: z
        .string()
        .regex(phoneRegex, {
          message: "Телефон должен начинаться с +7 и содержать 10 цифр",
        })
        .max(12, { message: "Слишком длинный номер телефона" }),

      first_name: z.string().max(255).optional().or(z.literal("")),
      last_name: z.string().max(255).optional().or(z.literal("")),
      middle_name: z.string().max(255).optional().or(z.literal("")),
      email: z.email().max(255),
      country_code: z.string().min(1).max(255),
      role: z.string().min(1).max(255),
      password: passwordSchema,
      password_confirmation: passwordConfirmationSchema,
    })
    .refine(
      (data) =>
        mode === BasicDrawerMode.edit ||
        !data.password ||
        data.password === data.password_confirmation,
      {
        path: ["password_confirmation"],
        message: "Пароли не совпадают",
      },
    );
};

export type UsersFormData = z.infer<ReturnType<typeof createUsersFormSchema>>;
