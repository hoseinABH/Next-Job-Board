'use client';
// Common components
import { CalendarDays, FileText, UsersRound } from 'lucide-react';
import StatisticCard, { Statistic } from './statistic-card';
// Types
import type { GetCompanyDashboardResponse } from '@/types/company';
import { useMemo } from 'react';

export interface Props {
  dashboardData: GetCompanyDashboardResponse;
}

export default function Statistics({ dashboardData }: Props) {
  const statisticsArray: Statistic[] = useMemo(
    () => [
      {
        key: 1,
        value: dashboardData.invitationsForInterviewCount,
        title: 'تعداد مصاحبه ها',
        icon: CalendarDays,
      },
      {
        key: 2,
        value: dashboardData.sentRequestsCount,
        title: 'رزومه های ارسالی',
        icon: FileText,
      },
      {
        key: 3,
        value: dashboardData.profileVisitCount,
        title: 'مشاهده پروفایل',
        icon: UsersRound,
      },
    ],
    [dashboardData],
  );
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {statisticsArray.map((statistic) => (
        <StatisticCard key={statistic.key} statistic={statistic} />
      ))}
    </div>
  );
}
