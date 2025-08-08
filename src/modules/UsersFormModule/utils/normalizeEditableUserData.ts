import { User } from "../../../shared/interfaces";
import { UsersFormData } from "../validations/usersFormValidationsSchema";

export const normalizeEditableUserData = ({
  phone,
  email,
  country_code,
  role,
  first_name,
  last_name,
  middle_name,
}: User): UsersFormData => ({
  phone: "+" + phone,
  email,
  country_code,
  role,
  password: "",
  password_confirmation: "",
  first_name: first_name || "",
  last_name: last_name || "",
  middle_name: middle_name || "",
});
