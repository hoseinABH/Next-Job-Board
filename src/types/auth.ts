import type { Nullable } from './common';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

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

export interface LoginActionPayload {
  loginDto: LoginDto;
  router: AppRouterInstance;
}

export interface RegisterDto extends LoginDto {
  firstName: string;
  lastName: string;
}
export interface RegisterActionPayload {
  registerDto: RegisterDto;
  router: AppRouterInstance;
}
