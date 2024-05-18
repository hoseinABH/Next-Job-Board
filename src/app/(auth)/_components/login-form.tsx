'use client';
// Common components
import FieldError from '@/components/field-error';
import SubmitButton from '@/components/submit-button';
import { Input } from '@/components/ui/input';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import { useFormState } from 'react-dom';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Actions
import { login } from '@/actions/auth';

interface LoginFormProps {
  redirectUrl?: string;
}

export default function LoginForm({ redirectUrl = '/' }: LoginFormProps) {
  const [formState, action] = useFormState(login, EMPTY_FORM_STATE);
  useToastMessage(formState);
  return (
    <form action={action} className="mt-8 w-full max-w-sm space-y-8">
      <div className="space-y-2">
        <Input
          name="username"
          dir="ltr"
          autoComplete="username"
          placeholder="نام کاربری"
          className="placeholder:text-right"
        />
        <FieldError formState={formState} name="username" />
      </div>
      <div className="space-y-2">
        <Input
          name="password"
          type="password"
          dir="ltr"
          autoComplete="current-password"
          placeholder="رمز عبور"
          className="placeholder:text-right"
        />
        <FieldError formState={formState} name="password" />
      </div>
      <input type="hidden" className="hidden" value={redirectUrl} name="returnUrl" />
      <SubmitButton className="mt-4 w-full">ورود به حساب کاربری</SubmitButton>
    </form>
  );
}
