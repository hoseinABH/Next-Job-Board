'use client';
import SubmitButton from '@/components/submit-button';
// Common components
import InputField from '@/components/input-field';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Actions
import { register } from '@/actions/auth';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [formState, action] = useFormState(register, EMPTY_FORM_STATE);
  useToastMessage(formState);
  return (
    <form action={action} className="mt-8 w-full max-w-sm space-y-8">
      <InputField
        name="email"
        type="email"
        dir="ltr"
        placeholder="ایمیل"
        className="placeholder:text-right"
        formState={formState}
      />
      <InputField
        name="username"
        dir="ltr"
        autoComplete="username"
        placeholder="نام کاربری"
        className="placeholder:text-right"
        formState={formState}
      />
      <InputField
        name="password"
        type="password"
        dir="ltr"
        autoComplete="current-password"
        placeholder="رمز عبور"
        className="placeholder:text-right"
        formState={formState}
      />
      <InputField name="firstName" placeholder="نام" formState={formState} />
      <InputField name="lastName" placeholder="نام خانوادگی" formState={formState} />
      <SubmitButton className="mt-4 w-full">ثبت نام</SubmitButton>
    </form>
  );
}
