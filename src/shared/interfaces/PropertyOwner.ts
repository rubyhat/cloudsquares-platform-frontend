export enum PropertyOwnerRole {
  primary = "primary", // Основной владелец
  partner = "partner", // Совладелец
  relative = "relative", // Родственник
  other = "other", // Другое
}

export enum DisplayTextPropertyOwnerRole {
  primary = "Основной владелец",
  partner = "Совладелец",
  relative = "Родственник",
  other = "Другое",
}

export interface PropertyOwner {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
  email: string;
  notes: string;
  role: PropertyOwnerRole;
  is_deleted: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AllPropertyOwnersResponseData {
  data: PropertyOwner[];
  total: number;
  pages: number;
}
