'use client';
import { useEffect } from 'react';
// Common components
import ControlledInput from '@/components/controlled-input';
import ControlledRadio from '@/components/controlled-radio';
import ControlledSelect from '@/components/controlled-select';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Utilities
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Actions
import ResumeActions from '@/store/User/user.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';
// Types
import type { UpdatePersonalDto } from '@/types/user';
// Constants
import { militaryStatusOptions } from '@/constants';

const personalInfoFormSchema = z.object({
  firstName: z.string().min(1, { message: 'نام را وارد کنید' }),
  lastName: z.string().min(1, { message: 'نام خانوادگی را وارد کنید' }),
  maritalStatus: z.enum(['single', 'married', 'unknown'], {
    required_error: 'وضعیت تاهل را انتخاب کنید',
  }),
  gender: z.enum(['female', 'male', 'other'], {
    required_error: 'جنسیت را انتخاب کنید',
  }),
  militaryStatus: z.enum(
    [
      'EducationalExemption',
      'ActiveService',
      'ExemptionCard',
      'ServiceCompletionCard',
      'Absent',
    ],
    {
      required_error: 'وضعیت خدمت را انتخاب کنید',
    }
  ),
  address: z.string().min(1, { message: 'محل سکونت را وارد کنید' }),
  birthDate: z.string().min(1, { message: 'تاریخ تولد را وارد کنید' }),
  phone: z.string().min(1, { message: 'شماره موبایل را وارد کنید' }),
});

type FormData = typeof personalInfoFormSchema;

export function PersonalInfoModal() {
  const dispatch = useAppDispatch();
  const { modals, loading, resumeData } = useAppSelector(
    (state) => state.resume
  );
  const state = resumeData?.personalInfo;
  const form = useForm<z.infer<FormData>>({
    resolver: zodResolver(personalInfoFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      address: '',
      birthDate: '',
      phone: '',
    },
  });
  function onSubmit(values: z.infer<FormData>) {
    const data = {
      ...state,
      ...values,
    } as UpdatePersonalDto;
    dispatch(ResumeActions.updatePersonalInfo(data));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'personalInfo'));
    form.reset();
  }

  useEffect(() => {
    if (modals.personalInfo) {
      if (state?.address) {
        form.setValue('address', state?.address);
      }
      if (state?.birthDate) {
        form.setValue('birthDate', state?.birthDate);
      }
      if (state?.firstName) {
        form.setValue('firstName', state?.firstName);
      }
      if (state?.lastName) {
        form.setValue('lastName', state?.lastName);
      }
      if (state?.gender) {
        form.setValue('gender', state?.gender);
      }
      if (state?.maritalStatus) {
        form.setValue('maritalStatus', state?.maritalStatus);
      }
      if (state?.militaryStatus) {
        form.setValue('militaryStatus', state?.militaryStatus);
      }
      if (state?.phone) {
        form.setValue('phone', state?.phone);
      }
    }
  }, [
    form,
    modals.personalInfo,
    state?.address,
    state?.birthDate,
    state?.firstName,
    state?.gender,
    state?.lastName,
    state?.maritalStatus,
    state?.militaryStatus,
    state?.phone,
  ]);

  return (
    <Dialog open={modals.personalInfo} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen pt-12 pb-4 sm:pt-4 overflow-auto">
        <DialogHeader>
          <DialogTitle>مشخصات فردی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="personalInfo"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <ControlledInput
              control={form.control}
              name="firstName"
              label="نام"
            />
            <ControlledInput
              control={form.control}
              name="lastName"
              label="نام خانوادگی"
            />
            <ControlledRadio
              control={form.control}
              name="gender"
              label="جنسیت"
              options={[
                { title: 'زن', value: 'female' },
                { title: 'مرد', value: 'male' },
              ]}
            />
            <ControlledRadio
              control={form.control}
              name="maritalStatus"
              label="وضعیت تاهل"
              options={[
                { title: 'متاهل', value: 'married' },
                { title: 'مجرد', value: 'single' },
              ]}
            />
            <ControlledInput
              control={form.control}
              name="birthDate"
              label="تاریخ تولد"
              inputProps={{ dir: 'ltr', type: 'date' }}
            />
            <ControlledInput
              control={form.control}
              name="address"
              label="محل سکونت"
            />
            <ControlledSelect
              control={form.control}
              name="militaryStatus"
              label="وضعیت خدمت"
              options={militaryStatusOptions}
            />
            <ControlledInput
              control={form.control}
              name="phone"
              label="شماره موبایل"
              inputProps={{ dir: 'ltr', inputMode: 'tel' }}
            />
          </form>
          <DialogFooter>
            <Button
              form="personalInfo"
              type="submit"
              loading={loading.updatePersonal}
            >
              ثبت اطلاعات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
