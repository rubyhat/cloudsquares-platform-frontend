interface DisplayUserNameProps {
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
}
/**
 * Формирует короткое и полное представление имени пользователя.
 *
 * - Полное имя (`fullName`) → "Фамилия Имя Отчество"
 * - Краткое имя (`shortName`) → "Фамилия Имя" (отчество опускается)
 * - Если отсутствуют все данные, возвращается "-"/"-"
 *
 * @param {DisplayUserNameProps} params - Объект с полями ФИО
 * @param {string | null | undefined} params.first_name - Имя
 * @param {string | null | undefined} params.last_name - Фамилия
 * @param {string | null | undefined} params.middle_name - Отчество
 * @returns {{ shortName: string; fullName: string }} Объект с полным и кратким именем
 */
export const displayUserName = ({
  first_name,
  last_name,
  middle_name,
}: DisplayUserNameProps): { shortName: string; fullName: string } => {
  const hasAnyName = first_name || last_name || middle_name;

  if (!hasAnyName) {
    return { shortName: "-", fullName: "-" };
  }

  const fullNameParts = [last_name, first_name, middle_name].filter(Boolean);
  const shortNameParts = [last_name, first_name].filter(Boolean);

  return {
    fullName: fullNameParts.join(" "),
    shortName: shortNameParts.join(" "),
  };
};
