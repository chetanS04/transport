export interface CommonData {
  id: number;
  name: string;
  status: boolean;
}

export interface User extends CommonData {
  email: string;
  password: number;
  role: string;
}

export interface State extends CommonData {
  tenants_count?: number;
}

export interface City extends CommonData {
  state_id: number;
  pincode?: string;
  stateName: string;
  tenantCount?: number;
}

export interface SubscriptionTypes extends CommonData {
  price: number;
  duration: string;
  created_at: Date;
  updated_at: Date;
}

export interface Settings {
  key: string;
  value: string;
  status?: boolean;
}