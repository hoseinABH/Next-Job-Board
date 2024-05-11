import type { Nullable } from './common';

export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginResponse {
  refreshToken: string;
  token: string;
  tokenExpires: Date;
  user: any;
}

export type LoadingKeys = 'login' | 'register' | 'fetchMe';

export type AuthLoading = Record<LoadingKeys, boolean>;

export type UserType = 'OuterUser' | 'InnerUser' | 'Company';

export interface RegisterDto extends LoginDto {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  userType: UserType;
}
