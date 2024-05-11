import type { Nullable } from './common';

export interface LoginDto {
  username: string;
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
  tokenExpires: Date;
  user: LoggedInUserInfo;
}

export type LoadingKeys = 'login' | 'register' | 'fetchMe';

export type AuthLoading = Record<LoadingKeys, boolean>;


export type UserType = "OuterUser" | "InnerUser" | "Company"

export interface RegisterDto extends LoginDto {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  userType: UserType
}
