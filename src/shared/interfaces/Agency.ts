import { CountryCode } from "./Country";

export interface Agency {
  id: string;
  title: string;
  slug: string;
  custom_domain: string;
  is_blocked: boolean;
  blocked_at: null | string; // "2025-06-25T20:04:27.575Z";
  is_active: boolean;
  deleted_at: null | string; // "2025-06-25T20:04:27.575Z";
  created_at: string; // "2025-06-25T20:04:27.575Z";
  updated_at: string; // "2025-06-25T20:04:27.575Z";
  agency_setting: AgencySetting;
  agency_plan: AgencyPlan;
}

export interface AgencySlim {
  id: string;
  title: string;
  slug: string;
  custom_domain?: string;
}

export interface AgencySetting {
  id: string;
  site_title: string;
  site_description: null | string;
  home_page_content: null | string;
  contacts_page_content: null | string;
  meta_keywords: null | string;
  meta_description: null | string;
  color_scheme: null | string;
  logo_url: null | string;
  locale: CountryCode;
  timezone: string;
  created_at: string; // "2025-06-25T20:04:27.746Z";
  updated_at: string; // "2025-06-25T20:04:27.746Z";
  translations: {
    ru: AgencySettingTranslation;
    en: AgencySettingTranslation;
    kz: AgencySettingTranslation;
  };
}

export interface AgencySettingTranslation {
  site_title: string;
  site_description: null | string;
  home_page_content: null | string;
  contacts_page_content: null | string;
  meta_keywords: null | string;
  meta_description: null | string;
}

export interface AgencyPlan {
  id: string;
  title: string;
  description: string;
  max_employees: number;
  max_properties: number;
  max_photos: number;
  max_buy_requests: number;
  max_sell_requests: number;
  is_custom: boolean;
  is_active: boolean;
  is_default: boolean;
  created_at: string; // "2025-06-25T20:04:17.021Z";
  updated_at: string; // "2025-06-25T20:04:17.021Z";
}
