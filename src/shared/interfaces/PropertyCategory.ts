export interface PropertyCategory {
  id: string;
  slug: string;
  title: string;
  parent_id: string | null;
  level: number;
  position: number;
  is_active: boolean;
  created_at: string; // "2025-06-25T20:04:27.790Z";
  updated_at: string; // "2025-06-25T20:04:27.790Z";
}
