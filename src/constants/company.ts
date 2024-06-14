import type { SelectOption } from '@/components/select-field';
import type { ApplicationStatus } from '@/types/company';

export interface ApplicationMetadata {
  title: string;
  status: 'warning' | 'secondary' | 'success' | 'destructive';
}
export const mapApplicationStatus: Record<ApplicationStatus, ApplicationMetadata> = {
  0: {
    title: 'در انتظار بررسی',
    status: 'warning',
  },
  1: {
    title: 'مصاحبه',
    status: 'secondary',
  },
  2: {
    title: 'استخدام‌شده',
    status: 'success',
  },
  3: {
    title: 'رد‌شده',
    status: 'destructive',
  },
};

export const positionTypeOptions: SelectOption[] = [
  {
    value: 'InnerUser',
    title: 'داخلی',
  },
  {
    value: 'OuterUser',
    title: 'عمومی',
  },
];
