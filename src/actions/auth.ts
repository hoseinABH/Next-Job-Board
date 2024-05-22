'use server';
// Utilities
import { mutate } from '@/lib/client';
import { getBaseApiUrl } from '@/lib/common';
import { FormState, fromErrorToFormState, generateErrorFormState } from '@/lib/error';
import { isRedirectError } from 'next/dist/client/components/redirect';
// Actions
import { redirect } from 'next/navigation';
import { clearSession, clearUserRole, setSession, setUserRole } from './cookie';
// Schema
import { LoginSchema, RegisterSchema } from '@/schema/auth';
// Types
import type { LoginDto, LoginResponse, RegisterDto } from '@/types/auth';
// Configs
import * as Routes from '@/config/routes';
// Constants
import { HttpStatus } from '@/constants/http-status';

const prefix = 'auth';
const endpoint = `${getBaseApiUrl()}/${prefix}`;
const tokenExpirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

async function login(_: any, formData: FormData): Promise<FormState | undefined> {
  const username = formData.get('username');
  const password = formData.get('password');
  const returnUrl = formData.get('returnUrl') as string;
  const loginDto = { username, password } as LoginDto;
  const redirectUrl = returnUrl || Routes.CV_MAKER;
  try {
    const data = LoginSchema.parse(loginDto);
    const response = await mutate<LoginDto, LoginResponse>(`${endpoint}/login`, 'POST', data);
    if (response.status === HttpStatus.OK) {
      const targetRole = response.data.userRole;
      setUserRole(targetRole, tokenExpirationDate);
      setSession(response.data.token, tokenExpirationDate);
      redirect(targetRole === 'Company' ? Routes.DASHBOARD : redirectUrl);
    }
    return generateErrorFormState();
  } catch (error) {
    /** This Condition Resolve Redirect issue **/
    if (isRedirectError(error)) {
      throw error;
    }
    return fromErrorToFormState(error);
  }
}
async function register(_: any, formData: FormData): Promise<FormState | undefined> {
  const email = formData.get('email');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const username = formData.get('username');
  const password = formData.get('password');
  const companyName = formData.get('companyName');
  const userType = formData.get('userType');
  const registerDto = {
    email,
    firstName,
    lastName,
    username,
    password,
    companyName,
    userType,
  };
  try {
    const data = RegisterSchema.parse(registerDto);
    const response = await mutate<RegisterDto>(`${endpoint}/register`, 'POST', data);
    if (response.status !== HttpStatus.Created) {
      generateErrorFormState();
    }
    redirect(Routes.LOGIN);
  } catch (error) {
    /** This Condition Resolve Redirect issue **/
    if (isRedirectError(error)) {
      throw error;
    }
    return fromErrorToFormState(error);
  }
}
async function logout() {
  clearSession();
  clearUserRole();
  redirect(Routes.LOGIN);
}

export { login, logout, register };
