/**
 * Перечисление ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} admin - Админ
 * @enum {string} admin_manager - Менеджер админа
 * @enum {string} agent - Агент недвижимости
 * @enum {string} agent_admin - Админ агентства недвижимости
 * @enum {string} agent_manager - Менеджер агентства недвижимости
 */
export enum UserRole {
  user = "user",
  admin = "admin",
  admin_manager = "admin_manager",
  agent = "agent",
  agent_admin = "agent_admin",
  agent_manager = "agent_manager",
}

/**
 * Отображаемый текст для ролей пользователей
 * @enum {string} user - Пользователь
 * @enum {string} superadmin - Админ
 * @enum {string} supermanager - Менеджер
 */
export enum UserRoleDisplayText {
  user = "Пользователь",
  admin = "Админ",
  admin_manager = "Менеджер",
  agent = "Агент недвижимости",
  agent_admin = "Администратор агентства недвижимости",
  agent_manager = "Менеджер агентства недвижимости",
}

/**
 * Отображаемый цвет для ролей пользователей
 * @enum {string} user - default
 * @enum {string} superadmin - error
 * @enum {string} supermanager - warning
 */
export enum UserRoleColor {
  user = "default",
  admin = "error",
  admin_manager = "warning",
  agent = "info",
  agent_admin = "secondary",
  agent_manager = "er",
}
