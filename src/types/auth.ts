import { Nullable } from './common';

export interface LoginDto {
  email: string;
  password: string;
}

export interface UserInfo {
  id: string;
  email: string;
  provider: 'email';
  socialId: Nullable<string>;
  firstName: string;
  lastName: string;
  role: {
    id: number;
  };
  status: {
    id: number;
  };
  createdAt: string;
  updatedAt: string;
}
export interface LoginResponse {
  refreshToken: string;
  token: string;
  user: UserInfo;
}

export type LoadingKeys = 'login' | 'register';

export type AuthLoading = Record<LoadingKeys, boolean>;
