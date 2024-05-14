import type { UserRole } from './user';

export interface LoginDto {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
export interface RegisterResponse {
  refreshToken: string;
  token: string;
  tokenExpires: Date;
  user: any;
}

export type LoadingKeys = 'login' | 'register';

export type AuthLoading = Record<LoadingKeys, boolean>;

export interface RegisterDto extends LoginDto {
  firstName: string;
  lastName: string;
  email: string;
  companyName?: string;
  userType: UserRole;
}
