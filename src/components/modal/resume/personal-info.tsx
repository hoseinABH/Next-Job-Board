// Common components
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
// Utilities
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
import { useForm } from 'react-hook-form';
// Types
import type { UpdatePersonalDto } from '@/types/resume';
// Constants
import { militaryStatusOptions } from '@/constants';

const personalInfoFormSchema = z.object({
  firstName: z.string().min(1, { message: 'نام را وارد کنید' }),
  lastName: z.string().min(1, { message: 'نام خانوادگی را وارد کنید' }),
  maritalStatus: z.enum(['single', 'married'], {
    required_error: 'وضعیت تاهل را وارد کنید',
  }),
  gender: z.enum(['female', 'male'], {
    required_error: 'جنسیت را وارد کنید',
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
      required_error: 'وضعیت خدمت را وارد کنید',
    }
  ),
  address: z.string().min(1, { message: 'محل سکونت را وارد کنید' }),
  birthDate: z.string().min(1, { message: 'تاریخ تولد را وارد کنید' }),
  phone: z.string().min(1, { message: 'شماره موبایل را وارد کنید' }),
});

type FormData = typeof personalInfoFormSchema;

export function PersonalInfoModal() {
  const dispatch = useAppDispatch();
  const { modals, loading } = useAppSelector((state) => state.resume);
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
      photo: {
        id: '',
      },
      aboutMe: '',
      ...values,
    } as UpdatePersonalDto;
    dispatch(ResumeActions.updatePersonalInfo(data));
    form.reset();
  }
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'personalInfo'));
    form.reset();
  }

  return (
    <Dialog open={modals.personalInfo} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen py-12 sm:py-4 overflow-auto">
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
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>جنسیت</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel>زن</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem id="male" value="male" />
                        </FormControl>
                        <FormLabel htmlFor="male">مرد</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وضعیت تاهل</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem value="married" />
                        </FormControl>
                        <FormLabel>متاهل</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-x-2">
                        <FormControl>
                          <RadioGroupItem value="single" />
                        </FormControl>
                        <FormLabel>مجرد</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تاریخ تولد</FormLabel>
                  <FormControl>
                    <Input dir="ltr" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>محل سکونت</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="militaryStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وضعیت خدمت</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="وضعیت خدمت" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {militaryStatusOptions.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>شماره موبایل</FormLabel>
                  <FormControl>
                    <Input {...field} dir="ltr" inputMode="numeric" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <DialogFooter>
            <Button
              form="personalInfo"
              type="submit"
              loading={loading.updatePersonal}
            >
              ذخیره تغییرات
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
