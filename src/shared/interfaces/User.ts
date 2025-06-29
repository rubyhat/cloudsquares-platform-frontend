import { UserRole } from "../permissions/roles";
import { CountryCode } from "./Country";

export interface User {
  id: string;
  phone: string;
  role: UserRole;
  country_code: CountryCode;
  is_active: boolean;
  email: string;
  first_name: string;
  last_name: string | null;
  middle_name: string | null;
}

export interface PostNewUserResponseData {
  user: User;
  access_token: string;
  refresh_token: string;
}
