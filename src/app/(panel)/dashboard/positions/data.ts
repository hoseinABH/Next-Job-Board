import type { Grade } from '@/types/user';

export interface Position {
  title: string;
  contract: string;
  salary: string;
  educationDegree: Grade;
  isUrgent: boolean;
}

export const positions: Position[] = [
  {
    title: 'برنامه نویس',
    contract: 'قرارداد',
    salary: '250.00',
    educationDegree: 2,
    isUrgent: false,
  },
  {
    title: 'منابع انسانی',
    contract: 'قرارداد',
    salary: '150.00',
    educationDegree: 2,
    isUrgent: true,
  },
  {
    title: 'تحلیلگر',
    contract: 'مشاوره',
    salary: '350.00',
    educationDegree: 3,
    isUrgent: false,
  },
  {
    title: 'برنامه نویس',
    contract: 'طولانی مدت',
    salary: '450.00',
    educationDegree: 0,
    isUrgent: true,
  },
  {
    title: 'تست نویس',
    contract: 'قرارداد',
    salary: '550.00',
    educationDegree: 3,
    isUrgent: false,
  },
  {
    title: 'بازاریابی',
    contract: 'پاره وقت',
    salary: '200.00',
    educationDegree: 2,
    isUrgent: false,
  },
  {
    title: 'مدیریت',
    contract: 'استخدام رسمی',
    salary: '300.00',
    educationDegree: 3,
    isUrgent: false,
  },
];
