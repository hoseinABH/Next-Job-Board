import type { EducationDegree } from '@/types/resume';

export interface Position {
  title: string;
  contract: string;
  salary: string;
  educationDegree: EducationDegree;
  isUrgent: boolean;
}

export const positions: Position[] = [
  {
    title: 'برنامه نویس',
    contract: 'قرارداد',
    salary: '250.00',
    educationDegree: 'Bachelor',
    isUrgent: false,
  },
  {
    title: 'منابع انسانی',
    contract: 'قرارداد',
    salary: '150.00',
    educationDegree: 'Bachelor',
    isUrgent: true,
  },
  {
    title: 'تحلیلگر',
    contract: 'مشاوره',
    salary: '350.00',
    educationDegree: 'Master',
    isUrgent: false,
  },
  {
    title: 'برنامه نویس',
    contract: 'طولانی مدت',
    salary: '450.00',
    educationDegree: 'MiddleSchoolDiploma',
    isUrgent: true,
  },
  {
    title: 'تست نویس',
    contract: 'قرارداد',
    salary: '550.00',
    educationDegree: 'Master',
    isUrgent: false,
  },
  {
    title: 'بازاریابی',
    contract: 'پاره وقت',
    salary: '200.00',
    educationDegree: 'Bachelor',
    isUrgent: false,
  },
  {
    title: 'مدیریت',
    contract: 'استخدام رسمی',
    salary: '300.00',
    educationDegree: 'Master',
    isUrgent: false,
  },
];
