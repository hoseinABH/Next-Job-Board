import type { UserRole } from './user';
export interface LoginDto {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
export interface RegisterDto extends LoginDto {
  firstName?: string;
  lastName?: string;
  email: string;
  companyName?: string;
  userType: UserRole;
}
