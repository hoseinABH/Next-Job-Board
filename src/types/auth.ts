import type { Nullable } from './common';

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoggedInUserInfo {
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
  user: LoggedInUserInfo;
}

export type LoadingKeys = 'login' | 'register' | 'fetchMe';

export type AuthLoading = Record<LoadingKeys, boolean>;

export interface RegisterDto extends LoginDto {
  firstName: string;
  lastName: string;
}
