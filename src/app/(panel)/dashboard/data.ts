import {
  CalendarDays,
  FileText,
  LucideIcon,
  MessagesSquare,
  UsersRound,
} from 'lucide-react';

export interface Statistic {
  key: string;
  value: string;
  title: string;
  icon: LucideIcon;
}
export const statistics = [
  {
    key: 'interviews',
    value: '9',
    title: 'تعداد مصاحبه ها',
    icon: CalendarDays,
  },
  {
    key: 'applications',
    value: '31',
    title: 'رزومه های ارسالی',
    icon: FileText,
  },
  {
    key: 'profileViews',
    value: '75',
    title: 'مشاهده پروفایل',
    icon: UsersRound,
  },
  {
    key: 'unreadMessages',
    value: '12',
    title: 'پیام خوانده نشده',
    icon: MessagesSquare,
  },
];

export const positions = [
  {
    title: 'برنامه نویس',
    contract: 'قرارداد',
    salary: '$250.00',
    education: 'کارشناسی',
    isUrgent: false,
  },
  {
    title: 'منابع انسانی',
    contract: 'قرارداد',
    salary: '$150.00',
    education: 'کارشناسی',
    isUrgent: true,
  },
  {
    title: 'تحلیلگر',
    contract: 'مشاوره',
    salary: '$350.00',
    education: 'کارشناسی ارشد',
    isUrgent: false,
  },
  {
    title: 'برنامه نویس',
    contract: 'طولانی مدت',
    salary: '$450.00',
    education: 'دیپلم',
    isUrgent: true,
  },
  {
    title: 'تست نویس',
    contract: 'قرارداد',
    salary: '$550.00',
    education: 'کارشناسی ارشد',
    isUrgent: false,
  },
  {
    title: 'بازاریابی',
    contract: 'پاره وقت',
    salary: '$200.00',
    education: 'کارشناسی',
    isUrgent: false,
  },
  {
    title: 'مدیریت',
    contract: 'استخدام رسمی',
    salary: '$300.00',
    education: 'کارشناسی ارشد',
    isUrgent: false,
  },
];
