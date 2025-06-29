/**
 * Перечисление ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 */
export enum UserRole {
  user = "user",
  superadmin = "superadmin",
  supermanager = "supermanager",
}

/**
 * Отображаемый текст для ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 */
export enum UserRoleDisplayText {
  user = "Пользователь",
  superadmin = "Админ",
  supermanager = "Менеджер",
}

/**
 * Отображаемый цвет для ролей пользователей
 * @enum {string} user - default
 * @enum {string} superadmin - error
 * @enum {string} supermanager - warning
 */
export enum UserRoleColor {
  user = "default",
  superadmin = "error",
  supermanager = "warning",
}
