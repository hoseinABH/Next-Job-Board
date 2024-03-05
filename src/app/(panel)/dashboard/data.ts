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
