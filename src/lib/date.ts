import { formatDistance, format, differenceInCalendarDays } from 'date-fns-jalali';

export function persianDate(date: string) {
  return format(date, 'yyyy/MM/dd ');
}

export function dateWithMonthTitle(date: string) {
  return format(date, 'dd MMMM yyyy');
}

export function timeAgo(date: string) {
  return formatDistance(date, new Date(), { addSuffix: true });
}

export function differenceInDays(date: string) {
  const days = differenceInCalendarDays(date, new Date());
  if (days > 0) {
    return `${days} روز دیگر`;
  }
  return 'منقضی شده';
}
