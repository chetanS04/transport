export interface User {
  id: number;
  username: string;
  email: string;
  password: number;
}

export interface State {
  id: number;
  name: string;
  status: boolean;
  tenants_count?: number;
}

export interface City {
  id: number;
  name: string;
  state_id: number;
  pincode?: string;
  status: boolean;
  stateName: string;
  tenantCount?: number;
}

export interface SubscriptionTypes {
  id: number;
  name: string;
  price: number;
  duration: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}