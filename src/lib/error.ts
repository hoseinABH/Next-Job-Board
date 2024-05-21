import { ZodError } from 'zod';
import * as messages from '@/constants/messages';

export type FormState = {
  status: 'UNSET' | 'SUCCESS' | 'ERROR';
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
};

export const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export function generateErrorFormState(): FormState {
  return {
    status: 'ERROR',
    message: messages.commonError,
    fieldErrors: {},
    timestamp: Date.now(),
  };
}
export function generateSuccessFormState(msg?: string): FormState {
  return {
    status: 'SUCCESS',
    message: msg || messages.commonSuccess,
    fieldErrors: {},
    timestamp: Date.now(),
  };
}
export function fromErrorToFormState(error: unknown) {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: error.errors[0].message,
      fieldErrors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR' as const,
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR' as const,
      message: messages.commonError,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
}
