'use server';
// Utilities
import { getBaseApiUrl } from '@/lib/common';
import { FormState, fromErrorToFormState } from '@/lib/error';
// Actions
import { redirect } from 'next/navigation';
import { setCookie } from './cookie';
// Schema
import { LoginSchema } from '@/schema/auth';
// Types
import type { LoginDto, LoginResponse } from '@/types/auth';
import type { BaseApiResponse } from '@/types/http';
// Configs
import * as Routes from '@/config/routes';
// Constants
import { HttpStatus } from '@/constants/http-status';
import * as messages from '@/constants/messages';
import { isRedirectError } from 'next/dist/client/components/redirect';

const prefix = 'auth';
const endpoint = `${getBaseApiUrl()}/${prefix}`;
const tokenExpirationDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

async function login(_: any, formData: FormData): Promise<FormState | undefined> {
  const username = formData.get('username');
  const password = formData.get('password');
  const loginDto = { username, password } as LoginDto;
  try {
    const data = LoginSchema.parse(loginDto);
    const result = await fetch(`${endpoint}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response: BaseApiResponse<LoginResponse> = await result.json();
    if (response.status !== HttpStatus.OK) {
      return {
        status: 'ERROR',
        message: messages.commonError,
        fieldErrors: {},
        timestamp: Date.now(),
      };
    }
    setCookie(response.data.token, tokenExpirationDate);
    redirect(Routes.CV_MAKER);
  } catch (error) {
    /** This Condition Resolve Redirect issue **/
    if (isRedirectError(error)) {
      throw error;
    }
    return fromErrorToFormState(error);
  }
}

export { login };
