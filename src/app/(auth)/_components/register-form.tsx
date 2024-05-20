'use client';
import SubmitButton from '@/components/submit-button';
// Common components
import InputField from '@/components/input-field';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Actions
import { register } from '@/actions/auth';
// Hooks
import Maybe from '@/components/maybe';
import { useToastMessage } from '@/hooks/use-toast-message';
import { UserRole } from '@/types/user';
import { useState } from 'react';
import { useFormState } from 'react-dom';

export default function RegisterForm() {
  const [userType, setUserType] = useState<UserRole>('InnerUser');
  const [formState, action] = useFormState(register, EMPTY_FORM_STATE);
  useToastMessage(formState);
  function onChangeTab(entity: UserRole) {
    setUserType(entity);
  }
  return (
    <Tabs defaultValue="InnerUser" className="w-full max-w-sm">
      <TabsList className="mx-auto mt-8 flex">
        <TabsTrigger onClick={() => onChangeTab('InnerUser')} value="InnerUser">
          کارجو
        </TabsTrigger>
        <TabsTrigger onClick={() => onChangeTab('Company')} value="Company">
          شرکت
        </TabsTrigger>
      </TabsList>
      <form action={action} className="mt-8 w-full space-y-6">
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
        <Maybe condition={userType === 'Company'}>
          <InputField name="companyName" placeholder="نام شرکت" formState={formState} />
        </Maybe>
        <Maybe condition={userType === 'InnerUser'}>
          <InputField name="firstName" placeholder="نام" formState={formState} />
          <InputField name="lastName" placeholder="نام خانوادگی" formState={formState} />
        </Maybe>
        <input defaultValue={userType} name="userType" hidden className="hidden" />
        <SubmitButton className="mt-4 w-full">ثبت نام</SubmitButton>
      </form>
    </Tabs>
  );
}
