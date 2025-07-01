import { UserRole } from "../permissions/roles";
import { AgencySlim } from "./Agency";
import { CountryCode } from "./Country";

export interface UserSlim {
  id: string;
  phone: string;
  first_name: string;
  last_name: string | null;
  middle_name: string | null;
}
export interface User extends UserSlim {
  role: UserRole;
  country_code: CountryCode;
  is_active: boolean;
  email: string;
  agency: AgencySlim | null;
}

export interface PostNewUserResponseData {
  user: User;
  access_token: string;
  refresh_token: string;
}
