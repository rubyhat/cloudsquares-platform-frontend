export enum ServiceType {
  search = "search",
  sell = "sell",
  rent = "rent",
  lease = "lease",
}

export enum ServiceTypeDisplayText {
  search = "Поиск",
  sell = "Продажа",
  rent = "Аренда",
  lease = "Сдача в аренду",
}

export interface Customer {
  id: string;
  first_name: string;
  last_name?: string;
  middle_name?: string;
  phone: string;
  description: string;
  email?: string;
  service_type: ServiceType;
  linked_objects: string[]; // Массив id объектов недвижимости, которыми интересовался клиент
}
