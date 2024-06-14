'use client';
// Common components
import InputField from '@/components/input-field';
import SelectField from '@/components/select-field';
import SubmitButton from '@/components/submit-button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Actions
import { updatePersonalInfo } from '@/actions/user';
// Utilities
import { EMPTY_FORM_STATE } from '@/lib/error';
// Hooks
import { useToastMessage } from '@/hooks/use-toast-message';
import useUserStore from '@/store/user';
import { useFormState } from 'react-dom';
// Constants
import { genderOptions, martialOptions, militaryServiceOptions } from '@/constants/user';

interface Props {
  defaultValues?: {
    firstName: string;
    lastName: string;
    maritalStatus: number;
    gender: number;
    militaryService: number;
    city: string;
    phoneNumber: string;
  };
}

export function PersonalInfoModal({ defaultValues }: Props) {
  const [formState, action] = useFormState(updatePersonalInfo, EMPTY_FORM_STATE);
  const { modals, openModal } = useUserStore();
  useToastMessage(formState, closeDialog);
  function onOpenChange(open: boolean) {
    openModal(open, 'personalInfo');
  }
  function closeDialog() {
    openModal(false, 'personalInfo');
  }
  return (
    <Dialog open={modals.personalInfo} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-screen max-w-xl overflow-auto pb-4 pt-12 sm:pt-4">
        <DialogHeader>
          <DialogTitle>مشخصات فردی</DialogTitle>
          <DialogDescription>لطفا فیلد های مورد نظر را تکمیل نمایید</DialogDescription>
        </DialogHeader>
        <form action={action} className="space-y-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField
              maxLength={12}
              defaultValue={defaultValues?.firstName}
              label="نام"
              name="firstName"
            />
            <InputField
              defaultValue={defaultValues?.lastName}
              label="نام خانوادگی"
              name="lastName"
              formState={formState}
              maxLength={16}
            />
            <InputField
              defaultValue={defaultValues?.phoneNumber}
              label="شماره موبایل"
              name="phoneNumber"
              type="tel"
              inputMode="tel"
              maxLength={11}
              formState={formState}
            />
            <SelectField
              defaultValue={String(defaultValues?.maritalStatus)}
              label="وضعیت تاهل"
              name="maritalStatus"
              options={martialOptions}
              formState={formState}
            />
            <SelectField
              defaultValue={String(defaultValues?.gender)}
              label="جنسیت"
              name="gender"
              options={genderOptions}
              formState={formState}
            />
            <InputField
              defaultValue={defaultValues?.city}
              label="محل سکونت"
              name="city"
              formState={formState}
            />
            <SelectField
              defaultValue={String(defaultValues?.militaryService)}
              name="militaryService"
              label="وضعیت خدمت"
              options={militaryServiceOptions}
              formState={formState}
            />
          </div>
          <DialogFooter>
            <SubmitButton>ثبت اطلاعات</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
