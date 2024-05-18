'use client';
import SubmitButton from '@/components/submit-button';
// Common components
import FieldError from '@/components/field-error';
import { Input } from '@/components/ui/input';
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
      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          dir="ltr"
          placeholder="ایمیل"
          className="placeholder:text-right"
        />
        <FieldError formState={formState} name="email" />
      </div>
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
      <div className="space-y-2">
        <Input name="firstName" placeholder="نام" />
        <FieldError formState={formState} name="firstName" />
      </div>
      <div className="space-y-2">
        <Input name="lastName" placeholder="نام خانوادگی" />
        <FieldError formState={formState} name="lastName" />
      </div>
      <SubmitButton className="mt-4 w-full">ثبت نام</SubmitButton>
    </form>
  );
}
